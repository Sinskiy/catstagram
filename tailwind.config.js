/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        onSurface: 'rgb(var(--on-surface) / <alpha-value>)',
        surfaceHigh: 'rgb(var(--surface-high) / <alpha-value>)',
        outline: 'rgb(var(--outline) / <alpha-value>)'
      }
    }
  },
  plugins: []
}
