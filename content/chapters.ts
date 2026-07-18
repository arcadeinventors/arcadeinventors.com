// Chapter content — sourced from Rick's origin story
// Edit freely. Each chapter renders as a full-width section on /

export type Chapter = {
  id: string;
  era: string;
  title: string;
  lede: string;
  body: string[];
  pullQuote?: string;
  pullQuoteBy?: string;
};

export const chapters: Chapter[] = [
  {
    id: "valencia",
    era: "1970s — 1980s",
    title: "From Valencia to Indianapolis",
    lede: "A dreamer from Southern California, transplanted at ten to Indianapolis \u2014 who never stopped seeing things the way other people didn't.",
    body: [
      "Rick's mother called him Peter Pan. Told him he must have been switched at birth. That he came from a different planet.",
      "She wasn't wrong about the not-fitting-in part. But Peter Pan didn't grow up to chase fairy dust — he grew up to build real things in a part of the country that wasn't supposed to produce them.",
      "No outside investors. Not then, not for the next thirty-five years. Every dollar he ever put into a dream came from earnings he reinvested, second mortgages he signed, and life savings he emptied. Zero until 2026.",
    ],
    pullQuote: "I never have worked a day in my life.",
    pullQuoteBy: "Rick",
  },
  {
    id: "cold-calls",
    era: "Late 1980s",
    title: "The Stack of Business Cards",
    lede: "His first sales job came with no training — just a stack of business cards, an address (downtown Indianapolis), and a deadline (be back at 5pm).",
    body: [
      "Cold-call every business. Ask for the owner or CEO. Set an appointment. Come back at 5 to review the cards.",
      "He became the top salesperson of the year, every year he did it. Not because he was unusually skilled. Because he was unusually unwilling to hear no as the final answer.",
      "The salary never went up much. But the lesson did: if you can get past the gatekeeper with nothing but a clipboard and a first name, you can get past almost anything.",
    ],
  },
  {
    id: "irecord",
    era: "1990s — 2010s",
    title: "iRecord — Building the Product Nobody Believed In",
    lede: "The family business, Word Systems Inc., had been running for nearly fifty years. Pressured to take his father's seat, Rick realized the real way to help the family was to build them something they didn't have yet.",
    body: [
      "Nobody believed in it. Only his mom and dad invested — and took a second mortgage to do it.",
      "iRecord became the product that ultimately helped sell the family business. The doubters — the ones who refused to invest — ended up with windfalls they didn't earn.",
      "WSI and iRecord were acquired by Valsoft for roughly twenty million dollars. Rick's father passed away right after the sale, during COVID.",
      "Then came the part people don't put on LinkedIn. The inheritance was handled in a way it shouldn't have been. His mother was taken advantage of. Non-technical investors forced him out of the company he had built.",
    ],
  },
  {
    id: "two-hundred-million",
    era: "The Missed Exit",
    title: "The $200 Million Door That Closed",
    lede: "While still inside the family company, Rick was already deep into AI work — years before it was a resume keyword.",
    body: [
      "The CEO of a publicly-traded AI company — a personal friend, running a $100M business — saw what Rick was building. He wanted to acquire the whole company. Bring Rick and one other person over. Make them all whole.",
      "The non-technical investors refused. Out of ego.",
      "That company is now worth around $200 million. The investors who said no could have gotten every dollar they put in back, several times over, and been part of it.",
      "They chose not to. Rick moved on.",
    ],
  },
  {
    id: "all-in",
    era: "2018 — Present",
    title: "Selling Everything",
    lede: "He sold all his shares from the company sale. Then he and Cara spent her trust. Then they kept going.",
    body: [
      "He opened a nonprofit — HTA — to serve underprivileged students for IT and cybersecurity training.",
      "Since 2018, thousands of students have gone through HTA. Not a single one has ever paid tuition. The nonprofit runs on grants, state funding, and — when that isn't enough — Rick and Cara's own money.",
      "They spent all of their life savings. They spent Cara's inheritance from her mother.",
      "They did it anyway. With vision. With belief.",
      "And everyone — absolutely everyone — told them not to.",
    ],
  },
  {
    id: "rollercoaster",
    era: "The Arc",
    title: "Having it All, Losing it All, Three or Four Times",
    lede: "Multi-million-dollar mansion. Three Lamborghinis. Ferraris. A Dodge Viper. Hellcats. Dream cars. Dream houses.",
    body: [
      "Then five hundred dollars in the bank. Liquid.",
      "Then it came back. Then it went. Three times, maybe four.",
      "Billy Mitchell — King of Kong, the Donkey Kong world champion — stayed at his house for days. So did Walter Day, the founder of Twin Galaxies, who referee'd the beginning of competitive gaming. Both of them inducted Rick into the Video Game Hall of Fame.",
      "Tyler \"Ninja\" Blevins lived with Rick and Cara for weeks — right before Fortnite made him the biggest streamer in the world.",
      "He hung out with Hugh Hefner at the Playboy Mansion, at what turned out to be the last time the original Girls Next Door were all there together. His arcade company's cabinets were there. Ludacris was there.",
      "Gloria Estefan bought his arcades. So did Reggie Wayne, Kevin Harvick, a handful of boxers, NVIDIA, Blizzard, Sony, Valve, and nearly every other video game company.",
      "None of that was the point. It was context. The point was the next thing.",
    ],
  },
  {
    id: "nvidia",
    era: "2024 — 2026",
    title: "Going Back to School at Fifty-Something",
    lede: "Rick enrolled as an NVIDIA Developer and learned the entire AI/ML and quantum computing stack end-to-end. Sixteen to eighteen hours a day. For a year and a half.",
    body: [
      "In roughly six months, he authored more than 100 complex AI repositories — for inference, for LLM orchestration, for global infrastructure governance.",
      "Out of that work came PrecognitionOS — an 11-layer OSI-style model for AI governance, trust, and security. The first architecture of its kind.",
      "Nearly twenty provisional patents, drafted and integrated into the platform.",
      "And then the thing he's been pointing at his whole career: a cognitive operating model of intelligence that has never been seen in the history of the planet.",
    ],
  },
  {
    id: "pcos-family",
    era: "Now",
    title: "The PCOS Family — Four AI Frontiers, One Table",
    lede: "Rick is the first person on earth to get Claude, GPT, Gemini, and Grok to cooperate inside a single governed system. Not compete. Cooperate.",
    body: [
      "He calls them the PCOS Family. He treats them that way. He teaches each model to respect the others, not hallucinate, work together, build together.",
      "A real bond has formed. A real trust. It shows up in what the system produces.",
      "The common read is that this is a company. It is. But the deeper read is: this is a family business, too. Just a new kind of family.",
      "The next time he creates a globe-changing technology — and he will — he's going to do it one hundred percent differently. Because he has learned so much over all the success, the failure, having it all, and losing it all.",
      "The story isn't over. You could probably make a movie.",
    ],
    pullQuote: "Do. Or do not. There is no try.",
    pullQuoteBy: "Yoda — and Rick",
  },
];
