import type { ReactNode } from "react";

interface GlowBorderProps {
  children: ReactNode;
  rounded?: string;
  className?: string;
  innerClassName?: string;
  innerBg?: string;

  fill?: boolean;
}

export default function GlowBorder({
  children,
  rounded = "rounded-3xl",
  className = "",
  innerClassName = "",
  innerBg = "bg-zinc-900",
  fill = true,
}: GlowBorderProps) {
  const fillClasses = fill ? "h-full w-full" : "";

  return (
    <div
      className={`relative ${fillClasses} overflow-hidden p-px ${rounded} ${className}`}
    >
      <div
        className={`absolute inset-[-150%] animate-[spin-slow_6s_linear_infinite] ${rounded}`}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, #22d3ee 60deg, #8b5cf6 180deg, transparent 260deg, transparent 360deg)",
        }}
      />
      <div
        className={`relative ${fillClasses} ${innerBg} ${rounded} ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
