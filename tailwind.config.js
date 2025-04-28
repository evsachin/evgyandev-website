module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      colors: {
        primary: {
          light: "#6366f1",
          DEFAULT: "#4f46e5",
          dark: "#4338ca",
        },
        secondary: {
          light: "#f97316",
          DEFAULT: "#ea580c",
          dark: "#c2410c",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
