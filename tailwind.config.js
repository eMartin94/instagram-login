/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-hero': "url('/src/assets/home-phones.webp')",
      },
      transitionDuration: {
        '1500': '1500ms',
      }
    },
  },
  plugins: [],
}