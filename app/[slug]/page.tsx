import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PAGES, bySlug } from "@/content/site-data";

export function generateStaticParams() {
  return PAGES.filter((p) => p.kind !== "hidden").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = bySlug(slug);
  if (!page) return { title: "Arcade Inventors" };
  return {
    title: `${page.name} — Arcade Inventors`,
    description: page.tagline || `${page.name} — part of the Arcade Inventors portfolio.`,
  };
}

// Known live sites for portfolio companies.
const EXTERNAL: Record<string, string> = {
  cyberhopeai: "https://cyberhopeai.com",
  dreamauthentics: "https://dreamauthentics.com",
  hopetrainingacademy: "https://hopetrainingacademy.org",
  videogamepalooza: "https://videogamepalooza.org",
  "precognition-os": "https://cyberhopeai.com",
};

/** Split the archived run-on body into readable paragraphs (~3 sentences each). */
function paragraphs(body: string): string[] {
  if (!body) return [];
  const sentences = body.match(/[^.!?]+[.!?]+|\S+$/g) || [body];
  const out: string[] = [];
  for (let i = 0; i < sentences.length; i += 3) {
    out.push(sentences.slice(i, i + 3).join(" ").trim());
  }
  return out.filter(Boolean);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = bySlug(slug);
  if (!page || page.kind === "hidden") notFound();

  const paras = paragraphs(page.body);
  const ext = EXTERNAL[page.slug];
  const isContact = page.slug === "contact";

  return (
    <main className="bg-ink text-chalk">
      <section className="relative overflow-hidden px-5 pt-32 pb-10 md:pt-40">
        <div className="grid-bg grid-mask absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow mb-4 text-[11px] text-cyan">{page.category}</p>
          <h1 className="font-display text-4xl font-700 leading-tight md:text-5xl">{page.name}</h1>
          {page.tagline && <p className="mt-4 text-lg text-fog">{page.tagline}</p>}
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-3xl">
          {isContact ? (
            <div className="rounded-2xl border border-line bg-panel p-7">
              <h2 className="font-display text-xl font-600">Get in touch</h2>
              <p className="mt-3 text-fog">
                Tell us about a custom build, a licensing or press question, or a partnership —
                we read every message.
              </p>
              <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-ink p-4">
                  <dt className="text-fog">Email</dt>
                  <dd className="mt-1 font-600 text-cyan">
                    <a href="mailto:info@arcadeinventors.com">info@arcadeinventors.com</a>
                  </dd>
                </div>
                <div className="rounded-xl border border-line bg-ink p-4">
                  <dt className="text-fog">Founder</dt>
                  <dd className="mt-1 font-600">
                    <a href="https://www.rickbarretto.com" target="_blank" rel="noopener noreferrer" className="text-cyan">
                      rickbarretto.com ↗
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          ) : paras.length ? (
            <div className="space-y-5">
              {paras.map((p, i) => (
                <p key={i} className={i === 0 ? "text-lg leading-relaxed text-chalk/90" : "leading-relaxed text-fog"}>
                  {p}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg text-fog">
              Part of the Arcade Inventors portfolio. More on {page.name} coming soon.
            </p>
          )}

          {ext && (
            <a
              href={ext}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-md border border-cyan/60 px-6 py-3 font-display text-sm font-600 tracking-wide text-cyan transition-all hover:bg-cyan hover:text-ink hover:shadow-neon"
            >
              Visit {page.name} ↗
            </a>
          )}

          <div className="mt-14 flex flex-wrap gap-4 border-t border-line pt-8 text-sm">
            <Link href="/#portfolio" className="text-fog transition-colors hover:text-cyan">← Back to the portfolio</Link>
            <Link href="/contact" className="text-fog transition-colors hover:text-cyan">Contact</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
