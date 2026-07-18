import ContactForm from "@/components/ContactForm";

const VENTURES = [
  { name: "DreamAuthentics", tag: "Custom Arcades · since 1999", blurb: "The company that created the personal-arcade category. Open-architecture machines, built one customer at a time.", href: "https://dreamauthentics.com" },
  { name: "CyberHope AI", tag: "Governed AI · PrecognitionOS", blurb: "The first operating system for governed artificial intelligence — verifiable, accountable, safe by design.", href: "https://cyberhopeai.com" },
  { name: "The LAN Network", tag: "Human-Led AI Development", blurb: "AI-native software, automation, and cybersecurity built by human-led teams and governed AI workflows.", href: "https://thelannetwork.com" },
  { name: "Hope Training Academy", tag: "Apprenticeships · Workforce", blurb: "Tuition-free pathways into IT, cybersecurity, and AI — turning talent into careers.", href: "https://hopetrainingacademy.org" },
  { name: "Video Game Palooza", tag: "501(c)(3) · Esports Education", blurb: "Turning gaming passion into STEM careers. Thousands of Hoosiers trained since 2018.", href: "https://videogamepalooza.org" },
  { name: "Genie", tag: "Provable AI Creation", blurb: "Consumer AI image and video — with a cryptographic certificate of authenticity on everything it makes.", href: "https://geniemadeit.com" },
];

const CUSTOMERS = [
  "SONY PLAYSTATION", "MICROSOFT", "BLIZZARD", "NVIDIA", "MSNBC",
  "ELECTRONIC ARTS", "UBISOFT", "TWITCH",
];

const INVENTIONS = [
  { k: "01", t: "The personal arcade", d: "In 1999 we shipped the first custom, open-architecture arcade — a machine designed around the person who owns it, not a fixed cabinet off a line. We didn't enter the category. We created it." },
  { k: "02", t: "Open architecture, by principle", d: "Every build is upgradeable, serviceable, and yours. No locked hardware, no dead ends — the same conviction now runs through everything we invent." },
  { k: "03", t: "Governed intelligence", d: "The newest invention: an operating system that makes AI provable and accountable. The arcade taught us to engineer trust into the machine itself." },
];

export default function Home() {
  return (
    <main id="top" className="bg-ink text-chalk">
      {/* ------------------------------------------------ HERO */}
      <section className="relative overflow-hidden px-5 pb-24 pt-36 md:pt-44">
        <div className="grid-bg grid-mask absolute inset-0 animate-drift" aria-hidden />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6 text-[11px] text-cyan">The Invention Studio of Rick Barretto · est. 1999</p>
          <h1 className="font-display text-[13vw] font-700 leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            We invented the
            <br />
            <span className="neon-cyan text-cyan">personal arcade.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg text-fog">
            In 1999 we built the world&apos;s first custom, open-architecture arcade — and
            we&apos;ve been inventing the future of interactive technology ever since.
            Arcade Inventors is the IP home behind a family of ventures.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#portfolio" className="rounded-md bg-cyan px-6 py-3 font-display text-sm font-600 tracking-wide text-ink transition-all hover:shadow-neon">
              Explore the portfolio
            </a>
            <a href="#contact" className="rounded-md border border-line px-6 py-3 font-display text-sm font-600 tracking-wide text-chalk transition-colors hover:border-cyan hover:text-cyan">
              Start a custom build →
            </a>
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
                Before the personal arcade existed,<br className="hidden md:block" /> there was us.
              </h2>
              <p className="mt-6 max-w-xl text-fog">
                In 1999, custom arcades weren&apos;t a market — they were an idea nobody
                had shipped. We designed the first one around a single conviction: the
                machine should belong to the person, not the other way around. Open
                architecture. Built to order. Endlessly yours.
              </p>
              <p className="mt-4 max-w-xl text-fog">
                A quarter-century later, that same instinct — invent the category, then
                engineer trust into it — runs through every venture on this page.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "1999", l: "The year we created the category" },
                { n: "25+", l: "Years building custom machines" },
                { n: "1000s", l: "One-of-a-kind arcades delivered" },
                { n: "6+", l: "Ventures under one roof" },
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
            Our machines live in the studios and homes of the biggest names in the
            industry — the companies that make the games we all play.
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

      {/* ------------------------------------------------ PORTFOLIO */}
      <section id="portfolio" className="border-t border-line px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4 text-[11px] text-cyan">One inventor · many ventures</p>
            <h2 className="font-display text-3xl font-700 md:text-4xl">The portfolio</h2>
            <p className="mt-4 text-fog">
              Arcade Inventors is the IP home for a family of companies — from the
              arcade that started it all to the operating system for governed AI.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VENTURES.map((v) => (
              <a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-line bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:shadow-neon"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-xl font-600 text-chalk">{v.name}</h3>
                  <span className="text-fog transition-colors group-hover:text-cyan">↗</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-wider text-cyan/80">{v.tag}</p>
                <p className="mt-4 text-sm leading-relaxed text-fog">{v.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ INVENTIONS */}
      <section id="inventions" className="border-t border-line bg-panel/60 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4 text-[11px] text-magenta">What we invent</p>
            <h2 className="font-display text-3xl font-700 md:text-4xl">
              The studio is the point. Arcades were the first thing.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {INVENTIONS.map((it) => (
              <div key={it.k} className="rounded-2xl border border-line bg-ink p-7">
                <div className="font-display text-4xl font-700 text-line">{it.k}</div>
                <h3 className="mt-3 font-display text-xl font-600 text-chalk">{it.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ PRESS */}
      <section id="press" className="border-t border-line px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-4 text-[11px] text-cyan">In the press</p>
          <h2 className="font-display text-3xl font-700 md:text-4xl">
            Decades of coverage for pioneering a category.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-fog">
            From national broadcast to gaming and technology press, Rick Barretto and
            Arcade Inventors have been featured for inventing the custom personal
            arcade — and for what came next.
          </p>
          <a
            href="https://www.rickbarretto.com/press"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md border border-cyan/60 px-6 py-3 font-display text-sm font-600 tracking-wide text-cyan transition-all hover:bg-cyan hover:text-ink hover:shadow-neon"
          >
            See the press archive →
          </a>
        </div>
      </section>

      {/* ------------------------------------------------ CONTACT */}
      <section id="contact" className="border-t border-line bg-panel/60 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-4 text-[11px] text-magenta">Start a build · press · partnerships</p>
            <h2 className="font-display text-3xl font-700 md:text-4xl">Let&apos;s invent something.</h2>
            <p className="mx-auto mt-4 max-w-xl text-fog">
              A custom arcade designed around you. A press or licensing question. A
              venture partnership. Tell us what you have in mind — we read every message.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ------------------------------------------------ FOOTER */}
      <footer className="border-t border-line px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <div className="font-display text-sm font-600 tracking-wide">
              ARCADE<span className="text-cyan"> INVENTORS</span>
            </div>
            <p className="mt-1 text-xs text-fog">
              The invention studio of Rick Barretto · Inventing the personal arcade since 1999.
            </p>
          </div>
          <div className="text-xs text-fog">
            © {new Date().getFullYear()} Arcade Inventors. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
