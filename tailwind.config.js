/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:true,
  theme: {
   
    extend: { 
      fontFamily: {
      grace: ['Covered By Your Grace']
    
    },
    colors: {
      'green': '#2DA950',
      'ques':'#D7D7D7',
    },
  },
  },
  plugins: [],
}