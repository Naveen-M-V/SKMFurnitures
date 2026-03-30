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
        // Primary Brand Colors - Ultra Modern
        'skm-scarlet': '#FF1A1A',
        'skm-scarlet-dark': '#CC0000',
        'skm-scarlet-light': '#FF4D4D',
        'skm-royal': '#1E40AF',
        'skm-royal-dark': '#1E3A8A',
        'skm-royal-light': '#3B82F6',
        // Light Theme Colors
        'skm-bg': '#FFFFFF',
        'skm-bg-alt': '#F8F8F8',
        'skm-text': '#1A1A1A',
        'skm-text-muted': '#6B7280',
        'skm-border': '#E5E7EB',
        // Legacy
        'skm-white': '#FAFAFA',
        'skm-black': '#0A0A0A',
        'skm-gray': '#1F1F1F',
        'skm-silver': '#9CA3AF',
      },
      boxShadow: {
        'deep': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'glow-red': '0 0 60px rgba(255, 26, 26, 0.4)',
        'glow-blue': '0 0 60px rgba(30, 64, 175, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
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
