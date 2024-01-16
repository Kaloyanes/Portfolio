/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#fff",
        'background-dark': "#050505",
        "card-bg": "#171717",
        'border-primary': "#2D2D2D",
        'accent': "#9A7AA0",
        'primary': "#fff",
        "text": "#000",
        "text-dark": "#fff",

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
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"]
  },

}

