// tailwind.config.js 檔案設置
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 設定文字
      fontFamily:{
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [],
}