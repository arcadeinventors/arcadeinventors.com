// Press + media archive, organized by company.
// Drop new YouTube video IDs into the videos[] array for any company.
// PDFs live on Rick's desktop archive (~59 DreamAuthentics tearsheets) — wire
// individual PDF files to publicUrl when uploaded to public/press/<company>/

export type PressTier = "tier1" | "tier2" | "regional" | "tv";

export type PressItem = {
  publication: string;
  tier: PressTier;
  note?: string;
  pdfUrl?: string; // link to local PDF in /public/press/<company>/
  publicUrl?: string; // external URL if public
};

export type PressVideo = {
  videoId: string; // 11-char YouTube ID
  title: string;
  subtitle?: string;
};

export type PressSection = {
  companyId: string; // matches content/companies.ts id
  company: string;
  summary: string;
  press: PressItem[];
  videos: PressVideo[];
};

export const pressSections: PressSection[] = [
  {
    companyId: "dreamauthentics",
    company: "DreamAuthentics",
    summary:
      "DreamAuthentics secured 50+ press features across national television, major print, and specialty gaming press between 2005 and 2012 — one of the most comprehensively covered arcade-hardware launches of the era. A dedicated PR firm supported the rollout; archive below is a representative slice.",
    press: [
      // Tier 1 — big national names (PDFs wired where Rick has tearsheets)
      { publication: "Rolling Stone Magazine", tier: "tier1" },
      { publication: "Fortune Magazine", tier: "tier1" },
      { publication: "Playboy", tier: "tier1" },
      { publication: "Billboard", tier: "tier1", pdfUrl: "/press/dreamauthentics/billboard.pdf", note: "July 2007 — Thinking Outside the Jukebox" },
      { publication: "Billboard (cont.)", tier: "tier1", pdfUrl: "/press/dreamauthentics/billboard2.pdf" },
      { publication: "Electronic Gaming Monthly", tier: "tier1", pdfUrl: "/press/dreamauthentics/electronic-gaming-monthly.pdf", note: "Holiday 2007 — Katana feature" },
      { publication: "GamePro", tier: "tier1", pdfUrl: "/press/dreamauthentics/gamepro-november-2007.pdf", note: "November 2007 — Holiday gift guide" },
      { publication: "Gizmodo", tier: "tier1", pdfUrl: "/press/dreamauthentics/da-in-gizmodo2.pdf", note: "April 2007 — Katana feature" },
      { publication: "CNET News", tier: "tier1", pdfUrl: "/press/dreamauthentics/bringing-real-arcade-games-home-news-blog-cnet-news.pdf", note: "March 2006 — Excalibur launch" },
      { publication: "Game Informer", tier: "tier1", pdfUrl: "/press/dreamauthentics/game-informer.pdf" },
      { publication: "E! Online", tier: "tier1", pdfUrl: "/press/dreamauthentics/e-online.pdf" },
      { publication: "G4 Online", tier: "tier1", pdfUrl: "/press/dreamauthentics/g4-online.pdf" },
      { publication: "Electronic House", tier: "tier1", pdfUrl: "/press/dreamauthentics/electronic-house-october-issue.pdf", note: "October issue" },
      { publication: "Art & HDTV", tier: "tier1", pdfUrl: "/press/dreamauthentics/art-hdtv-12-2005.pdf", note: "December 2005" },

      // Tier 2 — specialty gaming / tech
      { publication: "Destructoid", tier: "tier2", pdfUrl: "/press/dreamauthentics/destructoid.pdf" },
      { publication: "SlashGear", tier: "tier2", pdfUrl: "/press/dreamauthentics/slash-gear.pdf" },
      { publication: "Crunch Gear", tier: "tier2", pdfUrl: "/press/dreamauthentics/crunch-gear.pdf" },
      { publication: "Ubergizmo", tier: "tier2", pdfUrl: "/press/dreamauthentics/ubergizmo.pdf" },
      { publication: "TechnaBob", tier: "tier2", pdfUrl: "/press/dreamauthentics/technabob.pdf" },
      { publication: "The Gadgeteer", tier: "tier2", pdfUrl: "/press/dreamauthentics/the-gadgeteer.pdf" },
      { publication: "Gear Diary", tier: "tier2", pdfUrl: "/press/dreamauthentics/gear-diary.pdf" },
      { publication: "Arcade Heroes", tier: "tier2", pdfUrl: "/press/dreamauthentics/arcade-heroes.pdf" },
      { publication: "Watch Mojo", tier: "tier2", pdfUrl: "/press/dreamauthentics/watch-mojo.pdf" },
      { publication: "SciFi Tech", tier: "tier2", pdfUrl: "/press/dreamauthentics/da-in-sci-fi-tech.pdf" },
      { publication: "ManiaTV", tier: "tier2", pdfUrl: "/press/dreamauthentics/maniatv.pdf" },
      { publication: "Best Stuff", tier: "tier2", pdfUrl: "/press/dreamauthentics/best-stuff.pdf" },
      { publication: "Best Stuff (cont.)", tier: "tier2", pdfUrl: "/press/dreamauthentics/best-stuff2.pdf" },
      { publication: "Popgadget", tier: "tier2", pdfUrl: "/press/dreamauthentics/popgadget.pdf" },
      { publication: "Gamer Dad", tier: "tier2", pdfUrl: "/press/dreamauthentics/gamer-dad.pdf" },
      { publication: "Great Dad", tier: "tier2", pdfUrl: "/press/dreamauthentics/great-dad.pdf" },
      { publication: "teamXbox", tier: "tier2", pdfUrl: "/press/dreamauthentics/teamxbox.pdf" },
      { publication: "Gearlog", tier: "tier2", pdfUrl: "/press/dreamauthentics/gearlog-search-results-for-dreamauthentics.pdf" },
      { publication: "Crave", tier: "tier2", pdfUrl: "/press/dreamauthentics/crave.pdf" },
      { publication: "Crave (cont.)", tier: "tier2", pdfUrl: "/press/dreamauthentics/crave2.pdf" },
      { publication: "I-War", tier: "tier2", pdfUrl: "/press/dreamauthentics/i-war.pdf" },
      { publication: "Game Room Gear", tier: "tier2", pdfUrl: "/press/dreamauthentics/game-room-gear-dream-authentics-arcade-cabinets.pdf" },
      { publication: "Obsessed Arcade", tier: "tier2", pdfUrl: "/press/dreamauthentics/obsessed-arcade.pdf" },
      { publication: "Phuze", tier: "tier2", pdfUrl: "/press/dreamauthentics/phuze-05.pdf" },
      { publication: "The Adrenaline Vault", tier: "tier2", pdfUrl: "/press/dreamauthentics/the-adrenaline-vault-news.pdf" },
      { publication: "Tetsu's Thoughts", tier: "tier2", pdfUrl: "/press/dreamauthentics/tetsu-s-thoughts.pdf" },
      { publication: "geekBlue — At Home Arcade", tier: "tier2", pdfUrl: "/press/dreamauthentics/at-home-arcade-no-quarters-necessary-geekblue.pdf" },
      { publication: "Shaun Conlin / Evergeek", tier: "tier2", pdfUrl: "/press/dreamauthentics/shaunconlinevergeek.pdf" },

      // Regional / lifestyle
      { publication: "Time Out New York", tier: "regional", pdfUrl: "/press/dreamauthentics/time-out-new-york.pdf" },
      { publication: "Los Angeles Magazine", tier: "regional", pdfUrl: "/press/dreamauthentics/los-angeles-magazine.pdf" },
      { publication: "San Francisco Examiner", tier: "regional", pdfUrl: "/press/dreamauthentics/san-francisco-examiner-print.pdf" },
      { publication: "Washington Examiner", tier: "regional", pdfUrl: "/press/dreamauthentics/washington-examiner.pdf" },
      { publication: "Baltimore Examiner", tier: "regional", pdfUrl: "/press/dreamauthentics/baltimore-examiner.pdf" },
      { publication: "The Oklahoman", tier: "regional", pdfUrl: "/press/dreamauthentics/oklahoman.pdf" },
      { publication: "The Oklahoman (feature)", tier: "regional", pdfUrl: "/press/dreamauthentics/the-oklahoman-article.pdf" },
      { publication: "Rocky Mountain News", tier: "regional", pdfUrl: "/press/dreamauthentics/rocky-mountain-news-tech-telecom.pdf" },
      { publication: "Bangkok Post", tier: "regional", pdfUrl: "/press/dreamauthentics/bangkok-post.pdf" },
      { publication: "Urban Male Magazine", tier: "regional", pdfUrl: "/press/dreamauthentics/urban-male-magazine.pdf" },
      { publication: "Acquire Magazine", tier: "regional", pdfUrl: "/press/dreamauthentics/acquire-magazine.pdf" },
      { publication: "New England Fine Living", tier: "regional", pdfUrl: "/press/dreamauthentics/new-england-fine-living.pdf" },
      { publication: "Splash Magazine", tier: "regional", pdfUrl: "/press/dreamauthentics/splash-magazine.pdf" },
      { publication: "Luxury Villas & Resorts", tier: "regional", pdfUrl: "/press/dreamauthentics/luxury-villas-resorts-vacation-rentals-exclusive-resorts.pdf" },
      { publication: "Angie's List", tier: "regional", pdfUrl: "/press/dreamauthentics/angie-s-list.pdf" },
      { publication: "The Republic", tier: "regional", pdfUrl: "/press/dreamauthentics/the-republic.pdf" },
      { publication: "Live Journal", tier: "regional", pdfUrl: "/press/dreamauthentics/live-journal.pdf" },
      { publication: "DreamAuthentics Feature", tier: "regional", pdfUrl: "/press/dreamauthentics/dreamauthentics.pdf" },
      { publication: "VGL — DA Show Poster", tier: "regional", pdfUrl: "/press/dreamauthentics/vgl-da-show-poster-copy-2.pdf" },

      // TV
      { publication: "NBC", tier: "tv" },
      { publication: "CBS", tier: "tv" },
      { publication: "Fox", tier: "tv" },
      { publication: "E!", tier: "tv" },
      { publication: "HGTV", tier: "tv" },
      { publication: "The Today Show", tier: "tv" },
    ],
    videos: [
      // Start here — product overview + Angie's List (Rick's pick for lead)
      { videoId: "TskuojFoi70", title: "What is a DreamAuthentics Arcade? Massive Fun!", subtitle: "Product overview · start here" },
      { videoId: "QLDsVbWQ-E0", title: "Custom Arcades for your mancave — by Angie's List", subtitle: "Angie's List" },

      // National TV
      { videoId: "eEZEXzdzHQ0", title: "WCBS-TV CBS New York Feature", subtitle: "CBS New York" },
      { videoId: "FOJCx-uYR9M", title: "E! Television — Money To Burn", subtitle: "E!" },
      { videoId: "w1yq3XlUi6c", title: "FOX Television — Inside Indiana Business", subtitle: "FOX" },
      { videoId: "R6AfRX9cZn0", title: "MSNBC NewsArcades", subtitle: "MSNBC" },
      { videoId: "q260se5yFU8", title: "PBS Television feature", subtitle: "PBS" },
      { videoId: "CCDrudSBMGw", title: "The Travel Channel feature", subtitle: "Travel Channel" },
      { videoId: "ivQzK-sIFZc", title: "Eladius feature by HGTV", subtitle: "HGTV" },
      { videoId: "84M0ajyx7Jw", title: "G4 Attack of the Show feature", subtitle: "G4 Network" },
      { videoId: "M5ewjIQPZns", title: "G4 interview at Gencon — with Tommy Tallarico", subtitle: "G4 · Gencon" },

      // Regional / local TV
      // Live events + celebrity / IndyCar
      { videoId: "OLBAjleufVU", title: "Indy 500 — Rafael Matos plays DreamAuthentics IndyCar Simulator", subtitle: "2009" },
      { videoId: "V-hrQRWduXs", title: "Racing Simulator — Rafa Matos, Luczo Dragon, CBS Sports Interview", subtitle: "IndyCar" },
      { videoId: "gTQMw7unuYo", title: "DreamAuthentics at VGL Los Angeles", subtitle: "Video Games Live tour" },
      // Product features + awards
      { videoId: "OmTOXL43dw4", title: "Popular Mechanics Review", subtitle: "Popular Mechanics" },

      // DreamTrust brand (parent co)
      // Additional Angie's List coverage — Rick interview cut
    ],
  },
  {
    companyId: "video-game-palooza",
    company: "Video Game Palooza",
    summary:
      "VGP's YouTube channel mixes the Charity Arcade at Indiana State Museum (first in the country), Create-and-Play Camps media coverage, Rick's retro-collector work as VGP co-founder, and a deep Diablo Immortal / Yu-Gi-Oh game-content series produced under the VGP banner.",
    press: [],
    videos: [
      // Charity Arcade — Indiana State Museum (first in the country)
      { videoId: "-KDBYBmnKDo", title: "VGP Charity Arcade at the Indiana State Museum — first in the Country!", subtitle: "Launch clip" },
      { videoId: "8GetGlk5ksc", title: "Rick Barretto — Retro Arcade Collector interview at Indiana State Museum", subtitle: "CBS Indianapolis" },
      { videoId: "2mabyf18fmg", title: "Cara Barretto — Channel 8 CBS at Indiana State Museum Charity Arcade", subtitle: "Channel 8 CBS" },

      // Create and Play Camps
      { videoId: "eLjJ6q4Q8OE", title: "Create and Play Camps — Channel 13 Summer Coding Camps for kids", subtitle: "Channel 13" },
      // Rick as VGP co-founder / retro collector
      { videoId: "kEi74Q7_zuk", title: "VGP co-founder + retro game collector — creator of DreamAuthentics since 1999", subtitle: "About Rick" },

      // Diablo Immortal / game-content series (produced under VGP banner)
    ],
  },
  {
    companyId: "hope-training-academy",
    company: "Hope Training Academy",
    summary:
      "HTA's YouTube channel hosts welcomes, promos, student + staff testimonials, and the pandemic-era live panels Rick + Cara hosted. The mission shows best in the voices of the nearly-2,000 Hoosiers who came through the program.",
    press: [],
    videos: [
      // Welcomes + tour
      { videoId: "0q1-Uy_ARts", title: "Welcome to Hope Training Academy — 2023", subtitle: "Start here" },
      { videoId: "y2AlE2sPN8Y", title: "HTA Tour and Opportunity", subtitle: "Facility walkthrough" },

      // Program promos
      { videoId: "EouaO6ory88", title: "Student Dreams Fulfilled", subtitle: "Promo" },
      { videoId: "bsetqsisiJg", title: "What does an IT Pro do?", subtitle: "Promo" },
      // Student + staff testimonials (the core of the mission)
      { videoId: "_GQh4apUpyQ", title: "Former Students Who Are Now Teachers", subtitle: "Student testimonials" },
      { videoId: "jqWnaB2DfzU", title: "Students Who Are Now Teachers (short)", subtitle: "Student testimonials" },
      { videoId: "X688BkOwdRI", title: "Supporting Students — Judy (Extended)", subtitle: "Student success" },
      { videoId: "0P3W_MzqY5g", title: "Supporting Students — Marc (Dream Manager)", subtitle: "Student success" },
      // Panels + special events (Rick + Cara on camera)
      { videoId: "SbXtXr3bC9c", title: "How to be a Superhero in Times of Chaos", subtitle: "Cara & Rick Barretto live" },
      // ——— Additional HTA content from VGP channel ———
      { videoId: "yTDosGmYFkI", title: "HTA Introduction — Executive Director Sarah Zike on services", subtitle: "Sarah Zike" },
      { videoId: "_nA9Df3j8wE", title: "Google — new hires don't require a college degree. Apprenticeships work", subtitle: "Industry evidence" },

      // CompTIA instructional
      // Student success
      { videoId: "-iP3UX6n47w", title: "Dej Afuye — CompTIA A+ Student Success Story", subtitle: "Student testimonial (long-form)" },
      { videoId: "yUWovI1sSH0", title: "Niyat Tesfatsion — CyberSecurity Apprentice at VGP/HTA", subtitle: "Apprentice testimonial" },
      { videoId: "b0Yo32DL8vQ", title: "Jared Giddens — IT + CyberSecurity Apprentice at VGP/HTA", subtitle: "Apprentice testimonial" },

      // Career advice
      { videoId: "NJ7bcwz4LRw", title: "CJ Oyer — Roblox Game Dev + Entrepreneur career advice", subtitle: "Career advice · Roblox" },
    ],
  },
  {
    companyId: "game-on-events",
    company: "Game On esports",
    summary:
      "Indianapolis Business Journal cover story (Dec 2017 — \"Esports Explode\"), Hamilton County Reporter, and partner-university coverage.",
    press: [
      { publication: "Indianapolis Business Journal — COVER", tier: "tier1", pdfUrl: "/press/game-on-events/ibj-esports-cover-dec-2017.pdf", note: "December 4–10, 2017 — Esports Explode" },
      { publication: "IBJ — Esports Becoming Global Sensation", tier: "tier1", pdfUrl: "/press/game-on-events/ibj-esports-global-sensation-dec-2017.pdf", note: "December 2, 2017" },
      { publication: "Official Press Release — Game On Launch", tier: "regional", pdfUrl: "/press/game-on-events/press-release-game-on-launch-sept-2017.pdf", note: "September 16, 2017 — Mayor Cook + Grand Park Field House" },
      { publication: "Hamilton County Reporter", tier: "regional", note: "Mayor Cook + Game On launch" },
    ],
    videos: [
      { videoId: "NhRa1nr9VPM", title: "Game On — where esports meets education", subtitle: "VGP × Game On" },
      // Yu-Gi-Oh tournament series at Game On Events (September 2023)
    ],
  },
  {
    companyId: "irecord",
    company: "iRecord / WSI Technologies",
    summary:
      "Law-enforcement trade press and state business recognition. WSI Technologies (parent of iRecord + Evertel) was named 2023 Small Business of the Year by the Indiana SBDC \u2014 45% revenue growth 2019\u20132022, international expansion to Canada, Thailand, and Egypt. Additional industry-publication archive pending.",
    press: [
      {
        publication: "Indiana SBDC / IEDC",
        tier: "regional",
        pdfUrl: "/press/irecord/wsi-sba-small-business-of-year-2023.pdf",
        note: "May 2023 \u2014 2023 Small Business of the Year award announcement",
      },
      {
        publication: "Indiana Small Business Week",
        tier: "regional",
        note: "May 11, 2023 \u2014 Award luncheon recognition",
      },
    ],
    videos: [],
  },
  {
    companyId: "harry-potter-wall-art",
    company: "Harry Potter Wall Art",
    summary:
      "Only Indiana company with a Warner Bros. Harry Potter license at the time. Press coverage centered on the Indianapolis Star and Infinitus fan conventions.",
    press: [
      { publication: "Indianapolis Star", tier: "tier1", note: "August 2009 — Warner Bros. license" },
      { publication: "Infinitus 2010 HP Convention", tier: "regional", note: "DreamTrust keynote vendor" },
    ],
    videos: [
      { videoId: "rH-NROYBSiQ", title: "DreamTrust announces HarryPotterWallArt.com", subtitle: "Press release" },
      { videoId: "TTwR8K28-e0", title: "HarryPotterWallArt.com — Product Introduction & Overview", subtitle: "Walkthrough" },
    ],
  },
];
