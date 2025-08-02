export const metadata = {
  metadataBase: new URL("https://www.ag-webdev.de"),
};

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
        {/* Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,400;1,400&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,400;1,400&display=swap"
        />
        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        {/* Manifest & theme */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#fc6b28" />
        <meta name="msapplication-TileColor" content="#fc6b28" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Freelancer für modernes Webdesign und Webentwicklung mit Next.js und React. Individuelle Websites, SEO & Support direkt vom Entwickler."
        />
        {/* Fallback fonts for no JS */}
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,400;1,400&display=swap"
          />
        </noscript>
      </head>
      <body className="font-sans">
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
