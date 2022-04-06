const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {

  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
 extend:{
   
 },
      screens: {
        "xs": "475px",
        ...defaultTheme.screens,
      },

   
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
