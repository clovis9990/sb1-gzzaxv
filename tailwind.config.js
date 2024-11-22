/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f4e8',
          100: '#f0e4c4',
          200: '#e8d4a0',
          300: '#e0c47c',
          400: '#d8b458',
          500: '#d0a434',
          600: '#c89410',
          700: '#b08400',
          800: '#987400',
          900: '#806400',
        },
        secondary: {
          50: '#e6f0f0',
          100: '#cce1e1',
          200: '#b3d2d2',
          300: '#99c3c3',
          400: '#80b4b4',
          500: '#66a5a5',
          600: '#4d9696',
          700: '#338787',
          800: '#1a7878',
          900: '#006969',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            h2: {
              fontFamily: theme('fontFamily.display'),
              fontWeight: '600',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              fontFamily: theme('fontFamily.display'),
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}