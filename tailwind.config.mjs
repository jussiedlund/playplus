/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        'paper-bright': 'var(--paper-bright)',
        play: 'var(--play)',
        'blend-build': 'var(--essential-blend-build)',
        'space-explore': 'var(--essential-space-explore)',
        transparency: 'var(--essential-radical-transparency)',
        freedom: 'var(--essential-freedom-within-form)',
        flat: 'var(--essential-flat-by-design)',
        mindset: 'var(--essential-player-mindset)',
      },
      fontFamily: {
        display: ['Mr Banks', 'Georgia', 'serif'],
        body: ['Avenir', 'Avenir Next', 'Figtree', 'Arial', 'sans-serif'],
        label: ['Bebas Neue', 'Arial Narrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
