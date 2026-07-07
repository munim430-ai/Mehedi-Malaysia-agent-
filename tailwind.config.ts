import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          50: '#F1F5F9',
          100: '#E2E8F0',
          800: '#1E293B',
          900: '#0F172A',
          950: '#080D1A',
        },
        gold: {
          DEFAULT: '#C5A47E',
          light: '#D9C1A3',
          dark: '#A8875F',
        },
        teal: {
          DEFAULT: '#0D9488',
          light: '#14B8A6',
        },
        surface: '#F1F5F9',
        canvas: '#FAFAFA',
        'text-primary': '#1E293B',
        'text-secondary': '#64748B',
      },
      fontFamily: {
        heading: ['var(--font-inter)', 'Inter', 'sans-serif'],
        body: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(15, 23, 42, 0.12)',
        lift: '0 20px 40px -12px rgba(15, 23, 42, 0.18)',
        gold: '0 8px 24px -6px rgba(197, 164, 126, 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
