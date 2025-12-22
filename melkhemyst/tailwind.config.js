/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
        colors: {
          obsidian: "#0b0b0f",
          mystic: "#3b2f4a",
          indigoDeep: "#2a2540",
          wine: "#4a1f2d",
          gold: "#c9a24d"
        }
      }
    },
    plugins: []
  };