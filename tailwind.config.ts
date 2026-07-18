import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08080c", // cabinet black
        panel: "#0f0f18",
        panel2: "#14141f",
        line: "#232338",
        fog: "#9595ad", // muted text
        chalk: "#f2f2f7", // primary text
        cyan: "#84cc32", // ARCADE-green primary (matches the logo)
        magenta: "#ff2f8e", // hot secondary pop (controller buttons)
        marquee: "#ffb020", // warm arcade amber
        slate: "#2f3e50", // logo slate
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Space Grotesk", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Chakra Petch", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(132,204,50,.35), 0 0 24px -4px rgba(132,204,50,.5)",
        "neon-mag": "0 0 0 1px rgba(255,47,142,.35), 0 0 24px -4px rgba(255,47,142,.45)",
      },
      keyframes: {
        flicker: {
          "0%,19%,21%,100%": { opacity: "1" },
          "20%": { opacity: ".72" },
        },
        drift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
      },
      animation: {
        flicker: "flicker 6s linear infinite",
        drift: "drift 24s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
