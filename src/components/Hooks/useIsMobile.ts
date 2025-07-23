// components/Hooks/useIsMobile.ts
import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 600) {
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  useEffect(() => {
    // Rulare doar pe client
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);

    checkMobile(); // la mount
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}
