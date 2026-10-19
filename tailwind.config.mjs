/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#9A3E2D",
          secondary: "#F1E3C2",
          dark: "#3B2823",
          accent: "#B45A3C",
        },
      },
    },
  },
  plugins: [],
};
