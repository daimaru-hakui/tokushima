/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        sidebarOpen: {
          // "0%": { transform: "translateX(-100%)", width: 0 },
          "100%": { transform: "translateX(0)", width: "288pxpx" },
        },
        sidebarClose: {
          "0%": { transform: "translateX(0)", width: "288pxpx" },
          "100%": { transform: "translateX(-100%)", width: "0" },
        },
      },
      animation: {
        sidebarOpen: "sidebarOpen .3s ease forwards",
        sidebarClose: "sidebarClose .3s ease forwards",
      },
    },
  },
  // corePlugins:{
  //   preflight:false
  // },
  plugins: [],
};
