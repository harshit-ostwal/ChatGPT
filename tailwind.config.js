/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-background)",
        },
        secondary: {
          DEFAULT: "var(--secondary-background)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
        },
        card: {
          DEFAULT: "var(--card-background)",
        },
      },
      fontFamily: {
        Outfit: "var(--outfit)",
      },
    },
  },
  plugins: [],
};
