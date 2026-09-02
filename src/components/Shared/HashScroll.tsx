"use client";

import { useEffect } from "react";

/**
 * Scrolls to the element matching the current URL hash on mount.
 *
 * Next.js's App Router already tries to scroll to a hash on navigation,
 * but on pages with images/late-loading content the target can shift
 * after that initial scroll fires. This is a small safety net: it waits
 * a beat for layout to settle, then scrolls again if a hash is present.
 */
export default function HashScroll() {
  useEffect(() => {
    if (!window.location.hash) return;

    const scrollToHash = () => {
      const el = document.querySelector(window.location.hash);
      el?.scrollIntoView({ behavior: "smooth" });
    };

    // Run once shortly after mount, and again after images have had a
    // chance to load and push content down.
    const t1 = setTimeout(scrollToHash, 100);
    const t2 = setTimeout(scrollToHash, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
