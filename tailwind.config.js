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
        glow: "0 0 60px -12px rgba(56, 189, 248, 0.45)",
        "glow-purple": "0 0 60px -12px rgba(139, 92, 246, 0.4)",
        card: "0 4px 24px -4px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04) inset",
        "card-hover":
          "0 20px 50px -12px rgba(56, 189, 248, 0.2), 0 0 0 1px rgba(56, 189, 248, 0.15) inset",
        elevated: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.2), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(139, 92, 246, 0.14), transparent), radial-gradient(ellipse 50% 30% at 0% 80%, rgba(56, 189, 248, 0.1), transparent)",
      },
    },
  },
  plugins: [],
};
