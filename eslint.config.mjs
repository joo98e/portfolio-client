import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  { allowInterfaces: "with-single-extends" },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...tseslint.config({
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
    },
  }),
];
