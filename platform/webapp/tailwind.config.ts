import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        ground: 'var(--color-ground)',
        panel: 'var(--color-panel)',
        rule: 'var(--color-rule)',
        bind: 'var(--color-bind)',
        'bind-dim': 'var(--color-bind-dim)',
        predict: 'var(--color-predict)',
        breach: 'var(--color-breach)',
        learn: 'var(--color-learn)',
        steel: 'var(--color-steel)',
        brand: 'var(--color-brand)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Source Sans 3', 'sans-serif'],
        sans: ['var(--font-display)', 'Source Sans 3', 'sans-serif'],
        mono: ['var(--font-mono)', 'Source Code Pro', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
      },
    },
  },
  plugins: [],
};

export default config;
