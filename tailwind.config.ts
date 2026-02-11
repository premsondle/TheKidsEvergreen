import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4FC3F7",
        secondary: "#FF6B9D",
        accent: "#FEC163",
        sunshine: "#FFD54F",
        sky: "#81D4FA",
        grass: "#AED581",
        coral: "#FF8A80",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'kids': '20px',
        'kids-lg': '28px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(79, 195, 247, 0.15)',
        'soft-lg': '0 8px 30px rgba(255, 107, 157, 0.2)',
        'playful': '0 6px 25px rgba(254, 193, 99, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
