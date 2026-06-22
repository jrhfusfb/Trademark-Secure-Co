/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#0f2247', // Deep Royal Navy from Logo
        secondary: '#c5a059', // Rich Matte Gold from Logo
        accent: '#9e7f43', // Muted/Darker Gold for hover states
      },
    },
  },
  plugins: [],
}
