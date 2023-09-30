/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        onSurface: 'rgb(var(--on-surface) / <alpha-value>)'
      }
    }
  },
  plugins: []
}
