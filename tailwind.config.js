module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      robotoSans: ['Roboto', "sans-serif"]
    },
    extend: {
      backgroundImage: {
        "leftBar1": "url('/public/assets/img/icon_img.png')",
        "iconImg2": "url('/public/assets/img/icon_img2.png')",
        "iconImg3": "url('/public/assets/img/icon_img3.png')",
        "iconImg4": "url('/public/assets/img/icon_img4.png')",
        "iconImg5": "url('/public/assets/img/icon_img5.png')",
        "iconImg6": "url('/public/assets/img/icon_img6.png')",
        "iconImg7": "url('/public/assets/img/icon_img7.png')",
        "iconImg8": "url('/public/assets/img/icon_img8.png')",
        "iconImg9": "url('/public/assets/img/icon_img9.png')",
        "iconImg10": "url('/public/assets/img/icon_img10.png')",
      },
      boxShadow: {
        sidebarShadow: "0 0 0 1px rgba(0, 0, 0, .1)",
      },
      maxHeight: {
        "dataTable": "calc(100vh - 200px)",
      },
    },
  },
  plugins: [],
}

