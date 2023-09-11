/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'sm': {'max': '639px'},
    //   'md': '768px',
    //   'lg': '992px',
    //   'xl': '1200px'
    // },
    extend: {
      backgroundImage: {
        'abouthero': "url('/public/abouthero.jpg')"
      }
    },
  },
  plugins: [],
};


