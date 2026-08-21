import { Router } from "express";
import { z } from "zod";

import { formRateLimiter, rejectSpam } from "./antiSpam.js";
import { sendEmail } from "./email.js";

const router = Router();

const issueTypes = z.enum([
  "technical-issue",
  "existing-issue",
  "service-request",
  "project-installation",
]);

const priorities = z.enum(["low", "normal", "high", "critical"]);

const serviceOptions = z.enum([
  "managed-it",
  "network-solutions",
  "structured-cabling",
  "fiber-optics",
  "communications",
  "cybersecurity",
  "cloud-solutions",
  "security-surveillance",
  "wifi-wireless",
  "other",
]);

const issueTypeLabels = {
  "technical-issue": "Technical Issue",
  "existing-issue": "Existing Issue",
  "service-request": "Service Request",
  "project-installation": "Project or Installation",
};

const priorityLabels = {
  low: "Low",
  normal: "Normal",
  high: "High",
  critical: "Critical",
};

const serviceLabels = {
  "managed-it": "Managed IT Services",
  "network-solutions": "Network Solutions",
  "structured-cabling": "Structured Cabling",
  "fiber-optics": "Fiber Optics",
  communications: "Communications",
  cybersecurity: "Cybersecurity",
  "cloud-solutions": "Cloud Solutions",
  "security-surveillance": "Security & Surveillance",
  "wifi-wireless": "WiFi & Wireless",
  other: "Other / Not Sure",
};

const supportSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    company: z.string().trim().max(150).default(""),
    email: z.string().trim().email().max(254),
    phone: z.string().trim().min(1).max(50),
    issueType: issueTypes,
    priority: priorities,
    services: z.array(serviceOptions).max(10).default([]),
    subject: z.string().trim().min(1).max(200),
    description: z.string().trim().min(1).max(10000),
    requestRingo: z
      .union([z.boolean(), z.literal("yes")])
      .transform((value) => value === true || value === "yes")
      .default(false),
  })
  .strict();

router.post("/", formRateLimiter, rejectSpam, async (req, res) => {
  const result = supportSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Please check the submitted information.",
      errors: result.error.flatten().fieldErrors,
    });
  }

  const {
    name,
    company,
    email,
    phone,
    issueType,
    priority,
    services,
    subject,
    description,
    requestRingo,
  } = result.data;

  const selectedServices = services.length
    ? services.map((service) => serviceLabels[service]).join(", ")
    : "None selected";

  const emailSubject = subject.replace(/[\r\n]+/g, " ").slice(0, 150);

  const emailText = [
    "New website support request",
    "",
    `Name: ${name}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Request type: ${issueTypeLabels[issueType]}`,
    `Priority: ${priorityLabels[priority]}`,
    `Affected services: ${selectedServices}`,
    `Ringo requested: ${requestRingo ? "Yes, if available" : "No"}`,
    "",
    `Subject: ${subject}`,
    "",
    "Description:",
    description,
  ].join("\n");

  try {
    const recipient = process.env.SUPPORT_RECIPIENT;

    if (!recipient) {
      throw new Error(
        "Missing required environment variable: SUPPORT_RECIPIENT",
      );
    }

    await sendEmail({
      to: recipient,
      subject: `[${priorityLabels[priority]}] ${emailSubject}`,
      text: emailText,
      replyTo: email,
    });

    return res.status(200).json({
      message: "Your support request has been submitted successfully.",
    });
  } catch (error) {
    console.error("Support email failed:", error.message);

    return res.status(502).json({
      message:
        "We could not send your support request right now. Please try again later.",
    });
  }
});

export default router;
