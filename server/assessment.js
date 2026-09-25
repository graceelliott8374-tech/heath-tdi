import { Router } from "express";
import { z } from "zod";

import { formRateLimiter, rejectSpam } from "./antiSpam.js";
import { sendEmail } from "./email.js";

const router = Router();

const preferredContactOptions = z.enum(["email", "phone"]);

const assessmentSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    company: z.string().trim().min(1).max(150),
    email: z.string().trim().email().max(254),
    phone: z.string().trim().max(50).default(""),
    concerns: z.string().trim().max(10000).default(""),
    preferredContact: preferredContactOptions,
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.preferredContact === "phone" && !data.phone) {
      ctx.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Phone number is required when phone is selected.",
      });
    }
  });

router.post("/", formRateLimiter, rejectSpam, async (req, res) => {
  const result = assessmentSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Please check the submitted information.",
      errors: result.error.flatten().fieldErrors,
    });
  }

  const { name, company, email, phone, concerns, preferredContact } =
    result.data;

  const emailText = [
    "New free network assessment request",
    "",
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Preferred contact method: ${
      preferredContact === "phone" ? "Phone" : "Email"
    }`,
    "",
    "Network / IT concerns:",
    concerns || "No concerns provided.",
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
      subject: `Free Network Assessment Request - ${company}`,
      text: emailText,
      replyTo: email,
    });

    return res.status(200).json({
      message:
        "Your free network assessment request has been submitted successfully.",
    });
  } catch (error) {
    console.error("Assessment email failed:", error.message);

    return res.status(502).json({
      message:
        "We could not send your assessment request right now. Please try again later.",
    });
  }
});

export default router;
