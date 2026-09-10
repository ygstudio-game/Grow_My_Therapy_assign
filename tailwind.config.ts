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
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
