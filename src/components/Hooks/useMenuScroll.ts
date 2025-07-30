"use client";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

type MenuLink = {
  scrollToId?: string;
};

export function useMenuScroll(setOpen?: (v: boolean) => void) {
  const pathname = usePathname();
  const router = useRouter();

  // Pentru linkuri cu scroll, merge și pe homepage și pe altă pagină
  const handleMenuClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: MenuLink) => {
      if (link.scrollToId) {
        e.preventDefault();
        if (pathname === "/") {
          const target = document.getElementById(link.scrollToId);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          router.push(`/#${link.scrollToId}`);
        }
        setOpen?.(false);
      } else {
        setOpen?.(false);
      }
    },
    [pathname, router, setOpen]
  );

  return { handleMenuClick };
}
