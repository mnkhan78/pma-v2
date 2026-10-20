const express = require("express");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many enquiries. Please try again later.",
  },
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const cleanText = (value, maxLength) =>
  typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";

router.post("/", contactLimiter, async (req, res) => {
  try {
    const name = cleanText(req.body.name, 100);
    const clinicName = cleanText(req.body.clinicName, 150);
    const email = cleanText(req.body.email, 254);
    const phone = cleanText(req.body.phone, 20);
    const message = cleanText(req.body.message, 1500);

    if (!name || !clinicName || !email || !phone) {
      return res.status(400).json({
        message: "Please complete all required fields.",
      });
    }

    const validEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validPhone =
      /^\+?[0-9 ()-]{7,20}$/.test(phone);

    if (!validEmail || !validPhone) {
      return res.status(400).json({
        message: "Please provide a valid email and phone number.",
      });
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      console.error("CONTACT_TO_EMAIL is not configured.");

      return res.status(500).json({
        message: "Unable to process your enquiry right now.",
      });
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New PMA enquiry from ${name}`,
      text: [
        "New enquiry received through the PMA website.",
        "",
        `Name: ${name}`,
        `Clinic: ${clinicName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message || "No additional message provided.",
      ].join("\n"),
    });

    return res.status(200).json({
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("PMA contact form error:", error.message);

    return res.status(500).json({
      message: "Unable to send your enquiry. Please try again later.",
    });
  }
});

module.exports = router;