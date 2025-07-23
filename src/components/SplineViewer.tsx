"use client";
import { useEffect, useRef } from "react";

export default function SplineViewer() {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.getElementById("spline-viewer-script")) {
      const script = document.createElement("script");
      script.id = "spline-viewer-script";
      script.type = "module";
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.10.35/build/spline-viewer.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={viewerRef}
      style={{
        width: "100%",
        maxWidth: 700,
        margin: "0 auto",
        height: "440px",
        borderRadius: "2rem",
        overflow: "hidden",
        boxShadow: "0 4px 40px rgba(17,17,17,0.18)",
        background: "#0e0e11",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      dangerouslySetInnerHTML={{
        __html: `
          <spline-viewer
            url="https://prod.spline.design/mJSz379-hZOozSNA/scene.splinecode"
            style="width:100%;height:100%;border:none;background:transparent;"
          ></spline-viewer>
        `,
      }}
    />
  );
}
