import BlogClient from "./BlogClient";
import type { Metadata } from "next";

export const metadataBase = new URL("https://www.ag-webdev.de");

export const metadata: Metadata = {
  title: "Blog | AG WebDev",
  description: "Webdesign, SEO, Strategie & Praxis-Tipps – AG WebDev Blog.",
  alternates: {
    canonical: "https://www.ag-webdev.de/blog",
  },
};

export default function Page() {
  return <BlogClient />;
}
