import { NextResponse } from "next/server";

// Domainr (RapidAPI) trimite o listă de status-uri spațiu-delimitate.
// Dacă lista conține "inactive", domeniul e disponibil pentru înregistrare.
function isAvailableFromStatus(statusString: string): boolean {
  if (!statusString) return false;
  const parts = statusString.split(/\s+/);
  return parts.includes("inactive"); // ex.: "undelegated inactive" => disponibil
}

function isValidDomain(d: string) {
  return /^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(d);
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const domain = (searchParams.get("domain") || "").trim().toLowerCase();

    if (!isValidDomain(domain)) {
      return NextResponse.json({ error: "Ungültige Domain" }, { status: 400 });
    }

    const rapidKey = process.env.DOMAINR_API_KEY; // RapidAPI key
    if (!rapidKey) {
      return NextResponse.json(
        { error: "Serverfehler: API-Schlüssel nicht konfiguriert" },
        { status: 500 }
      );
    }

    const url = new URL("https://domainr.p.rapidapi.com/v2/status");
    url.searchParams.set("domain", domain);

    const r = await fetch(url.toString(), {
      cache: "no-store",
      headers: {
        "X-RapidAPI-Key": rapidKey,
        "X-RapidAPI-Host": "domainr.p.rapidapi.com",
      },
    });

    if (!r.ok) {
      const text = await r.text();
      return NextResponse.json(
        { error: `Domainr Fehler (${r.status}): ${text?.slice(0, 200)}` },
        { status: 502 }
      );
    }

    const data = await r.json();
    const first = data?.status?.[0];
    const statusString: string = first?.status || "";
    const available = isAvailableFromStatus(statusString);

    // Ținem statusString doar în răspunsul API (debug), nu îl afișăm în UI.
    return NextResponse.json({ domain, available, statusString });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
