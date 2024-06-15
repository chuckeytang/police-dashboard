// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // 如果你使用的是 Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // 或者你的组件目录
    "./src/**/*.{js,ts,jsx,tsx}", // 如果你的文件在 src 目录下
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
