/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {container:{center:true},
  screens:{
    sm:'275px',
    md:'732px',
    lg:'1300px',
    xl:'1440px',
  },
    extend: {
            colors:{
              darkBlue:'rgb(11, 13, 23)',
              lightBlue:'rgb(208, 214, 249)',
              semiDark : 'rgba(0, 0, 0, 0.4)',
            },
            
      fontFamily:{
        barlow:['Barlow'],    
        barlow_Condensed:['Barlow Condensed'],
        bellefair:['Bellefair']    
      },
      backgroundImage:{
        'home-desktop':'url("/assets/home/background-home-desktop.jpg")',
        'home-tablet':'url("/assets/home/background-home-tablet.jpg")',
        'home-mobile':'url("/assets/home/background-home-mobile.jpg")',
        'destination-desktop':'url("/assets/destination/background-destination-desktop.jpg")',
        'destination-tablet':'url("/assets/destination/background-destination-tablet.jpg")',
        'destination-mobile':'url("/assets/destination/background-destination-mobile.jpg")',
        'crew-mobile':'url("/assets/crew/background-crew-mobile.jpg")',
        'crew-tablet':'url("/assets/crew/background-crew-tablet.jpg")',
        'crew-desktop':'url("/assets/crew/background-crew-desktop.jpg")',
        'technology-mobile':'url("/assets/technology/background-technology-mobile.jpg")',
        'technology-tablet':'url("/assets/technology/background-technology-tablet.jpg")',
        'technology-desktop':'url("/assets/technology/background-technology-desktop.jpg")',


      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(100px)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-out': 'fadeOut 0.8s ease-in-out',
      },
    },

    },
  }




