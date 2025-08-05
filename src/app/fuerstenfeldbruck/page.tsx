import FFBStructuredData from "./FuerstenfeldbruckStructuredData";
import FFBClient from "./client";
import StructuredBreadcrumbsFFB from "@/components/SEO/StructuredBreadcrumbsFFB";
import StructuredServicesFFB from "@/components/SEO/StructuredServicesFFB";

export { metadata } from "./metadata";

export default function FFBPage() {
  return (
    <>
      <FFBStructuredData />
      <StructuredBreadcrumbsFFB />
      <StructuredServicesFFB />
      {/* Main content cu ID pentru structured data */}
      <main id="main-content">
        <FFBClient />
      </main>
    </>
  );
}
