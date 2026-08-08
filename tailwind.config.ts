import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
      boxShadow: {
        glow: "0 0 40px rgba(46, 220, 255, .14)",
      },
    },
  },
  plugins: [],
};
export default config;
