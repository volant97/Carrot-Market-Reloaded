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
        "test-color": "#58f198",
      },
      borderRadius: {
        "test-rounded": "11.11px",
      },
    },
  },
  plugins: [],
};
export default config;
