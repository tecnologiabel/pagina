import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0D2B51",
          red: "#EF2E33",
          sky: "#50ACE4",
          light: "#F4F6F8",
          lightAlt: "#E7EBEF",
          lightSoft: "#D9DEE3",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(13, 43, 81, 0.12)",
      },
      backgroundImage: {
        thermal: "radial-gradient(circle at 20% 20%, rgba(80,172,228,0.25), transparent 45%), radial-gradient(circle at 80% 30%, rgba(239,46,51,0.18), transparent 35%), linear-gradient(140deg, #0D2B51 30%, #123969 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
