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
          amethyst: "#2b1f3a",      // deep purple-black
          violet: "#5b3b8a",        // rich, restrained purple
          plum: "#3a1f2e",          // wine-plum grounding tone
          gold: "#c9a24d",
        }
      }
    },
    plugins: []
  };