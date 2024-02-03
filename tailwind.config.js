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
        'card-bg': "#fff",
        "card-bg-dark": "#171717",
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
    themes: [
      {
        mytheme: {
          "primary": "rgb(192 132 252)",
          "dark-primary": "#9A7AA0",
          "secondary": "#ffffff",
          "accent": "#ffffff",
          "neutral": "#ffffff",
          "base-100": "#050505",
          "info": "rgb(120 0 255)",
          "success": "#00ffff",
          "warning": "#ffffff",
          "error": "rgb(192 40 40)",
        },
      },

    ]
  },

}

