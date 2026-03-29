import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'skm-red': '#DC2626',
        'skm-red-dark': '#991B1B',
        'skm-red-light': '#EF4444',
        'skm-white': '#FFFFFF',
        'skm-gray': '#F3F4F6',
        'skm-cream': '#FEF2F2',
        'skm-warm': '#FEE2E2',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
