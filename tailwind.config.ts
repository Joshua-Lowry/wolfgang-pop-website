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
        'butter-yellow': '#F3E1A4',
        'plum-purple': '#4B2E83',
        'charcoal': '#1F1F1F',
        'warm-gray': '#9B9B9B',
      },
    },
  },
  plugins: [],
};
export default config;
