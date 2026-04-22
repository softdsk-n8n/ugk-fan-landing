import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        gold: '#FFD700',
        crimson: '#9E0000',
        drank: '#6B0F9F',
        parchment: '#F5EDDE',
        woodgrain: '#7A5A2E',
        'ink-2': '#0A0A0A',
      },
      fontFamily: {
        display: ['"Rubik Mono One"', '"Bebas Neue"', 'sans-serif'],
        heading: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        brutal: '-0.02em',
        wide: '0.08em',
        wider: '0.15em',
      },
      fontSize: {
        'mega': 'clamp(4rem, 18vw, 18rem)',
        'huge': 'clamp(3rem, 10vw, 9rem)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'glitch': 'glitch 2.5s steps(2, end) infinite',
        'noise': 'noise 0.3s steps(4) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0, 0)', filter: 'none' },
          '92%': { transform: 'translate(-2px, 1px)', filter: 'hue-rotate(15deg)' },
          '94%': { transform: 'translate(2px, -1px)', filter: 'hue-rotate(-15deg)' },
          '96%': { transform: 'translate(-1px, 2px)', filter: 'none' },
        },
        noise: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-2%, 1%)' },
          '50%': { transform: 'translate(1%, -2%)' },
          '75%': { transform: 'translate(2%, 2%)' },
        },
      },
    },
  },
} satisfies Config;
