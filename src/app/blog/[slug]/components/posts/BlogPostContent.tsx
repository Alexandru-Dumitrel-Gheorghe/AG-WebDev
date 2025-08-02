"use client";
import { Suspense } from "react";

import WieFunktioniertGoogleIndexierung from "./WieFunktioniertGoogleIndexierung/WieFunktioniertGoogleIndexierung";
import WebdesignTrends2025 from "./WebdesignTrends2025/WebdesignTrends2025";
import SeoFuerAnfaenger from "./SeoFuerAnfaenger/SeoFuerAnfaenger";
import WordpressOderHeadlessCMS from "./WordpressOderHeadlessCMS/WordpressOderHeadlessCMS";
import WozuEineHomepage from "./WozuEineHomepage/WozuEineHomepage"; // <-- corect

const postMap: Record<string, React.ComponentType> = {
  "wie-funktioniert-google-indexierung": WieFunktioniertGoogleIndexierung,
  "webdesign-trends-2025": WebdesignTrends2025,
  "seo-fuer-anfanger": SeoFuerAnfaenger,
  "wordpress-oder-headless-cms": WordpressOderHeadlessCMS,
  "wozu-eine-homepage": WozuEineHomepage, // <-- corect aici
};

export default function BlogPostContent({ slug }: { slug: string }) {
  const PostComponent = postMap[slug];

  if (!PostComponent) {
    return (
      <div style={{ padding: 40, fontSize: 22 }}>Beitrag nicht gefunden.</div>
    );
  }

  return (
    <article>
      <Suspense fallback={<div>Loading…</div>}>
        <PostComponent />
      </Suspense>
    </article>
  );
}
