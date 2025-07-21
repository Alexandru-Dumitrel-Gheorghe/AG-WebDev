import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header/Header";

// Adaugă link-ul pentru Google Fonts în <head>
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
