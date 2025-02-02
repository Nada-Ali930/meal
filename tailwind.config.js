/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container:{
      center:true,
      padding:'2rem'
    },
    fontFamily:{
      'Pacifico':["Pacifico"],
      'Comic':["Comic Neue"],
    }
    ,screens: {
     'sm': '640px',
     'md': '768px',
     'lg': '1024px',
     'xl': '1280px',
     '2xl': '1560px',
   },
    extend: { colors:{
      'orange-color':'#F29724',
      'back-color':'#F4F2EE',
      'green-color':'#21BA75',
      'hover-color':'#059669',
 },},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
