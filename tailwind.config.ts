import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        "3xl": ["1.875rem", { lineHeight: "1.4" }],
        "4xl": ["2.25rem", { lineHeight: "1.38" }],
        "5xl": ["3rem", { lineHeight: "1.35" }],
        "6xl": ["3.75rem", { lineHeight: "1.3" }],
        "7xl": ["4.5rem", { lineHeight: "1.25" }],
      },
      lineHeight: {
        tight: "1.3",
        snug: "1.4",
        normal: "1.55",
        relaxed: "1.7",
      },
      colors: {
        codely: {
          ink: "#050817",
          navy: "#090F2B",
          panel: "#0D1433",
          cyan: "#2EDCFF",
          blue: "#4F75FF",
          violet: "#BB5CFF",
          muted: "#98A7C5",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm)", "var(--font-inter)", "sans-serif"],
        cairo: ["var(--font-ibm)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(46, 220, 255, .14)",
      },
    },
  },
  plugins: [],
};
export default config;
