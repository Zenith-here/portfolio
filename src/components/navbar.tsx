"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import GlowBorder from "@/components/GlowBorder";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/freelance", label: "Freelance" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  function handleHomeClick(e: React.MouseEvent) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 32) {
        setVisible(true);
      } else if (delta > 4) {
        setVisible(false);
      } else if (delta < -4) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-300 ease-in-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <GlowBorder rounded="rounded-full" fill={false} innerBg="bg-neutral-900">

        <nav className="flex items-center gap-1 px-2 py-2 shadow-lg shadow-black/30 rounded-full">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={link.label === "Home" ? handleHomeClick : undefined}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-200 hover:bg-white/10 hover:text-white hover:[text-shadow:0_0_8px_rgba(255,255,255,0.5)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </GlowBorder>
    </div>
  );
}
