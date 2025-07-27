import StructuredData from "./StructuredData";
import FFBClient from "./client";

export { metadata } from "./metadata";

export default function FFBPage() {
  return (
    <>
      <StructuredData />
      <FFBClient />
    </>
  );
}
