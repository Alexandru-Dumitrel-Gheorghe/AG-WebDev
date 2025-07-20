import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header /> {/* Afișează Header-ul pe toate paginile */}
        {children}
      </body>
    </html>
  );
}
