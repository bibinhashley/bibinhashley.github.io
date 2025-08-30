/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        surface: {
          50: 'rgba(248, 250, 252, 0.05)',
          100: 'rgba(241, 245, 249, 0.1)',
          200: 'rgba(226, 232, 240, 0.15)',
          300: 'rgba(203, 213, 225, 0.2)',
          400: 'rgba(148, 163, 184, 0.25)',
          500: 'rgba(100, 116, 139, 0.3)',
          600: 'rgba(71, 85, 105, 0.4)',
          700: 'rgba(51, 65, 85, 0.5)',
          800: 'rgba(30, 41, 59, 0.6)',
          900: 'rgba(15, 23, 42, 0.8)',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'floating 6s ease-in-out infinite',
        'float-delayed': 'floating 8s ease-in-out infinite 2s',
        'shimmer': 'shimmer 3s linear infinite',
        'glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in': 'fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-left': 'fade-in-left 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-right': 'fade-in-right 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(228,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(96, 165, 250, 0.3)',
        'glow-lg': '0 0 40px rgba(96, 165, 250, 0.4)',
        'glow-xl': '0 0 60px rgba(96, 165, 250, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(96, 165, 250, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'neumorph': '20px 20px 60px rgba(0, 0, 0, 0.3), -20px -20px 60px rgba(255, 255, 255, 0.05)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(203 213 225)',
            maxWidth: 'none',
            p: {
              color: 'rgb(203 213 225)',
            },
            strong: {
              color: 'rgb(248 250 252)',
            },
            h1: {
              color: 'rgb(248 250 252)',
            },
            h2: {
              color: 'rgb(248 250 252)',
            },
            h3: {
              color: 'rgb(248 250 252)',
            },
            h4: {
              color: 'rgb(248 250 252)',
            },
          }
        }
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
};