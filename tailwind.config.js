/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: '#F4F7FA',
        card: '#FFFFFF',
        ink: '#1E293B',
        blue: {
          DEFAULT: '#0066FF',
          dark: '#0050CC',
          deep: '#003C99',
          light: '#E6F0FF',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
