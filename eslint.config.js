import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": [
        "error",
        { ignoreRestArgs: false },
      ],
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-require-imports": "error",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "variable", format: ["camelCase", "UPPER_CASE"] },
      ],
      "max-params": ["error", { max: 3 }],
      semi: ["error", "always"],
    },
  },
]);
