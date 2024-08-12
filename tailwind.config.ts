import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "100": "#d8e4d6",
          "200": "#9abd8f",
          "300": "#72a361",
          "400": "#488831",
          "500": "#247107"
        },
        secondary: {
          "100": "#e7e7e7",
          "200": "#bcbcbc",
          "300": "#7f7f7f",
          "400": "#444444",
          "500": "#000000"
        },
        background: {
          "100": "#f4f4f4"
        }
      }
    },
  },
  plugins: [],
};
export default config;
