/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eef3ff',
          100: '#dce7ff',
          200: '#c1d3ff',
          300: '#9cb6ff',
          400: '#788eff',
          500: '#5566ff',
          600: '#3366FF', // Primary
          700: '#243df9',
          800: '#1e34db',
          900: '#1d2eb1',
          950: '#161c64',
        },
        teal: {
          50: '#edfaf8',
          100: '#d3f2ed',
          200: '#ace5df',
          300: '#76cfcb',
          400: '#44b8b4',
          500: '#28a09c',
          600: '#14B8A6', // Secondary
          700: '#186764',
          800: '#165352',
          900: '#164544',
          950: '#072c2c',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e9ff',
          200: '#e9d5ff',
          300: '#d7b3ff',
          400: '#c182ff',
          500: '#a855ff',
          600: '#9333ea',
          700: '#7928CA', // Accent
          800: '#6b21a8',
          900: '#581c87',
          950: '#390f56',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
};