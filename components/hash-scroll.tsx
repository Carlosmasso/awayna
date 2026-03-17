"use client";

import { useEffect } from "react";

export function HashScroll({ id }: { id: string }) {
  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [id]);
  return null;
}
