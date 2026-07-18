import type { Metadata } from "next";
import { Space_Grotesk, Chakra_Petch } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Analytics from "./analytics";

const SITE = "https://arcadeinventors.com";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Arcade Inventors — The Invention Studio of Rick Barretto",
  description:
    "Arcade Inventors is the invention studio of Rick Barretto. In 1999 we created the world's first custom, open-architecture personal arcades — and we've been inventing the future of interactive technology ever since. The IP home behind a family of ventures.",
  keywords: [
    "Arcade Inventors",
    "Rick Barretto",
    "custom arcade",
    "personal arcade",
    "open architecture arcade",
    "arcade manufacturer",
    "invention studio",
    "interactive entertainment",
    "DreamAuthentics",
    "CyberHope AI",
  ],
  authors: [{ name: "Rick Barretto" }],
  creator: "Rick Barretto",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE,
    siteName: "Arcade Inventors",
    title: "Arcade Inventors — The Invention Studio of Rick Barretto",
    description:
      "We invented the personal arcade in 1999. Now we invent what's next. The IP home behind a family of technology ventures.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcade Inventors — The Invention Studio of Rick Barretto",
    description:
      "We invented the personal arcade in 1999. Now we invent what's next.",
  },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arcade Inventors",
  url: SITE,
  founder: { "@type": "Person", name: "Rick Barretto" },
  foundingDate: "1999",
  description:
    "The invention studio of Rick Barretto. Creator of the world's first custom, open-architecture personal arcades (1999) and the IP home behind a family of technology ventures.",
  knowsAbout: [
    "Custom arcade design",
    "Open-architecture hardware",
    "Interactive entertainment",
    "Invention",
    "Artificial intelligence",
  ],
  sameAs: [
    "https://www.rickbarretto.com",
    "https://cyberhopeai.com",
    "https://thelannetwork.com",
    "https://dreamauthentics.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${chakra.variable}`}>
      <body className="bg-ink text-chalk font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
