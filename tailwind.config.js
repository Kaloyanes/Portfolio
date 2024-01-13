/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Roboto"', 'sans-serif'],
      'serif': ['"Roboto"', 'sans-serif'],
    },
    extend: {
      colors: {
        'background': "#0F0F0F",
        'primary': "#fff",
        'accent': "#9A7AA0",
        "card-bg": "#171717",
      },
      caretColor: {
        dark: "#fff",
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

