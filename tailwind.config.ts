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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'Amber': '#FFBE0B',
        'Pantone': '#FB5607',
        'NeoRose': '#FF006E',
        'BlueViolet': '#8338EC',
        'Azure': '#3A86FF',
      },
    },
  },
  plugins: [],
};
export default config;
