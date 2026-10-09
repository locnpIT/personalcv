"use client";

import { useEffect } from "react";
import { initWaterEffects } from "@/lib/water-effects";

export function WaterEffects() {
  useEffect(() => {
    const root = document.getElementById("portfolio-home");
    if (root) return initWaterEffects(root);
  }, []);

  return null;
}
