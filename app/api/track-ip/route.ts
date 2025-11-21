// app/api/track-ip/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Inicijalizacija Resend klijenta sa API ključem
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";

  console.log("IP posjetioca:", ip); // Ispisivanje IP adrese u konzolu

  // Lista blokiranih IP adresa
  const blocked = ["77.78.215.154"]; // Dodajte IP adrese koje želite blokirati

  if (blocked.includes(ip)) {
    return new NextResponse(JSON.stringify({ error: "Zabranjen pristup." }), {
      status: 403,
    });
  }

  try {
    // Slanje emaila putem Resend servisa
    await resend.emails.send({
      from: "IP Logger",  // Možete promijeniti ovo u svoj email
      to: process.env.RECIPIENT_EMAIL!,  // Email odredišta uzet iz environment varijabli
      subject: `Nova IP adresa posjetioca: ${ip}`,  // IP adresa u predmetu emaila
      text: `Novi posjetilac je pristupio vašoj web stranici. Njegova IP adresa je: ${ip}`,  // IP adresa u tijelu emaila
    });

    return NextResponse.json({ message: "IP zabilježen i email poslan.", ip });

  } catch (error) {
    console.error("Greška pri slanju emaila:", error);
    return new NextResponse(JSON.stringify({ error: "Neuspješno slanje emaila" }), { status: 500 });
  }
}
