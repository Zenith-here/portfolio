"use client";
import Image from "next/image";
import { useState } from "react";

interface CopyEmailButtonProps {
  email: string;
  variant?: "solid" | "outline" | "grid";
}

export default function CopyEmailButton({
  email,
  variant = "solid",
}: CopyEmailButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const styles = (() => {
    if (variant === "solid") {
      return isCopied
        ? "h-10 px-5 gap-2 justify-center rounded-full bg-white text-green-600 border border-white"
        : "h-10 px-5 gap-2 justify-center rounded-full bg-white text-black border border-white hover:bg-zinc-200 hover:border-green-500 hover:animate-[pulse-green_1.6s_ease-in-out_infinite]";
    }
    if (variant === "grid") {
      return isCopied
        ? "w-full gap-3 justify-start px-4 py-3 rounded-xl bg-zinc-800 text-green-400 border border-green-500/50"
        : "w-full gap-3 justify-start px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 hover:border-green-500 hover:animate-[pulse-green_1.6s_ease-in-out_infinite]";
    }
    return isCopied
      ? "px-5 py-3 gap-2 justify-center rounded-full bg-zinc-800 text-green-400 border border-green-500/50"
      : "px-5 py-3 gap-2 justify-center rounded-full bg-zinc-800 text-white border border-zinc-700 hover:border-green-500 hover:animate-[pulse-green_1.6s_ease-in-out_infinite]";
  })();

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`font-semibold text-sm flex items-center transition-all ${styles}`}
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
        alt="Gmail"
        width={16}
        height={16}
        className="shrink-0"
      />
      {isCopied ? "Copied!" : "Email"}
    </button>
  );
}
