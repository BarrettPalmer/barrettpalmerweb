import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#f2f4f8',
        surface: '#ffffff',
        accent: '#111827'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        soft: '0 24px 60px rgba(15, 23, 42, 0.08)'
      },
      borderRadius: {
        pill: '9999px'
      }
    }
  },
  plugins: []
} satisfies Config
