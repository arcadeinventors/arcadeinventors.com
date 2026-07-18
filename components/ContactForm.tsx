"use client";

import { useState } from "react";

const INTERESTS = ["A custom arcade", "Press & media", "Licensing & partnerships", "Something else"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
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
