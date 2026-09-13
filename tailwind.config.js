/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#171717",
        "surface-hover": "#262626",
        border: "#27272a",
        foreground: "#fafafa",
        muted: "#a1a1aa",
        accent: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        card: "0 0 0 1px rgba(255, 255, 255, 0.1)",
        "card-hover": "0 0 0 1px rgba(255, 255, 255, 0.2), 0 8px 30px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
