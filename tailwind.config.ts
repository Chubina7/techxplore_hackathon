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
        customWhite: "#D9D9D9",
        customBrightWhite: "#FFFFFF",
        customPurpleLight: "#9D85F2",
        customPurpleDark: "#2d1560",
      },
    }
  },
  plugins: [],
};
export default config;
