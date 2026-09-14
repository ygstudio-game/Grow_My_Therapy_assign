import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        "teal-band": "var(--color-teal-band)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-mulish)", "sans-serif"],
        script: ["var(--font-sacramento)", "cursive"],
      },
      transitionTimingFunction: {
        "emil-out": "var(--ease-out)",
      },
      transitionDuration: {
        "160": "160ms",
        "220": "220ms",
      },
    },
  },
  plugins: [],
};

export default config;
