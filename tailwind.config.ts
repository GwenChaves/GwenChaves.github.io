import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bp_back': '#153A70',
        'grad1': '#36DAFF',
        'grad2': '#B474FF',
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
      fontFamily: {
          NameFont: ["Koln", "sans-seriff"],
          ButtonFont: ["Truly", "sans-seriff"],
      },
    },
  },
  plugins: [],
} satisfies Config;
