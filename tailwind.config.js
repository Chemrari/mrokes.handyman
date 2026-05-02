module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        "primary-dark": "#0f172a",
        accent: "#06b6d4",
        secondary: "#0d9488",
        canvas: "#f8fafc",
        "secondary-dark": "#0f766e",
        "canvas-alt": "#f1f5f9",
        warning: "#f59e0b"
      },
      boxShadow: {
        panel: "0 20px 55px rgba(30, 58, 138, 0.14)",
        lift: "0 18px 35px rgba(30, 58, 138, 0.18)"
      },
      backgroundImage: {
        grain: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
        gridline: "linear-gradient(rgba(30, 58, 138,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 58, 138,0.08) 1px, transparent 1px)"
      }
    }
  }
}
