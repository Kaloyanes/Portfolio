/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#08040C",
        "card-bg": "#1B1726",
        'primary': "#fff",
        'accent': "#9A7AA0",
      },
      caretColor: {
        dark: "#fff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Ubuntu Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

