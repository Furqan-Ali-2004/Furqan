// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        blob: "blob 10s infinite",
      },
      backgroundImage: {
        "skills-gradient":
          "linear-gradient(38.73deg, rgba(60,179,113, 0.15) 0%, rgba(60,179,113, 0) 50%), linear-gradient(141.27deg, rgba(0,128,0, 0) 50%, rgba(0,128,0, 0.15) 100%)",
      },
    },
  },
  plugins: [],
};
