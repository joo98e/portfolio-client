import * as fs from "fs";
import * as path from "path";
import palette from "./palette";
import paletteWithRoles from "./palette-with-roles";

function writeCssVariables() {
  let cssVariables = `:root{\n`;

  for (const [colorName, shades] of Object.entries(palette)) {
    for (const [shade, hex] of Object.entries(shades)) {
      const variableName = `--colors-${colorName}-${shade}`;
      cssVariables += `  ${variableName}: ${hex};\n`;
    }
  }

  cssVariables += "\n";

  for (const [roleName, roleColor] of Object.entries(paletteWithRoles.light)) {
    cssVariables += `  ${roleName}: ${roleColor};\n`;
  }

  cssVariables += "}\n\n";

  cssVariables += "[data-theme='dark'] {\n";

  for (const [roleName, roleColor] of Object.entries(paletteWithRoles.dark)) {
    cssVariables += `  ${roleName}: ${roleColor};\n`;
  }

  cssVariables += "}";

  return cssVariables;
}

const resultCss = writeCssVariables();

try {
  const destination = path.join(__dirname, "../css/theme.css");
  fs.writeFileSync(destination, resultCss, "utf8");
} catch (e) {
  console.error({ e });
}
