import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FF6F61",
      },
    },
  },
  plugins: [// eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-jun-layout"),nextui()],
} satisfies Config;
