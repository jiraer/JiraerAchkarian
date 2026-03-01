import { Linter } from "eslint";

const config /** @type {Linter.Config} */ = {
  root: true,
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2026,
    sourceType: "module",
  },
  env: {
    node: true,
    es2026: true,
  },
  rules: {
    // backend-specific rules
  },
};

export default config;