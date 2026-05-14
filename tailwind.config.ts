import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          300: "#6161f2",
          400: "#4d3de3",
          500: "#410cd9", // Photoroom brand purple (was #5D2DE6 in my v1)
          600: "#280197",
        },
        neutral: {
          0: "#ffffff",
          50: "#f9f9f9",
          100: "#f2f2f2",
          200: "#e5e5e5",
          300: "#d9d9d9",
          400: "#b5b5b5",
          500: "#a1a1a1",
          600: "#8a8a8a",
          700: "#6b6b6b",
          800: "#474747",
          900: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: [
          "TT Photoroom",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        page: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
