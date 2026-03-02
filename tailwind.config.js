/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        hindi: ['var(--font-hindi)', 'Tiro Devanagari Hindi', 'serif'],
        sans: ['var(--font-cinzel)', 'Cinzel', 'serif'],
      },
      colors: {
        saffron: '#FF6B00',
        'saffron-light': '#FF8C00',
        'saffron-dark': '#CC5500',
        gold: '#FFD700',
        'gold-light': '#FFE44D',
        maroon: '#800000',
        'maroon-dark': '#4A0000',
        cream: '#FFF8E7',
        'cream-dark': '#F5E6C8',
        orange: {
          950: '#431407',
        }
      },
      animation: {
        'flame': 'flame 2s ease-in-out infinite alternate',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'rise': 'rise 0.8s ease-out forwards',
      },
      keyframes: {
        flame: {
          '0%': { transform: 'scaleY(1) scaleX(1)', filter: 'brightness(1)' },
          '100%': { transform: 'scaleY(1.1) scaleX(0.95)', filter: 'brightness(1.2)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px #FF6B00, 0 0 40px #FFD700' },
          '50%': { boxShadow: '0 0 40px #FF6B00, 0 0 80px #FFD700, 0 0 120px #FF8C00' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
