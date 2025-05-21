import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        racing: ["'Racing Sans One'", 'sans-serif'],
        fugaz: ["'Fugaz One'", 'sans-serif'],
      },
      colors: {
        'blu-1': '#0052cc',
        'blu-2': '#0146b3',
        'blu-3': '#253858',
        'gray-1': '#253858',

        
      },
    },
  },
  plugins: [],
});

export default config;
