const parser = require("@typescript-eslint/parser");
const pluginTs = require("@typescript-eslint/eslint-plugin");
const pluginPrettier = require("eslint-plugin-prettier");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  {
    files: ["src/**/*.{ts,js}"],
    languageOptions: {
      parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": pluginTs,
      prettier: pluginPrettier
    },
    rules: {
      // 🔹 Semicolon rule (core ESLint)
      semi: ["warn", "always"],

      // 🔹 Unused variables
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // 🔹 Avoid 'any'
      "@typescript-eslint/no-explicit-any": "warn",

      // 🔹 Prefer const
      "prefer-const": "warn",

      // 🔹 Quotes
      quotes: ["warn", "single", { avoidEscape: true }],

      // 🔹 Trailing commas
      "comma-dangle": ["warn", "always-multiline"],

      // 🔹 Prettier integration

      "prettier/prettier": ["error", { "endOfLine": "lf" }]
    }
  }
];
