"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean; // kept for backwards compatibility
  showDomain?: boolean;
  theme?: "light" | "dark" | "charcoal";
}

/**
 * ArchEd Pure Text Logo
 * Semantic, accessible, and 100% vector typography (zero image or SVG graphic dependencies).
 * - "Arch" in deep architectural charcoal (#383a3b / #ffffff on dark)
 * - "Ed" in signature architectural steel blue (#155995 / #38bdf8 on dark)
 */
export default function ArchedLogo({
  className = "",
  size = "md",
  showDomain = false,
  theme = "charcoal",
}: LogoProps) {
  // Size typography scale
  const sizeClasses = {
    sm: "text-lg",       // ~18px
    md: "text-2xl",      // ~24px
    lg: "text-3xl",      // ~30px
    xl: "text-4xl sm:text-5xl", // ~36-48px
  };

  // Color mapping based on context background
  // On dark background (theme="light"): Arch is white, Ed is light steel blue
  // On light background (theme="charcoal" or "dark"): Arch is charcoal, Ed is steel blue
  const isDarkBackground = theme === "light";
  const archColorClass = isDarkBackground ? "text-white" : "text-[#383a3b]";
  const edColorClass = isDarkBackground ? "text-[#38bdf8]" : "text-[#155995]";
  const domainColorClass = isDarkBackground ? "text-slate-400" : "text-[#7f8c8d]";

  return (
    <span
      className={`inline-flex items-baseline font-sans font-bold tracking-tight select-none leading-none ${sizeClasses[size]} ${className}`}
      aria-label="ArchEd Logo"
      role="img"
    >
      {/* "Arch" in architectural charcoal or white */}
      <span className={`${archColorClass} font-extrabold tracking-[-0.03em] transition-colors`}>
        Arch
      </span>

      {/* "Ed" in signature steel blue */}
      <span className={`${edColorClass} font-extrabold tracking-[-0.03em] transition-colors`}>
        Ed
      </span>

      {/* Optional .in domain suffix */}
      {showDomain && (
        <span className={`font-mono font-medium text-[10px] tracking-widest uppercase ml-1 ${domainColorClass}`}>
          .in
        </span>
      )}
    </span>
  );
}
