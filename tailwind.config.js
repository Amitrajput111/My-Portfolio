/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1120",
        secondary: "#111827",
        card: "#1E293B",
        accent: "#38BDF8",
        "accent-purple": "#8B5CF6",
        foreground: "#F8FAFC",
        muted: "#94A3B8",
        success: "#10B981",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 50px -12px rgba(56, 189, 248, 0.4)",
        "glow-purple": "0 0 50px -12px rgba(139, 92, 246, 0.35)",
        card: "0 4px 20px -4px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04) inset",
        "card-hover": "0 20px 45px -12px rgba(56, 189, 248, 0.2), 0 0 0 1px rgba(56, 189, 248, 0.12)",
        elevated: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "marquee-scroll": "marquee-scroll 28s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.18), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(139, 92, 246, 0.12), transparent), radial-gradient(ellipse 50% 30% at 0% 80%, rgba(56, 189, 248, 0.08), transparent)",
      },
    },
  },
  plugins: [],
};
