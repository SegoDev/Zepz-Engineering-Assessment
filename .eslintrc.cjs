module.exports = {
  env: { browser: true, es2020: true, es2022: true, "jest/globals": true },
  extends: [
    "eslint:recommended",
    "react-app/jest",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "jest"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};