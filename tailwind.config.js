/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Custom Colors
      colors: {
        // Light theme colors
        light: {
          primary: '#ffffff',
          secondary: '#f8fafc',
          accent: '#3b82f6',
          text: '#1e293b',
          'text-secondary': '#64748b',
          border: '#e2e8f0',
          hover: '#f1f5f9',
          shadow: 'rgba(0, 0, 0, 0.1)',
        },
        // Dark theme colors
        dark: {
          primary: '#0f172a',
          secondary: '#1e293b',
          accent: '#60a5fa',
          text: '#f8fafc',
          'text-secondary': '#cbd5e1',
          border: '#334155',
          hover: '#334155',
          shadow: 'rgba(0, 0, 0, 0.3)',
        },
        // Calculator specific colors
        calculator: {
          number: {
            light: '#ffffff',
            dark: '#374151',
          },
          operator: {
            light: '#3b82f6',
            dark: '#60a5fa',
          },
          equals: {
            light: '#10b981',
            dark: '#34d399',
          },
          clear: {
            light: '#ef4444',
            dark: '#f87171',
          },
          display: {
            light: '#f8fafc',
            dark: '#1f2937',
          }
        }
      },
      
      // Custom Fonts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      // Custom Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Custom Border Radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      
      // Custom Shadows
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-dark': '0 2px 15px -3px rgba(0, 0, 0, 0.3), 0 10px 20px -2px rgba(0, 0, 0, 0.2)',
        'button': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'button-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'display': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      
      // Custom Animations
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-soft': 'bounceSoft 0.6s ease-in-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'button-press': 'buttonPress 0.1s ease-in-out',
      },
      
      // Custom Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        buttonPress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      
      // Custom Transitions
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      
      // Custom Backdrop Blur
      backdropBlur: {
        xs: '2px',
      },
      
      // Custom Grid Template Columns
      gridTemplateColumns: {
        'calculator': 'repeat(4, 1fr)',
      },
      
      // Custom Aspect Ratios
      aspectRatio: {
        'calculator': '3 / 4',
      },
    },
  },
  plugins: [
    // Add any additional Tailwind plugins here
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    
    // Custom plugin for calculator-specific utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.calc-button': {
          '@apply rounded-xl font-medium transition-all duration-200 active:scale-95 select-none': {},
        },
        '.calc-display': {
          '@apply font-mono text-right p-4 rounded-xl': {},
        },
        '.theme-transition': {
          '@apply transition-colors duration-300 ease-in-out': {},
        },
      }
      addUtilities(newUtilities)
    }
  ],
}