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
        surface: '#f4f7fb',
        'surface-alt': '#ebf1f7',
        ink: '#0f1726',
        steel: '#465a75',
        deep: '#0b1b2f',
        accent: '#d0a04b',
        'accent-strong': '#b9842a',
        'accent-soft': '#f3e5c7',
        line: '#d6e0ea'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 23, 38, 0.08)',
        card: '0 28px 80px rgba(15, 23, 38, 0.14)',
        cta: '0 20px 48px rgba(208, 160, 75, 0.28)'
      },
      backgroundImage: {
        'mesh-soft':
          'radial-gradient(circle at 0% 0%, rgba(11, 27, 47, 0.12), transparent 34%), radial-gradient(circle at 100% 12%, rgba(208, 160, 75, 0.18), transparent 22%), radial-gradient(circle at 70% 100%, rgba(70, 90, 117, 0.12), transparent 26%)',
        'section-wash':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(236, 242, 248, 0.92))',
        'hero-grid':
          'linear-gradient(rgba(70, 90, 117, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 90, 117, 0.08) 1px, transparent 1px)'
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
