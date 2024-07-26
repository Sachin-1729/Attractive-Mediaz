/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('/src/Components/Images/background_image2.png')",
        'custom-image2': "url('/src/Components/Images/backgroundimage3.png')",
        'custom-image3': "url('/src/Components/Images/Rectangle 12.png')",
        'custom-image4': "url('/src/Components/Images/backgroundimage.png')",

      }),
    },
  },
  plugins: [],
}
