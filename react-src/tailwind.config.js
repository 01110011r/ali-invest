/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
       'min-gradient': "url('../public/min-gradient.png')",
        'med-gradient': "url('../public/med-gradient.png')",
        'max-gradient': "url('../public/max-gradient.png')",
      }
    },

    container: {
      center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
    },
    screens: {
      xs: "375px",
      sd:"500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [],
}

