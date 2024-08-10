/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#3B82F6", // Example color value for blue-500
        headerGradientStart: "#1D4ED8", // Example color value for blue-600
        headerGradientMiddle: "#1E40AF", // Example color value for blue-700
        headerGradientEnd: "#1E3A8A", // Example color value for blue-800
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      perspective: {
        1000: "1000px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".transform-style-preserve-3d": {
            "transform-style": "preserve-3d",
          },
          ".backface-hidden": {
            "backface-visibility": "hidden",
          },
          ".perspective-1000": {
            perspective: "1000px",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
