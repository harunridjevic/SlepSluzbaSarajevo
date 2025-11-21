import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a Nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
  service: "gmail", // Gmail service or other email service
  auth: {
    user: process.env.EMAIL_USER, // Access the email user from the environment variable
    pass: process.env.EMAIL_PASS, // Access the email password from the environment variable
  },
});

async function sendEmail(ip: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email (from the environment variable)
    to: process.env.RECIPIENT_EMAIL, // Recipient's email (from the environment variable)
    subject: "New User IP Address",
    text: `A new user visited your site. Their IP address is: ${ip}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function GET(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";

  console.log("IP posjetioca:", ip);

  const blocked = ["77.78.215.154"]; // Add any blocked IP addresses here

  if (blocked.includes(ip)) {
    return new NextResponse(JSON.stringify({ error: "Zabranjen pristup." }), {
      status: 403,
    });
  }

  // Send the email with the IP address
  await sendEmail(ip);

  return NextResponse.json({ message: "IP zabilježen", ip });
}
