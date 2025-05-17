/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Turmeric gold
          dark: '#E6C200',
          light: '#FFDF33',
        },
        secondary: {
          DEFAULT: '#013220', // Deep green
          light: '#024C31',
          dark: '#00210E',
        },
        neutral: {
          dark: '#121212', // Near black
          light: '#F8F8F8', // Off-white
        },
        accent: {
          DEFAULT: '#8B4513', // Brown (earthy tone)
          secondary: '#A52A2A', // Red-brown (for CTAs)
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'arabic': ['Noto Sans Arabic', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'pattern': "url('/src/assets/pattern.svg')",
      },
      boxShadow: {
        'elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};