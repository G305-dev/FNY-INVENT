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
        ink: "#141c18",
        leaf: "#1c5c40",
        moss: "#2f7a56",
        paper: "#f7f4ee",
        mist: "#eef3ee",
        line: "#d5ddd6",
        gold: "#b0893a",
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
