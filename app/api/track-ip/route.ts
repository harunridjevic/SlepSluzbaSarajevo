import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";

  console.log("IP posjetioca:", ip);

  // Block list
  const blocked = ["77.78.215.154"];

  if (blocked.includes(ip)) {
    console.log(`Zabranjen pristup za IP: ${ip}`);
    return new NextResponse(JSON.stringify({ error: "Zabranjen pristup." }), {
      status: 403,
    });
  }

  try {
    console.log("Slanje emaila sa IP adresom...");

    // ---- BREVO EMAIL SEND ----
    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY!,
        "Content-Type": "application/json",
        "accept": "application/json",
      },
      body: JSON.stringify({
        sender: { email: "noreply@example.com" },
        to: [{ email: process.env.RECIPIENT_EMAIL! }],
        subject: `Nova IP adresa posjetioca: ${ip}`,
        htmlContent: `
          <p>Novi posjetilac je pristupio vašoj web stranici.</p>
          <p><strong>IP:</strong> ${ip}</p>
        `,
      }),
    });

    const brevoJson = await brevoRes.json();
    console.log("Brevo API response:", brevoJson);

    if (!brevoRes.ok) {
      throw new Error("Brevo email API error");
    }

    return NextResponse.json({
      message: "IP zabilježen i email poslan.",
      ip,
    });

  } catch (error) {
    console.error("Greška pri slanju emaila:", error);
    return new NextResponse(
      JSON.stringify({ error: "Neuspješno slanje emaila" }),
      { status: 500 }
    );
  }
}
