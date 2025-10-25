/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        // Escose brand tokens
        brand: {
          primary: {
            300: '#64B3F4',
            500: '#276EF1',
            600: '#1F5CD2',
            700: '#184BB0',
          },
          secondary: {
            700: '#1A4E8A',
            800: '#143E6C',
            900: '#0E2F55',
          },
          accent: {
            500: '#00D4FF',
            600: '#00A3CC',
          },
          neutral: {
            0: '#FFFFFF',
            50: '#F7F9FB',
            100: '#EEF2F7',
            200: '#E2E8F0',
          },
          text: {
            primary: '#1E1E1E',
            secondary: '#334155',
            muted: '#475569',
          },
        },
        primary: '#ffffff',
        black: '#0DOC22',
        dimBlack: '#6E6d7A',
        // secondary: "#00f6ff",
        // dimWhite: "rgba(255, 255, 255, 0.7)",
        // dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #64B3F4 0%, #276EF1 100%)',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
