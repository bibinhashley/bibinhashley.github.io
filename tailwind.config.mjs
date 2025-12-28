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
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        matrix: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        dev: {
          bg: '#0a0e1a',
          card: '#0f1420',
          border: '#1a1f35',
          text: '#e2e8f0',
          muted: '#64748b',
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
};