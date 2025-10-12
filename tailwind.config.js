/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx","./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}" ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik-Regular','sans-serif'],
         'rubik-bold': ['Rubik-Bold', 'sans-serif'],
          'rubik-extrabold': ['Rubik-ExtraBold', 'sans-serif'],
          'rubik-light': ['Rubik-Light', 'sans-serif'],
          'rubik-semibold': ['Rubik-SemiBold', 'sans-serif'],
          'rubik-medium': ['Rubik-Medium', 'sans-serif'],
      },
      colors:{
        primary: '#FF8000',
        black:{
          1: '#191D31',
          2: '#666876',
          3: '#8C8E98'
        },
        accent: {
          100: '#FBFBFD'
        },
        danger: '#F75555'
      }
    },
  },
  plugins: [],
}

