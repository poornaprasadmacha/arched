/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F1EA",
        ink: "#1C1917",
        bronze: {
          DEFAULT: "#B87B4E",
          soft: "#CBB29C",
          dark: "#8C5832",
        },
        rule: "#DDD6CC",
        border: "#DDD6CC",
        surface: "#FAF8F5",
        "surface-dark": "#151412",
        arch: {
          paper: "#F5F1EA",
          ink: "#1C1917",
          bronze: "#B87B4E",
          rule: "#DDD6CC",
          dark: "#151412",
          surface: "#FAF8F5",
          card: "#FAF8F5",
          border: "#DDD6CC",
          subtle: "#EAE5DC",
          cyan: "#B87B4E", // architectural bronze accent
          sand: "#CBB29C",
          muted: "#736B63",
          light: "#F5F1EA",
        },
      },
      boxShadow: {
        DEFAULT: "none",
        sm: "none",
        md: "none",
        lg: "none",
        xl: "none",
        "2xl": "none",
        inner: "none",
        none: "none",
      },
      dropShadow: {
        DEFAULT: "none",
        sm: "none",
        md: "none",
        lg: "none",
        xl: "none",
        "2xl": "none",
        none: "none",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        serif: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
