import StructuredData from "./FuerstenfeldbruckStructuredData";
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
