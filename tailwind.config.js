
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme:
  
  {
    color:{
     
    },
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        'hero-back': "url('background.png')",
      },

      screen:{
        'bk':"800px",
      },

      colors:{

        thapa:{
          500:"#191c2e",
          400:"#05062F",
          300:"#05062E",
          200:"#3680e1"
        },
      },
    
    },
  },
  plugins: [],
}
