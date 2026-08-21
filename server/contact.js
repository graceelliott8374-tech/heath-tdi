import { Router } from "express";
import { z } from "zod";

import { formRateLimiter, rejectSpam } from "./antiSpam.js";
import { sendEmail } from "./email.js";

const router = Router();

const serviceOptions = z.enum([
  "managed-it",
  "network-solutions",
  "structured-cabling",
  "fiber-optics",
  "communications",
  "wifi-wireless",
  "cybersecurity",
  "cloud-solutions",
  "security-surveillance",
  "consultation",
]);

const serviceLabels = {
  "managed-it": "Managed IT Services",
  "network-solutions": "Network Solutions",
  "structured-cabling": "Structured Cabling",
  "fiber-optics": "Fiber Optics",
  communications: "Communications",
  "wifi-wireless": "WiFi & Wireless",
  cybersecurity: "Cybersecurity",
  "cloud-solutions": "Cloud Solutions",
  "security-surveillance": "Security & Surveillance",
  consultation: "Not Sure / Consultation",
};

const contactSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    company: z.string().trim().max(150).default(""),
    email: z.string().trim().email().max(254),
    phone: z.string().trim().max(50).default(""),
    services: z.array(serviceOptions).max(10).default([]),
    message: z.string().trim().min(1).max(5000),
  })
  .strict();

router.post("/", formRateLimiter, rejectSpam, async (req, res) => {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Please check the submitted information.",
      errors: result.error.flatten().fieldErrors,
    });
  }

  const { name, company, email, phone, services, message } = result.data;

  const selectedServices = services.length
    ? services.map((service) => serviceLabels[service]).join(", ")
    : "None selected";

  const emailText = [
    "New website contact submission",
    "",
    `Name: ${name}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Services: ${selectedServices}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const recipient = process.env.CONTACT_RECIPIENT;

    if (!recipient) {
      throw new Error(
        "Missing required environment variable: CONTACT_RECIPIENT",
      );
    }

    await sendEmail({
      to: recipient,
      subject: "New Heath TDI Website Contact",
      text: emailText,
      replyTo: email,
    });

    return res.status(200).json({
      message: "Your message has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact email failed:", error.message);

    return res.status(502).json({
      message:
        "We could not send your message right now. Please try again later.",
    });
  }
});

export default router;
