import type { Config } from 'tailwindcss'

import animate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--tw-background))',
        foreground: 'hsl(var(--tw-foreground))',
        card: {
          DEFAULT: 'hsl(var(--tw-card))',
          foreground: 'hsl(var(--tw-card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--tw-popover))',
          foreground: 'hsl(var(--tw-popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--tw-primary))',
          foreground: 'hsl(var(--tw-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--tw-secondary))',
          foreground: 'hsl(var(--tw-secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--tw-muted))',
          foreground: 'hsl(var(--tw-muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--tw-accent))',
          foreground: 'hsl(var(--tw-accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--tw-destructive))',
          foreground: 'hsl(var(--tw-destructive-foreground))',
        },
        border: 'hsl(var(--tw-border))',
        input: 'hsl(var(--tw-input))',
        ring: 'hsl(var(--tw-ring))',
        chart: {
          1: 'hsl(var(--tw-chart-1))',
          2: 'hsl(var(--tw-chart-2))',
          3: 'hsl(var(--tw-chart-3))',
          4: 'hsl(var(--tw-chart-4))',
          5: 'hsl(var(--tw-chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [animate],
} satisfies Config
