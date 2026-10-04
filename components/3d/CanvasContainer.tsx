"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { FallbackScene } from "./FallbackScene";
import { useReducedMotion } from "framer-motion";

const DynamicHero3DScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => <FallbackScene />,
});

export function CanvasContainer() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <FallbackScene />;
  }

  if (shouldReduceMotion) {
    return <FallbackScene />;
  }

  return <DynamicHero3DScene />;
}
