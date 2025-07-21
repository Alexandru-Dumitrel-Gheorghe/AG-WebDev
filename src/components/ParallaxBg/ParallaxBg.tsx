"use client";
import { useEffect } from "react";

export default function ParallaxBg() {
  useEffect(() => {
    const handleScroll = () => {
      const circles =
        document.querySelectorAll<SVGCircleElement>(".parallax-circle");
      const lines = document.querySelectorAll<SVGLineElement>(".parallax-line");
      const scrollY = window.scrollY || window.pageYOffset;

      circles.forEach((circle, i) => {
        const speed = (i % 2 === 0 ? 0.25 : 0.13) + i * 0.05;
        circle.setAttribute(
          "cy",
          `${200 + Math.sin(scrollY * 0.001 + i) * 60 * speed}`
        );
      });
      lines.forEach((line, i) => {
        const base = 80 + i * 220;
        line.setAttribute(
          "x1",
          `${base + Math.cos(scrollY * 0.0007 + i) * 18}`
        );
        line.setAttribute(
          "x2",
          `${base + Math.cos(scrollY * 0.0007 + i) * 18}`
        );
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-parallax" aria-hidden>
      <svg
        className="bg-parallax-svg"
        width="100vw"
        height="100vh"
        viewBox="0 0 1800 900"
        fill="none"
      >
        {/* Cercuri mari */}
        <circle
          className="parallax-circle"
          cx="380"
          cy="200"
          r="140"
          stroke="#ff6a2a"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          className="parallax-circle"
          cx="1450"
          cy="230"
          r="70"
          stroke="#ff6a2a"
          strokeWidth="1"
          fill="none"
        />
        <circle
          className="parallax-circle"
          cx="1200"
          cy="700"
          r="110"
          stroke="#2c65ff"
          strokeWidth="1.3"
          fill="none"
        />
        <circle
          className="parallax-circle"
          cx="600"
          cy="800"
          r="95"
          stroke="#ff6a2a"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Linii */}
        <line
          className="parallax-line"
          x1="100"
          y1="0"
          x2="100"
          y2="900"
          stroke="#bbb"
          strokeWidth="1.2"
        />
        <line
          className="parallax-line"
          x1="300"
          y1="0"
          x2="300"
          y2="900"
          stroke="#bbb"
          strokeWidth="1.2"
        />
        <line
          className="parallax-line"
          x1="1100"
          y1="0"
          x2="1100"
          y2="900"
          stroke="#bbb"
          strokeWidth="1.2"
        />
        <line
          className="parallax-line"
          x1="1450"
          y1="0"
          x2="1450"
          y2="900"
          stroke="#bbb"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
