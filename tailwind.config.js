/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
      extend: {
        screens: {
          'xs': '480px',    
          'sm': '640px',   
          'md': '915px',   
          'lg': '1024px', 
          'xl': '1280px',  
          '2xl': '1536px',  
          'custom-lg': '1100px', 
          'custom-xl': '1440px', 
        },
      },
   
  },
  plugins: [],
}