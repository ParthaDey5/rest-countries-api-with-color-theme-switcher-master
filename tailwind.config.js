content: ["./src/**/*.{js,jsx,ts,tsx,html}"],

module.exports = {
    
  darkMode: 'class', // <— this activates dark: utility support      

    safelist: [
      'text-fluid-h1',
      'text-fluid-h2',
      'text-fluid-h3',
      'text-fluid-body',
      'text-fluid-btn',
      'text-fluid-small',
      
    ],
    theme: {
      extend: {
        transitionProperty: {
          colors: 'background-color, border-color, color, fill, stroke',
        },
        opacity: {
            65: '0.65',
          },  
      },
      
    },
  };
    