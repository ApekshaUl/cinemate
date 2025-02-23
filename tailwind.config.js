
 export default {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          "other" : {'min':'640px', 'max':'900px'},
        }
      },
    },
    plugins: [],
  }