module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      green: "#68B436",
      darkgreen: "#2c5313",
      lightgrey: "#f7f9fa",
      divider: "rgba(0, 0, 0, 0.12)",
      grey: "#5B5B5B",
      text: "#5B5B5B",
      textlight: "#718096",
      yellow: "#ffbb00",
      footer: "#5B5B5B",
      black: "#000",
    },
    listStyleType: {
      none: "none",
      disc: "square",
      decimal: "decimal",
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'huge': '2000px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
}
