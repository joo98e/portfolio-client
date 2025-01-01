import colors from "./palette";

function writeCssVariables(palette: Record<string, Record<string, string>>) {
  let cssVariables = `:root{\n`;

  for (const [colorName, shades] of Object.entries(colors)) {
    for (const [shade, hex] of Object.entries(shades)) {
      const variableName = `--colors-${colorName}-${shade}`;
      cssVariables += `  ${variableName}: ${hex};\n`;
    }
  }

  cssVariables += "}";

  return cssVariables;
}

const resultCss = writeCssVariables(colors);

console.log({ resultCss });