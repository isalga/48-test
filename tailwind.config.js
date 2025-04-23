import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        primary: 'var(--aw-color-primary)', // Green
        accent: 'var(--aw-color-accent)',  // Orange
        'text-heading': 'var(--aw-color-text-heading)', // Deep brown for headings
        'text-default': 'var(--aw-color-text-default)', // Deep brown for body text
        'bg-page': 'var(--aw-color-bg-page)', // Light grey for page background
        secondary: 'var(--aw-color-secondary)', // Yellow
        'secondary-2': 'var(--aw-color-secondary-2)', // Pink
        'secondary-3': 'var(--aw-color-secondary-3)', // Purple

        // Dark Theme Colors
        dark: {
          primary: 'var(--aw-color-primary)', // Green
          accent: 'var(--aw-color-accent)',  // Orange
          'text-heading': 'var(--aw-color-text-heading)', // Light grey for headings
          'text-default': 'var(--aw-color-text-default)', // Light grey for body text
          'bg-page': 'var(--aw-color-bg-page)', // Deep brown for page background
          secondary: 'var(--aw-color-secondary)', // Yellow
          'secondary-2': 'var(--aw-color-secondary-2)', // Pink
          'secondary-3': 'var(--aw-color-secondary-3)', // Purple
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans], // Body text
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.serif], // Headings
      },
      animation: {
        fade: 'fadeInUp 1s both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class', // Enable dark mode using class strategy
};