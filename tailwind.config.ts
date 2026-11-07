import type { Config } from "tailwindcss";

/*
  The design is drawn on a 1920px canvas (built at 1440px and exported at 1920px).
  Desktop sizes are written in rem on the 1440 scale (design px at 1440 / 16).
  From 1024px up the root font size follows the screen width (set on <html> in
  app/layout.tsx), so 1440px -> 16px and 1920px -> 21.33px and the desktop layout
  keeps the design's proportions on every screen. The xl layout starts at 1024px
  so the desktop composition fits compactly on 1024px screens.
*/
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1023px",
      xl: "1024px",
      "2xl": "1280px",
    },
    extend: {
      borderColor: {
        DEFAULT: "currentColor",
      },
      // Colours come from the CSS variables in app/globals.css.
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        navy: "var(--color-navy)",
        ink: "var(--color-ink)",
        body: "var(--color-body)",
        muted: "var(--color-muted)",
        light: "var(--color-light)",
        soft: "var(--color-soft)",
        line: "var(--color-line)",
        footer: "var(--color-footer)",
        copyright: "var(--color-copyright)",
      },
      // Font roles; app/layout.tsx sets the variables from templates.json (common.theme.fonts).
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        banner: ["var(--font-banner)"],
        footer: ["var(--font-footer)"],
      },
      scale: { 112: "1.12" },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease",
      },
    },
  },
  plugins: [],
};
export default config;
