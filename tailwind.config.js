/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFEFA',
          100: '#FFFDF0',
          200: '#FDF9E2',
          DEFAULT: '#FAF3D6',
          300: '#FAF3D6',
          400: '#F5E9B8',
          500: '#EBDA96',
          600: '#D6C06B',
          muted: '#F4ECD0',
          dark: '#E8DFA8',
        },
        purple: {
          50: '#F7F5FA',
          100: '#EFEBF5',
          200: '#DFD7EB',
          300: '#C5B5DC',
          400: '#9B81C2',
          500: '#7554A6',
          600: '#5A3F85',
          DEFAULT: '#453368',
          700: '#453368',
          800: '#362753',
          900: '#2A1E40',
          950: '#1A1229',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'purple-sm': '0 2px 8px -2px rgba(69, 51, 104, 0.12)',
        'purple-md': '0 8px 24px -4px rgba(69, 51, 104, 0.16)',
        'purple-lg': '0 16px 36px -6px rgba(69, 51, 104, 0.22)',
        'purple-glow': '0 0 30px rgba(69, 51, 104, 0.18)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
