import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius, 0.5rem)',  // Add default fallback values
        md: 'calc(var(--radius, 0.5rem) - 2px)',
        sm: 'calc(var(--radius, 0.5rem) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background, 0, 0%, 100%))',  // Add default fallback
        foreground: 'hsl(var(--foreground, 0, 0%, 0%))',
        card: {
          DEFAULT: 'hsl(var(--card, 0, 0%, 95%))',
          foreground: 'hsl(var(--card-foreground, 0, 0%, 0%))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover, 0, 0%, 90%))',
          foreground: 'hsl(var(--popover-foreground, 0, 0%, 20%))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary, 220, 100%, 60%))',
          foreground: 'hsl(var(--primary-foreground, 0, 0%, 100%))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary, 160, 100%, 60%))',
          foreground: 'hsl(var(--secondary-foreground, 0, 0%, 100%))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted, 240, 100%, 85%))',
          foreground: 'hsl(var(--muted-foreground, 0, 0%, 20%))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent, 40, 100%, 60%))',
          foreground: 'hsl(var(--accent-foreground, 0, 0%, 100%))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive, 360, 100%, 60%))',
          foreground: 'hsl(var(--destructive-foreground, 0, 0%, 100%))',
        },
        border: 'hsl(var(--border, 0, 0%, 80%))',
        input: 'hsl(var(--input, 0, 0%, 100%))',
        ring: 'hsl(var(--ring, 200, 100%, 60%))',
        chart: {
          1: 'hsl(var(--chart-1, 0, 100%, 50%))',
          2: 'hsl(var(--chart-2, 60, 100%, 50%))',
          3: 'hsl(var(--chart-3, 120, 100%, 50%))',
          4: 'hsl(var(--chart-4, 180, 100%, 50%))',
          5: 'hsl(var(--chart-5, 240, 100%, 50%))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
