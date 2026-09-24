import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF9F6",       // 60% UX-SPEC Neutral Canvas
        surface: "#FFFFFF",
        brand: {
          navy: {
            DEFAULT: "#113C5E",      // Official Deep Navy
            light: "#184E77",
            dark: "#0B2131",
          },
          sky: {
            DEFAULT: "#5591B7",      // Official Sky Blue
            light: "#E8F1F7",
            soft: "#F2F7FA",
            dark: "#3B7C9E",
          },
        },
        "brand-navy": {
          DEFAULT: "#113C5E",
          light: "#184E77",
          dark: "#0B2131",
        },
        "brand-sky": {
          DEFAULT: "#5591B7",
          light: "#E8F1F7",
          soft: "#F2F7FA",
          dark: "#3B7C9E",
        },
        koina: {
          DEFAULT: "#113C5E",
          dark: "#0B2131",
          light: "#184E77",
          sky: "#5591B7",
          "sky-light": "#E8F1F7",
          "sky-soft": "#F2F7FA",
          "sky-dark": "#3B7C9E",
        },
        ink: {
          DEFAULT: "#0F172A",      // Level 4 Slate 900
          muted: "#475569",        // Slate 600
          light: "#94A3B8",        // Slate 400
        },
      },
      fontFamily: {
        sans: [
          "var(--font-plus-jakarta)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "1.12", letterSpacing: "-0.025em" }],  // 40px Display
        h2: ["1.625rem", { lineHeight: "1.20", letterSpacing: "-0.015em" }], // 26px Section Heading
        h3: ["1.125rem", { lineHeight: "1.30", letterSpacing: "0" }],        // 18px Subhead / Card Title
        body: ["0.96875rem", { lineHeight: "1.55" }],                        // 15.5px Body Text
        meta: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.06em" }],   // 12px All-caps Labels & Tags
      },
      boxShadow: {
        ambient: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 16px -4px rgba(15, 23, 42, 0.05)",
        "ambient-hover": "0 2px 4px rgba(15, 23, 42, 0.05), 0 16px 28px -4px rgba(15, 23, 42, 0.08)",
        tactile: "0 1px 3px rgba(15, 23, 42, 0.06), 0 6px 12px -2px rgba(15, 23, 42, 0.04)",
        "tactile-hover": "0 2px 6px rgba(15, 23, 42, 0.08), 0 12px 20px -2px rgba(15, 23, 42, 0.08)",
        soft: "0 1px 2px rgba(15, 23, 42, 0.03)",
        warm: "0 2px 8px -1px rgba(17, 60, 94, 0.15), 0 1px 3px rgba(15, 23, 42, 0.04)",
        floating: "0 10px 30px -5px rgba(15, 23, 42, 0.12), 0 4px 8px -2px rgba(15, 23, 42, 0.04)",
      },
      borderRadius: {
        lg: "10px",
        xl: "14px",
        "2xl": "18px",
      },
    },
  },
  plugins: [],
};

export default config;
