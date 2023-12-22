const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#425A8B',
        'secondery': '#D5DFE4'
      },
      backgroundImage: {
        'hero': "url('https://i.ibb.co/bzJXdZB/sigmund-4-UGmm3-WRUo-Q-unsplash.jpg')"
      }
    },
  },
  plugins: [],
});