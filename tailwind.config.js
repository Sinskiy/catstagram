/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        surfaceContainer: 'rgb(var(--surface-container) / <alpha-value>)',
        surfaceHigh: 'rgb(var(--surface-high) / <alpha-value>)',
        secondaryContainer: 'rgb(var(--secondary-container) / <alpha-value>)',
        onSecondaryContainer:
          'rgb(var(--on-secondary-container) / <alpha-value>)',
        tertiaryContainer: 'rgb(var(--tertiary-container) / <alpha-value>)',
        onTertiaryContainer: 'rgb(var(--on-tertiary-container) /<alpha-value>)',
        onSurface: 'rgb(var(--on-surface) / <alpha-value>)',
        outline: 'rgb(var(--outline) / <alpha-value>)'
      }
    }
  },
  plugins: []
}
