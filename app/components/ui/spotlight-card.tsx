"use client";

import React, { useRef } from "react";
import { cn } from "@/app/lib/utils";

export interface SpotlightCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spotlightSize?: number;
  spotlightOpacity?: number;
  gradientColor?: string;
  lightGradientColor?: string;
  glowEffect?: boolean;
  multiSpotlight?: boolean;
  glowSize?: number;
  glowOpacity?: number;
  disableScale?: boolean;
}

const spotlight = (x: string, y: string, size: number | string) =>
  `radial-gradient(${size}px circle at ${x} ${y}, var(--spotlight-color) 0%, transparent 65%)`;

// Light theme uses --spot-light, dark theme --spot-dark (set inline below)
const themedColor = "[--spot:var(--spot-light)] dark:[--spot:var(--spot-dark)]";

export function SpotlightCard({
  children,
  className,
  spotlightSize = 250,
  spotlightOpacity = 0.15,
  gradientColor = "rgb(168, 85, 247)",
  lightGradientColor,
  glowEffect = false,
  multiSpotlight = false,
  glowSize = 100,
  glowOpacity = 0.15,
  disableScale = false,
  style,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  // Write the cursor position straight to CSS variables so mouse movement
  // never triggers a React re-render of the card or its children
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = divRef.current;
    if (!div) return;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    div.style.setProperty("--x", `${x}px`);
    div.style.setProperty("--y", `${y}px`);
    if (multiSpotlight) {
      div.style.setProperty("--x2", `${rect.width - x}px`);
      div.style.setProperty("--y2", `${rect.height - y}px`);
    }
  };

  const mixColor = (opacity: number) =>
    `color-mix(in srgb, var(--spot), transparent ${(1 - opacity) * 100}%)`;

  return (
    <div
      ref={divRef}
      className={cn(
        "group/spotlight relative w-full overflow-hidden rounded-xl border border-border/40 bg-background transition-transform duration-300",
        !disableScale && "hover:scale-[1.02]",
        themedColor,
        className
      )}
      style={
        {
          "--x": "0px",
          "--y": "0px",
          "--x2": "0px",
          "--y2": "0px",
          "--spot-dark": gradientColor,
          "--spot-light": lightGradientColor ?? gradientColor,
          ...style,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Main Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={
          {
            "--spotlight-color": mixColor(spotlightOpacity),
            background: spotlight("var(--x)", "var(--y)", spotlightSize),
          } as React.CSSProperties
        }
      />

      {/* Secondary Spotlight */}
      {multiSpotlight && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-70"
          style={
            {
              "--spotlight-color": mixColor(spotlightOpacity * 0.8),
              background: spotlight("var(--x2)", "var(--y2)", spotlightSize * 0.8),
            } as React.CSSProperties
          }
        />
      )}

      {/* Glow Effect */}
      {glowEffect && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 blur-xl transition-opacity duration-300 group-hover/spotlight:opacity-[var(--glow-opacity)]"
          style={
            {
              "--glow-opacity": glowOpacity,
              "--spotlight-color": mixColor(0.85),
              background: spotlight("var(--x)", "var(--y)", glowSize),
            } as React.CSSProperties
          }
        />
      )}

      <div className="relative">{children}</div>
    </div>
  );
}
