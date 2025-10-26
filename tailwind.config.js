/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,md,mdx}"],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
