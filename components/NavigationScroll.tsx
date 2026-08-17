"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavigationScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        document.getElementById(decodeURIComponent(hash))?.scrollIntoView({ block: "start" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
