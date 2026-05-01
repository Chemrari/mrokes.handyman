module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        midnight: "#13212b",
        asphalt: "#1f303d",
        workred: "#be4b2f",
        brass: "#d7a14a",
        canvas: "#f4efe6",
        pine: "#5e6f57",
        mist: "#dde4df"
      },
      boxShadow: {
        panel: "0 20px 55px rgba(19, 33, 43, 0.14)",
        lift: "0 18px 35px rgba(19, 33, 43, 0.18)"
      },
      backgroundImage: {
        grain: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
        gridline: "linear-gradient(rgba(19,33,43,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(19,33,43,0.08) 1px, transparent 1px)"
      }
    }
  }
}
