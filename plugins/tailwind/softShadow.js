const tailwindPlugin = require("../lib/createPlugin");

const softShadowPluginFn = ({ theme, addUtilities }) => {
  const softShadowUtilities = {};
  const colors = theme("colors");
  for (const color in colors) {
    if (typeof colors[color] === "object") {
      const color1 = colors[color]["200"];
      const color2 = colors[color]["700"];
      softShadowUtilities[`.soft-shadow-${color}`] = {
        "box-shadow": `0 0 3px 0 ${color1}, 0 0 20px ${color2}`,
      };
    }
  }
  addUtilities(softShadowUtilities);
};

module.exports = tailwindPlugin(softShadowPluginFn, {});
