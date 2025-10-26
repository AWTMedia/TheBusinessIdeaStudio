/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,md,mdx}"],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
};