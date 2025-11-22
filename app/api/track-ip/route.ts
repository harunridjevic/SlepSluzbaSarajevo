import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";

  console.log("======================================");
  console.log("📡 NEW TRACK-IP REQUEST");
  console.log("Detected visitor IP:", ip);

  const targetEmail = process.env.RECIPIENT_EMAIL;
  console.log("Email will be sent TO:", targetEmail);

  // 🔥 5-second cooldown to prevent Next.js spam
  const cookie = req.headers.get("cookie");
  if (cookie?.includes("cooldown=true")) {
    console.log("⚠️ Skipping — Next.js duplicate detected (cooldown)");
    console.log("======================================");
    return NextResponse.json({ skipped: true });
  }

  // 🛑 Blocked IPs
  const blocked = ["77.78.215.154"];
  if (blocked.includes(ip)) {
    console.log("⛔ BLOCKED IP:", ip);
    console.log("======================================");
    return new NextResponse(JSON.stringify({ error: "Zabranjen pristup." }), {
      status: 403,
    });
  }

  try {
    console.log("📤 Sending email through Brevo...");

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY!,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { email: "usaacc123223@gmail.com" },
        to: [{ email: targetEmail }],
        subject: `Nova IP adresa posjetioca: ${ip}`,
        htmlContent: `
          <p>Novi posjetilac je pristupio vašoj web stranici.</p>
          <p><strong>IP:</strong> ${ip}</p>
        `,
      }),
    });

    const brevoJson = await brevoRes.json();

    console.log("📬 Brevo API Status Code:", brevoRes.status);
    console.log("📨 Brevo Response JSON:", brevoJson);

    if (brevoRes.ok) {
      console.log("✅ SUCCESS — Email accepted by Brevo.");
    } else {
      console.log("❌ ERROR — Brevo rejected the email.");
    }

    console.log("======================================");

    // 🧁 Set a 5-second cooldown cookie to prevent Next.js spam
    const response = NextResponse.json({
      message: "IP logged and email sent.",
      ip,
      sentTo: targetEmail,
    });

    response.headers.set(
      "Set-Cookie",
      "cooldown=true; Max-Age=5; Path=/; SameSite=Lax"
    );

    return response;

  } catch (error) {
    console.log("❌ UNCAUGHT ERROR:", error);
    console.log("======================================");

    return new NextResponse(
      JSON.stringify({ error: "Email sending failed" }),
      { status: 500 }
    );
  }
}
