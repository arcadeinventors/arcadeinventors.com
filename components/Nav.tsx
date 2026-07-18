"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/aboutus", label: "About" },
  { href: "/innovation", label: "Innovation" },
  { href: "/mobilevideogames", label: "Games" },
  { href: "/ip-properties", label: "Properties" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5">
        <Link href="/" className="flex items-center" aria-label="Arcade Inventors home">
          {/* The original green controller+flask logo, on a light chip so its slate reads on the dark theme */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/LOGO-arcade-inventors.png"
            alt="Arcade Inventors"
            className="h-10 w-auto rounded-lg bg-white/95 px-2.5 py-1.5 shadow-sm"
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm text-fog transition-colors hover:text-chalk after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-cyan after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.rickbarretto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-fog transition-colors hover:text-cyan"
          >
            Founder ↗
          </a>
          <Link
            href="/contact"
            className="rounded-md border border-cyan/60 px-4 py-1.5 text-sm font-600 text-cyan transition-all hover:bg-cyan hover:text-ink hover:shadow-neon"
          >
            Start a build
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-chalk md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line/70 bg-ink px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-fog hover:text-chalk">
                {l.label}
              </Link>
            ))}
            <a href="https://www.rickbarretto.com" target="_blank" rel="noopener noreferrer" className="text-fog hover:text-chalk">Founder ↗</a>
          </div>
        </div>
      )}
    </header>
  );
}
