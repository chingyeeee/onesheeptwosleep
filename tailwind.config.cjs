/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        tv: { raw: "(min-width: 1080px) and (orientation: portrait)" },
      },
      backgroundImage: {
        cloud: "url('/src/assets/images/icons/icon-cloud.svg')",
        signBlock: "url('/src/assets/images/sign/signBlock.svg')",
        reset: "url('/src/assets/images/sign/reset.svg)",
        hoverreset: "url('/src/assets/images/sign/hoverreset.svg)",
        save: "url('/src/assets/images/sign/save.svg)",
        hoversave: "url('/src/assets/images/sign/hoversave.svg)",
      },
      colors: {
        lakegreen: "#a6e2c5",
        lightgreen: "#20d371",
        lightpurple: "#ff00c9",
        red: "#ff4a03",
        yellow: "#fffa6f",
        purple: "#a9a9ff",
        darkgreen: "#004943",
        blue: "#0073f7",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(-10px)" },
        },
        loaded: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        lightening: {
          "0%": { boxShadow: "0 0 12px rgba(0, 115, 247, 0.5)" },
          "100%": {
            boxShadow: "0 0 5px rgba(0, 115, 247, 0.9),0 0 18px rgba(0, 115, 247, 0.9)",
          },
        },
        lightening2: {
          "0%": { boxShadow: "0 0 12px rgba(0, 73, 67, 0.2)" },
          "100%": {
            boxShadow: "0 0 5px rgba(0, 73, 67, 0.5),0 0 18px rgba(0, 73, 67, 0.5)",
          },
        },
        zoomIn: {
          "0%": { opacity: "0%", scale: "3" },
          "100%": { opacity: "100%", scale: "1" },
        },
        slideDown: {
          "0%": { height: "10%", opacity: 0.3 },
          "100%": { height: "80%", opacity: 1 },
        },
        slideUp: {
          "0%": { height: "80%", opacity: 1 },
          "100%": { height: "10%", opacity: 1 },
        },
        fadeSlideIn: {
          "0%": { height: "0%", opacity: 0 },
          "100%": { height: "100%", opacity: 1 },
        },
        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100% ": {
            transform: "translateX(-50%)",
          },
        },
        marqueeV: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100% ": {
            transform: "translateY(0)",
          },
        },
        expandFromLeftTop: {
          "0%": {
            transform: "scale(0)",
            "transform-origin": "top left",
            opacity: "0",
          },
          "100% ": {
            transform: "scale(1)",
            "transform-origin": "top left",
            opacity: "1",
          },
        },
        expandFromRightTop: {
          "0%": {
            transform: "scale(0)",
            "transform-origin": "top right",
            opacity: "0",
          },
          "100% ": {
            transform: "scale(1)",
            "transform-origin": "top right",
            opacity: "1",
          },
        },
        collapseLT: {
          "0%": {
            transform: "scale(1)",
            "transform-origin": "top left",
            opacity: "1",
          },
          "100% ": {
            transform: "scale(0)",
            "transform-origin": "top left",
            opacity: "0",
          },
        },
        collapseRT: {
          "0%": {
            transform: "scale(1)",
            "transform-origin": "top right",
            opacity: "1",
          },
          "100% ": {
            transform: "scale(0)",
            "transform-origin": "top right",
            opacity: "0",
          },
        },
        rotate360: {
          "0%": {
            transform: "rotateY(0deg) rotate(6deg)",
            zIndex: "1",
          },
          "100% ": {
            transform: "rotateY(180deg) rotate(6deg)",
            zIndex: "1",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        "finger-shake": "shake 0.5s linear infinite alternate",
        loaded: "loaded 3s linear alternate",
        "remind-lightening": "lightening 2s 6s linear infinite alternate",
        lightening: "lightening 0.5s linear infinite alternate",
        lightening2: "lightening2 0.6s 20s linear infinite alternate",
        zoomIn: "zoomIn 1s linear",
        slideDown: "slideDown 0.3s linear",
        slideUp: "slideUp 0.3s linear",
        marquee: "marquee 10s linear infinite",
        marqueeV: "marqueeV 10s linear infinite",
        expandLT: "expandFromLeftTop .2s ease-in-out",
        expandRT: "expandFromRightTop .2s ease-in-out",
        collapseRT: "collapseRT .2s ease-in-out forwards",
        collapseLT: "collapseLT .2s ease-in-out forwards",
        rotate360: "rotate360 1.5s linear infinite alternate",
        fadeSlideIn: "fadeSlideIn 0.8s linear",
        fadeIn: "fadeIn 1s linear alternate infinite",
      },
      transitionProperty: {
        height: "height",
      },
    },
    fontFamily: {
      adobe: ["Adobe Myungjo", "Noto Serif TC", "serif", "system-ui", "sans-serif"],
      chakra: ["Chakra Petch", "sans-serif"],
      padyakke: ["Padyakke Expanded One", "cursive"],
      nanum: ["Nanum Myeongjo", "serif"],
      courier: ["Courier Prime", "monospace"],
    },
  },
  plugins: [],
};
