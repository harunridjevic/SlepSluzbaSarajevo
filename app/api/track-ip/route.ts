// app/api/track-ip/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";

  console.log("IP posjetioca:", ip);

  const blocked = ["77.78.215.154"]; // ovdje dodaješ ručno IP adrese

  if (blocked.includes(ip)) {
    return new NextResponse(JSON.stringify({ error: "Zabranjen pristup." }), {
      status: 403,
    });
  }

  return NextResponse.json({ message: "IP zabilježen", ip });
}
