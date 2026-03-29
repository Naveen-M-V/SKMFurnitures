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
        'skm-brown': '#8B4513',
        'skm-brown-dark': '#5D3A1A',
        'skm-gold': '#D4AF37',
        'skm-gold-light': '#F4E4BC',
        'skm-beige': '#F5F5DC',
        'skm-cream': '#FFFDD0',
        'skm-warm': '#F5DEB3',
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
