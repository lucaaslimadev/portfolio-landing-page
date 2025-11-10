import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070B12",
          900: "#0B111A",
          800: "#0F1623",
          700: "#152033",
          600: "#1D2A40"
        },
        accent: {
          DEFAULT: "#8B9DFF", // indigo suave
          500: "#8B9DFF",
          400: "#A7B4FF",
          300: "#C3CCFF"
        }
      },
      backgroundImage: {
        "noise": "radial-gradient(transparent, rgba(0,0,0,0.5)), url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"300\" viewBox=\"0 0 300 300\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.04\"/></svg>')"
      },
      boxShadow: {
        glow: "0 0 40px rgba(139, 157, 255, 0.18)"
      }
    },
  },
  plugins: [],
};
export default config;

