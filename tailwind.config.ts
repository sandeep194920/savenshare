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
        "primary": "var(--primary)",
        "primary-light": "var(--primary-light)",
        "bg-default": "var(--bg-default)",
        "bg-card": "var(--bg-card)",
        "bg-card2": "var(--bg-card2)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "border-default": "var(--border-default)",
      },
    },
  },
  plugins: [],
};
export default config;
