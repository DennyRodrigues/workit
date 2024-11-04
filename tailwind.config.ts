import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fraunces", "sans-serif"], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkPurple: {
          DEFAULT: "#24053E",
        },
        eucaplyptus: {
          DEFAULT: "#44FFA1",
        },
        davyGrey: {
          DEFAULT: "#584D62",
        },
        ghostWhite: {
          DEFAULT: "#FCF8FF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
