
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    './views/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',],
  theme: {
    extend: {
      height: {
        '214': '214px',
        '247': '247px',
        '346': '346px',
        '374': '374px',
        '506': '506px',
        '558': '558px',
        '746': '746px',
        '845': '845px'
      },
      fontFamily: {
        "anybody": ['Anybody', 'sans-serif' ]
      }
    },
  },
  plugins: [],
}

