/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f4f8f2',
          100: '#e7f1e3',
          200: '#cfe3c9',
          300: '#a9cca0',
          400: '#79ac70',
          500: '#538e49',
          600: '#3e7137',
          700: '#315a2d',
          800: '#294826',
          900: '#213b20',
          950: '#10220f'
        },
        sage: '#93a86f',
        cream: '#f8f5ee',
        gold: '#c7a24d',
        ink: '#18211b'
      },
      boxShadow: {
        soft: '0 16px 50px rgba(31, 63, 40, 0.10)',
        card: '0 10px 30px rgba(31, 63, 40, 0.08)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        iconFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1.1)' },
          '50%': { transform: 'translateY(-8px) scale(1.15)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        softFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      },
      animation: {
        'fade-up': 'fadeUp .7s ease-out both',
        'icon-float': 'iconFloat 1.6s ease-in-out infinite',
        'slide-in-left': 'slideInLeft .6s ease-out both',
        'soft-float': 'softFloat 4s ease-in-out infinite'
      }
    }
  },
  plugins: [],
};
