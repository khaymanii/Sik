import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "15px" },
      color: { accent: "FF8F9C", blackish: "#1b1b1b" },
    },
  },
  plugins: [],
};
export default config;
