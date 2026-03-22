import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#f7f9fc',
        ink: '#111827',
        steel: '#2d3e57',
        deep: '#0f2744',
        accent: '#1c4f84',
        line: '#dde5f0'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(17, 24, 39, 0.08)',
        card: '0 14px 32px rgba(15, 39, 68, 0.1)'
      },
      backgroundImage: {
        'mesh-soft':
          'radial-gradient(circle at 10% 0%, rgba(28, 79, 132, 0.12), transparent 42%), radial-gradient(circle at 90% 100%, rgba(15, 39, 68, 0.16), transparent 40%)'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
};

export default config;
