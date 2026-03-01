/** @type {import('tailwindcss').Config} */
  export default {
    darkMode: ['class'],
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
      extend: {
        colors: {
          background: '#0E0E10',
          foreground: '#F5F5F4',
          accent: '#8FAF9F',
          highlight: '#D6A75E',
          muted: '#1C1C1F'
        },
        fontFamily: {
          display: ['system-ui', 'SF Pro Display', 'sans-serif'],
          sans: ['system-ui', 'SF Pro Text', 'sans-serif']
        },
        borderRadius: {
          xl: '1.25rem'
        },
        boxShadow: {
          'soft-glass':
            '0 20px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.03)'
        },
        backgroundImage: {
          'noise-texture': "url('/noise.png')"
        }
      }
    },
    plugins: []
  };
  