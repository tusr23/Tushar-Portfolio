/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0c0d10',
        surface: '#121316',
        'surface-card': 'rgba(255, 255, 255, 0.028)',
        'surface-hover': 'rgba(255, 255, 255, 0.05)',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'border-hover': 'rgba(255, 255, 255, 0.22)',
        'text-primary': '#f5f5f7',
        'text-secondary': '#9da3af',
        'text-muted': '#64748b',
        accent: '#6366f1',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
