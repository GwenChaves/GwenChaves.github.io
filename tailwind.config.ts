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
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
      fontFamily: {
        NameFont: ["Koln", "sans-seriff"],
      },
    },

  },
  plugins: [],
} satisfies Config;
