const js = require("@eslint/js");
const globals = require("globals");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  {
    files: ["**/*.{js,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: globals.node,
    },
    ...js.configs.recommended, // 👈 Use spread to apply recommended rules directly
  },
];
