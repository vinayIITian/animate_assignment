/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs':'300px',
      's':'400px',
      'ssm':'550px',
      'sm': '640px',  
      'md': '768px',  
      'mlg': '835px',
      'lg': '1050px',  
      'xl': '1280px',
    }
  },
  plugins: [],
}