// app/sitemap/route.ts (sau app/sitemap.xml/route.ts, după structura ta)
import { NextResponse } from "next/server";

const pages = [
  // Pagini principale
  { loc: "https://www.ag-webdev.de/", priority: 1.0 },
  { loc: "https://www.ag-webdev.de/about", priority: 0.8 },
  { loc: "https://www.ag-webdev.de/kontakt", priority: 0.8 },
  { loc: "https://www.ag-webdev.de/fuerstenfeldbruck", priority: 0.9 },
  { loc: "https://www.ag-webdev.de/augsburg", priority: 0.9 },
  { loc: "https://www.ag-webdev.de/webdesign", priority: 0.9 },
  { loc: "https://www.ag-webdev.de/Webentwicklung", priority: 0.9 },
  { loc: "https://www.ag-webdev.de/seo", priority: 0.9 },
  { loc: "https://www.ag-webdev.de/google-indexierung", priority: 0.8 },
  { loc: "https://www.ag-webdev.de/wartung-support", priority: 0.8 },
  { loc: "https://www.ag-webdev.de/beratung", priority: 0.8 },
  { loc: "https://www.ag-webdev.de/blog", priority: 0.7 },
  { loc: "https://www.ag-webdev.de/impressum", priority: 0.7 },
  { loc: "https://www.ag-webdev.de/datenschutz", priority: 0.7 },
  { loc: "https://www.ag-webdev.de/agb", priority: 0.7 },

  // ✅ Domain-Check (nou adăugat)
  { loc: "https://www.ag-webdev.de/domain-check", priority: 0.9 },

  // Blog / Unterseiten
  {
    loc: "https://www.ag-webdev.de/blog/wie-funktioniert-google-indexierung",
    priority: 0.7,
  },
  { loc: "https://www.ag-webdev.de/blog/webdesign-trends-2025", priority: 0.7 },
  { loc: "https://www.ag-webdev.de/blog/seo-fuer-anfanger", priority: 0.7 },
  { loc: "https://www.ag-webdev.de/blog/wozu-eine-homepage", priority: 0.7 },
  {
    loc: "https://www.ag-webdev.de/blog/wordpress-oder-headless-cms",
    priority: 0.7,
  },

  // Referenzen / Projekte
  {
    loc: "https://www.ag-webdev.de/referenzen/oberholzer-umzugservice",
    priority: 0.7,
  },
  {
    loc: "https://www.ag-webdev.de/referenzen/certus-solutions",
    priority: 0.7,
  },
  {
    loc: "https://www.ag-webdev.de/referenzen/fraga-online-shop",
    priority: 0.7,
  },
];

export async function GET() {
  const lastmod = new Date().toISOString().split("T")[0];

  const urls = pages
    .map(
      (page) => `
      <url>
        <loc>${page.loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <priority>${page.priority}</priority>
      </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
