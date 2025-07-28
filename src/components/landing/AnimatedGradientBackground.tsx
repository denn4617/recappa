// src/components/ui/AnimatedGradientBackground.tsx
"use client";

import { useEffect, useRef } from "react";
import { Gradient } from "@/lib/Gradient";

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <canvas
      id="gradient-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[-1] rounded-none"
      style={
        {
          "--gradient-color-1": "#100730",
          "--gradient-color-2": "#240F4F",
          "--gradient-color-3": "#1B1C4B",
          "--gradient-color-4": "#3D348B",
        } as React.CSSProperties
      }
    />
  );
}
