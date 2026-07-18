import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { COMPANIES } from "@/content/site-data";

const CUSTOMERS = [
  "SONY PLAYSTATION", "MICROSOFT", "BLIZZARD", "NVIDIA", "MSNBC",
  "ELECTRONIC ARTS", "UBISOFT", "TWITCH",
];

const SECTIONS = [
  { href: "/aboutus", name: "About", d: "Who we are and how we work — Disruptive Ideation as a Service." },
  { href: "/innovation", name: "Innovation Consulting", d: "Turning ideas into shippable products and companies." },
  { href: "/mobilevideogames", name: "Mobile Video Games", d: "Our growing collection of original mobile titles." },
  { href: "/ip-properties", name: "Properties", d: "The IP we license, build, and bring to market." },
];

export default function Home() {
  return (
    <main id="top" className="bg-ink text-chalk">
      {/* ------------------------------------------------ HERO */}
      <section className="relative overflow-hidden px-5 pb-24 pt-36 md:pt-44">
        <div className="grid-bg grid-mask absolute inset-0 animate-drift" aria-hidden />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6 text-[11px] text-cyan">Technology &amp; VR development · IP &amp; licensing · since 1999</p>
          <h1 className="font-display text-[12vw] font-700 leading-[0.96] tracking-tight sm:text-6xl md:text-7xl">
            Where ideas become
            <br />
            <span className="neon-cyan text-cyan">companies.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-fog">
            Arcade Inventors is the invention studio and IP company of Rick Barretto — creator of the
            world&apos;s first custom personal arcade in 1999, and the home of a growing portfolio of
            technology, gaming, AI, and education ventures.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#portfolio" className="rounded-md bg-cyan px-6 py-3 font-display text-sm font-600 tracking-wide text-ink transition-all hover:shadow-neon">
              Explore the portfolio
            </a>
            <Link href="/contact" className="rounded-md border border-line px-6 py-3 font-display text-sm font-600 tracking-wide text-chalk transition-colors hover:border-cyan hover:text-cyan">
              Start a project →
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ ORIGIN / 1999 */}
      <section id="origin" className="border-y border-line bg-panel/60 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <p className="eyebrow mb-4 text-[11px] text-magenta">First. Not among the first.</p>
              <h2 className="font-display text-3xl font-700 leading-tight md:text-4xl">
                We created the personal arcade — in 1999.
              </h2>
              <p className="mt-6 max-w-xl text-fog">
                Founder Rick Barretto built the world&apos;s first customized, open-architecture personal
                arcade and, in doing so, created a category that hadn&apos;t existed. That instinct — invent
                the thing, then engineer trust into it — is the throughline of every venture here.
              </p>
              <p className="mt-4 max-w-xl text-fog">
                Today Arcade Inventors operates as a technology and VR development IP and licensing company,
                designing and creating interactive experiences that entertain, educate, and inspire.
              </p>
              <Link href="/aboutus" className="mt-6 inline-block text-sm font-600 text-cyan hover:underline">
                More about us →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "1999", l: "Created the personal-arcade category" },
                { n: "25+", l: "Years inventing and licensing" },
                { n: "15+", l: "Ventures under one roof" },
                { n: "1", l: "Inventor at the center of it all" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-line bg-ink p-5">
                  <div className="font-display text-3xl font-700 text-cyan">{s.n}</div>
                  <div className="mt-1 text-sm text-fog">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CUSTOMER WALL */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="eyebrow text-[11px] text-fog">Built for the people who build the games</p>
          <p className="mx-auto mt-3 max-w-2xl text-fog">
            Our machines and technology have reached the studios, teams, and homes of the biggest names
            in the industry.
          </p>
        </div>
        <div className="marquee-mask mt-9 overflow-hidden">
          <div className="marquee-track flex w-max gap-10">
            {[...CUSTOMERS, ...CUSTOMERS].map((c, i) => (
              <span key={i} className="whitespace-nowrap font-display text-lg font-600 tracking-[0.14em] text-chalk/45">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ PORTFOLIO (full) */}
      <section id="portfolio" className="border-t border-line px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4 text-[11px] text-cyan">One inventor · many ventures</p>
            <h2 className="font-display text-3xl font-700 md:text-4xl">The portfolio</h2>
            <p className="mt-4 text-fog">
              Arcade Inventors is the IP home for a family of companies — spanning custom arcades, AI,
              esports, education, media, and VR. Explore each one.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMPANIES.map((v) => (
              <Link
                key={v.slug}
                href={`/${v.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:shadow-neon"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-600 text-chalk">{v.name}</h3>
                  <span className="text-fog transition-colors group-hover:text-cyan">→</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-wider text-cyan/80">{v.category}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-fog">
                  {v.tagline || v.body.slice(0, 130)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ WHAT WE DO */}
      <section id="services" className="border-t border-line bg-panel/60 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4 text-[11px] text-magenta">What we do</p>
            <h2 className="font-display text-3xl font-700 md:text-4xl">Invention, as a service.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {SECTIONS.map((s) => (
              <Link key={s.href} href={s.href} className="group rounded-2xl border border-line bg-ink p-7 transition-all hover:border-cyan/50">
                <h3 className="font-display text-xl font-600 text-chalk group-hover:text-cyan">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{s.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CONTACT */}
      <section id="contact" className="border-t border-line px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-4 text-[11px] text-magenta">Start a build · press · partnerships</p>
            <h2 className="font-display text-3xl font-700 md:text-4xl">Let&apos;s invent something.</h2>
            <p className="mx-auto mt-4 max-w-xl text-fog">
              A custom arcade, a licensing question, a venture partnership — tell us what you have in mind.
              We read every message.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ------------------------------------------------ FOOTER */}
      <footer className="border-t border-line px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <div className="font-display text-sm font-600 tracking-wide">
                ARCADE<span className="text-cyan"> INVENTORS</span>
              </div>
              <p className="mt-1 text-xs text-fog">
                The invention studio of Rick Barretto · Inventing since 1999.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-fog">
              <a href="https://www.rickbarretto.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan">Founder</a>
              <Link href="/aboutus" className="hover:text-cyan">About</Link>
              <Link href="/ip-properties" className="hover:text-cyan">Properties</Link>
              <Link href="/contact" className="hover:text-cyan">Contact</Link>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-fog md:text-left">© {new Date().getFullYear()} Arcade Inventors. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
