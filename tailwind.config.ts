import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        tablet: { min: '768px', max: '1023px' },
        laptop: { min: '1024px', max: '1279px' }
      },
      colors: {
        surface: '#F8FAFC',
        'surface-alt': '#F1F5F9',
        ink: '#0F172A',
        steel: '#64748B',
        deep: '#0F172A',
        secondary: '#1E293B',
        accent: '#2563EB',
        'accent-strong': '#1D4ED8',
        'accent-soft': '#DBEAFE',
        line: '#E2E8F0'
      },
      boxShadow: {
        soft: '0 16px 40px rgba(15, 23, 42, 0.08)',
        card: '0 28px 64px rgba(15, 23, 42, 0.12)',
        cta: '0 18px 38px rgba(37, 99, 235, 0.24)'
      },
      backgroundImage: {
        'mesh-soft':
          'radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.08), transparent 30%), radial-gradient(circle at 100% 12%, rgba(15, 23, 42, 0.06), transparent 28%), radial-gradient(circle at 70% 100%, rgba(30, 41, 59, 0.06), transparent 24%)',
        'section-wash':
          'linear-gradient(180deg, rgba(248, 250, 252, 1), rgba(241, 245, 249, 1))',
        'section-dark':
          'linear-gradient(180deg, rgba(15, 23, 42, 1), rgba(30, 41, 59, 1))',
        'hero-grid':
          'linear-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.08) 1px, transparent 1px)'
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
