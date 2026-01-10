import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      colors: {
        navy: {
          DEFAULT: "#1e3a5f",
          light: "#2d4a6f",
          dark: "#152a47",
        },
        terracotta: {
          DEFAULT: "#c85d44",
          light: "#d97757",
          dark: "#b04a33",
        },
      },
    },
  },
  plugins: [],
};
export default config;

