"use client";
import { useEffect } from "react";

export const ScrollAnimationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observăm toate secțiunile cu animatie
    const elements = document.querySelectorAll(
      ".container, .leistungen-section, .leistungen-card"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
};
