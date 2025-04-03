import express from "express";
import { createTransport } from "nodemailer";
import twilio from "twilio";
import cors from "cors";
import { json } from "body-parser";

const app = express();
app.use(cors());
app.use(json());

// Nodemailer transporter (for email)
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Twilio client (for SMS)
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // Your email
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Send SMS
    await twilioClient.messages.create({
      body: `New message from ${name} (${email}): ${message}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.MY_PHONE_NUMBER, // Your phone number
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.listen(5173, () => console.log("Server running on port 5173"));
