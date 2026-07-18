"use client";

import { useState } from "react";

const links = [
  { href: "#origin", label: "Origin" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#inventions", label: "Inventions" },
  { href: "#press", label: "Press" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Arcade Inventors home">
          <span className="grid h-8 w-8 place-items-center rounded-[7px] border border-cyan/50 font-display text-sm font-700 text-cyan shadow-neon">
            AI
          </span>
          <span className="font-display text-[15px] font-600 tracking-wide text-chalk">
            ARCADE<span className="text-cyan"> INVENTORS</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-fog transition-colors hover:text-chalk after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-cyan after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md border border-cyan/60 px-4 py-1.5 text-sm font-600 text-cyan transition-all hover:bg-cyan hover:text-ink hover:shadow-neon"
          >
            Start a build
          </a>
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
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-fog hover:text-chalk">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
