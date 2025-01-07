import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        Bittersweet: '#FF6F61',
        Quartz: '#4A4A4A',
        Snow: '#FCFAFD',
        Black: '#000000',
        White: '#FFFFFF',
      },
      fontFamily: {
        Lexend: ['Lexend'],
      },
      fontSize: {
        'text-heading': ['2.1875rem', { fontWeight: '600' }], /* 35px */
        'text-titleCrad': ['1.25rem',{ fontWeight: '400' }], /* 20px */
        'text-contentCrad': ['1.125rem',{ fontWeight: '400' }], /* 20px */
        'text-sideBar': ['1.125rem',{ fontWeight: '600' }], /* 18px */
        'text-content': ['1rem',{ fontWeight: '400' }], /* 16px */
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-jun-layout'),
    nextui(),
  ],
} satisfies Config;
