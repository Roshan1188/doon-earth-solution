import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep forest green — pulled from the Doon Earth Solutions logo
        brand: {
          50:  '#f3f8ec',
          100: '#e3f0d0',
          200: '#c6dfa1',
          300: '#a2cb6e',
          400: '#7fb442',
          500: '#5f9a26',
          600: '#487a1a',
          700: '#3a6217',
          800: '#2e4d12',
          900: '#1f380c',
        },
        // Lime / leaf accent — the brighter green in the logo's globe + leaf
        leaf: {
          50:  '#f7fbe9',
          100: '#ecf6cf',
          200: '#d6ec9d',
          300: '#bcdc6a',
          400: '#a3c93f',
          500: '#84b020',
          600: '#658c14',
          700: '#4d6a10',
        },
        accent: {
          500: '#a3c93f',
          600: '#84b020',
        },
        // Charcoal — the near-black in the logo lettering
        ink: {
          900: '#0e1410',
          800: '#1a221c',
          700: '#26302a',
          600: '#384338',
        },
        bone: {
          50:  '#fbfaf6',
          100: '#f4f3ec',
          200: '#e7e5d6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(14, 20, 16, 0.18)',
        forest: '0 18px 50px -18px rgba(46, 77, 18, 0.45)',
        ring: '0 0 0 6px rgba(132, 176, 32, 0.18)',
      },
      backgroundImage: {
        'grid-soft':
          'linear-gradient(to right, rgba(14,20,16,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,20,16,0.05) 1px, transparent 1px)',
        'leaf-rays':
          'radial-gradient(60% 60% at 50% 0%, rgba(163,201,63,0.25) 0%, rgba(163,201,63,0) 70%)',
        'forest-fade':
          'linear-gradient(180deg, #f3f8ec 0%, #ffffff 60%, #ffffff 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.9s ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 22s linear infinite',
        'tilt': 'tilt 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(132,176,32,0.55)' },
          '100%': { boxShadow: '0 0 0 22px rgba(132,176,32,0)' },
        },
        tilt: {
          '0%,100%': { transform: 'rotate(-1.2deg)' },
          '50%': { transform: 'rotate(1.2deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
