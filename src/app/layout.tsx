import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/context/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,400;1,400&display=swap"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,400;1,400&display=swap"
          />
        </noscript>
        <link rel="preload" href="/images/ffb-hero.png" as="image" />
      </head>
      <body>
        <ThemeProvider>
          <ScrollToTop />
          <Header />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
