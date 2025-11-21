// app/api/track-ip/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend client with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: Request) {
  // Extract the forwarded IP address
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";

  console.log("IP posjetioca:", ip);  // Log the IP address for debugging

  // List of blocked IPs (adjust as needed)
  const blocked = ["77.78.215.154"]; // Add IPs you want to block here

  if (blocked.includes(ip)) {
    console.log(`Zabranjen pristup za IP: ${ip}`);  // Log blocked IPs
    return new NextResponse(JSON.stringify({ error: "Zabranjen pristup." }), {
      status: 403,
    });
  }

  try {
    console.log("Slanje emaila sa IP adresom...");  // Log before sending email

    // Send email via Resend API
    const response = await resend.emails.send({
      from: "IP Logger <onboarding@resend.dev>",  // You can change this to your own email
      to: process.env.RECIPIENT_EMAIL!,  // Email recipient from environment variable
      subject: `Nova IP adresa posjetioca: ${ip}`,  // IP in the subject line
      text: `Novi posjetilac je pristupio vašoj web stranici. Njegova IP adresa je: ${ip}`,  // IP in the body
    });

    console.log("Resend API response:", response);  // Log Resend API response

    // Return a success response if the email is sent successfully
    return NextResponse.json({ message: "IP zabilježen i email poslan.", ip });

  } catch (error) {
    console.error("Greška pri slanju emaila:", error);  // Log error if email fails
    return new NextResponse(JSON.stringify({ error: "Neuspješno slanje emaila" }), { status: 500 });
  }
}
