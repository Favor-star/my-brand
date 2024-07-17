/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blueCustom: '#2454FF',
        grayCustom: '#E5E4E2',
        blackCustom: '#212830'
      }
    }
  },
  plugins: []
};
