"use client";

import { useState } from "react";

const INTERESTS = ["A custom arcade", "Press & media", "Licensing & partnerships", "Something else"];

// Fleet Web3Forms access key (same pattern as cyberhopeai.com / Hope Training Academy).
// Client-side submit only (Web3Forms blocks server-side). Leads email to the fleet inbox;
// a dedicated info@arcadeinventors.com key can replace this once that mailbox is verified.
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "c6756334-43b4-408d-9242-f925a7e6176c";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "");
    const interest = String(fd.get("interest") || "General");
    fd.append("access_key", WEB3FORMS_KEY);
    fd.append("subject", `Arcade Inventors — ${interest} — ${name}`);
    fd.append("from_name", "Arcade Inventors Website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-cyan/50 bg-panel p-10 text-center shadow-neon">
        <div className="font-display text-2xl font-600 text-cyan">Message received.</div>
        <p className="mt-3 text-fog">Thanks for reaching out. We read every message — the team will be in touch shortly.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-line bg-ink px-4 py-3 text-chalk placeholder-fog/60 outline-none transition-colors focus:border-cyan focus:shadow-neon";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
      {/* honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} autoComplete="name" />
        <input name="email" type="email" required placeholder="Email" className={field} autoComplete="email" />
      </div>
      <select name="interest" defaultValue="" required className={`${field} mt-4 appearance-none`}>
        <option value="" disabled>What&apos;s this about?</option>
        {INTERESTS.map((i) => (
          <option key={i} value={i} className="bg-ink">{i}</option>
        ))}
      </select>
      <textarea name="message" required rows={5} placeholder="Tell us what you have in mind…" className={`${field} mt-4 resize-none`} />
      {status === "error" && <p className="mt-3 text-sm text-magenta">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-lg bg-cyan px-6 py-3.5 font-display text-sm font-600 tracking-wide text-ink transition-all hover:shadow-neon disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
