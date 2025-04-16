/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
      colors: {
        "gray-20": "#000000",         // Rich Black for background
        "gray-50": "#1A1A1D",         // Slightly Lighter Charcoal Gray
        "gray-100": "#2A2A2E",        // Dark Gray for sections
        "gray-500": "#33373B",        // For dividers and borders
        "primary-100": "#B3E5FC",     // Light Cyan
        "primary-300": "#4DD0E1",     // Medium Cyan
        "primary-500": "#00B4D8",     // Vibrant Cyan
        "primary-800": "#007489",
        "secondary-400": "#0077B6",   // Accent Blue
        "secondary-500": "#023E8A",   // Deep Blue
      },
      boxShadow: {
        'neon-primary': '0 0 10px rgba(59,130,246,0.8), 0 0 20px rgba(59,130,246,0.6), 0 0 30px rgba(59,130,246,0.5)',
        'neon-primary-hover': '0 0 15px rgba(59,130,246,0.9), 0 0 25px rgba(59,130,246,0.7), 0 0 35px rgba(59,130,246,0.6)',
        'neon-primary-dark': '0 0 10px rgba(96,165,250,0.8), 0 0 20px rgba(96,165,250,0.6), 0 0 30px rgba(96,165,250,0.5)',
        'neon-primary-dark-hover': '0 0 15px rgba(96,165,250,0.9), 0 0 25px rgba(96,165,250,0.7), 0 0 35px rgba(96,165,250,0.6)',
    },
      backgroundImage: (theme) => ({
        "gradient-cyan":
          "linear-gradient(90deg, #00B4D8 0%, #0077B6 100%)", // Cyan to Blue gradient
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        titleImg: "url('./assets/title/blob.png')",
        // abstractwaves: "url('./assets/AbstractWaves.png')",
        // sparkles: "url('./assets/Sparkles.png')",
        // circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [
    require('tailwindcss-neumorphism')
  ],
};


