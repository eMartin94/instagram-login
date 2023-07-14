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
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        '2md': '876px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}