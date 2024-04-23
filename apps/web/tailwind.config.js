import plugin from 'tailwindcss/plugin';
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors:{
      "01":"#7C5DFA",
      "02":"#9277FF",
      "03":"#1E2139",
      "04":"#252945",
      "05":"#DFE3FA",
      "06":"#888EB0",
      "07":"#7E88C3",
      "08":"#0C0E16",
      "09":"#EC5757",
      "10":"#FF9797",
      "11":"#F8F8FB",
      "12":"#141625",
      "13":"#373B53",
      "14":"#494E6E",
    },
    fontFamily:{
      "spartan":['League Spartan Variable', 'sans-serif']
    },
    fontSize:{
      h1:"2.25rem", //36px
      h2:"1.5rem",  //24px  
      h3:"0.9375rem", //15px
      body:"0.8125rem",
    },
    letterSpacing:{
      lg:"-1px",
      md:"-0.75px",
      sm:"-0.25px",
      xsm:"-0.1px"
    },
    extend: {
      borderRadius:{
        n:'20px'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities,addComponents, theme }) {
      addUtilities({
        '.heading-l':{
          fontFamily:theme("fontFamily.spartan"),
          fontSize:theme("fontSize.h1"),
          lineHeight:"2.0625rem",
          letterSpacing:theme("letterSpacing.lg"),
          fontWeight: "bold",
          color:theme("colors.08")
        },
        ".heading-m":{
          fontFamily:theme("fontFamily.spartan"),
          fontSize:theme("fontSize.h2"),
          lineHeight:"1.375rem",
          letterSpacing:theme("letterSpacing.md"),
          fontWeight: "bold",
          color:theme("colors.08")
        },
        ".heading-sm":{
          fontFamily:theme("fontFamily.spartan"),
          fontSize:theme("fontSize.h3"),
          lineHeight:"1.5rem",
          letterSpacing:theme("letterSpacing.sm"),
          fontWeight: "bold",
          color:theme("colors.08")
        },
        ".heading-sm-variant":{
          fontFamily:theme("fontFamily.spartan"),
          fontSize:theme("fontSize.h3"),
          lineHeight:"0.9375rem",
          letterSpacing:theme("letterSpacing.sm"),
          fontWeight: "bold",
          color:theme("colors.08")
        },
        ".body":{
          fontFamily:theme("fontFamily.spartan"),
          fontSize:theme("fontSize.body"),
          lineHeight:"1.125rem",
          fontWeight: "normal",
          letterSpacing:theme("letterSpacing.xsm"),
          color:theme("colors.06")
        },
        ".body-variant":{
          fontFamily:theme("fontFamily.spartan"),
          fontSize:theme("fontSize.body"),
          lineHeight:"0.9375rem",
          fontWeight: "normal",
          letterSpacing:theme("letterSpacing.sm"),
        }
      })
    }),
  ]
}

