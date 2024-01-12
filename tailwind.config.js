/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'background': "#0F0F0F",
      'primary': "#fff",
      'accent': "#9A7AA0",
      "card-bg": "#171717",
    },
    fontFamily: {
      'sans': ['"Roboto"', 'sans-serif'],
      'serif': ['"Roboto"', 'sans-serif'],
    },
    extend: {

      caretColor: {
        dark: "#fff",
      }
    },
  },
  plugins: [],
}

