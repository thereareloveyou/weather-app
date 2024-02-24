/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/components/**/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        light: ["NotoSans-Light"],
        medium: ["NotoSans-Medium"],
        regular: ["NotoSans-Regular"],
        bold: ["NotoSans-Bold"],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        borderColor: "var(--border)",
        text: {
          DEFAULT: "var(--text-1)",
          gray: "var(--text-2)",
          title: "var(--title)",
        },
        background: "var(--background)",
        backgroundItem: 'var(--background-2)',
        card: {
          DEFAULT: "var(--card)",
        },
        hoverBtn: "var(--hover-btn)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),],
};
