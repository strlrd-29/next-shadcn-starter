import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:tailwindcss/recommended",
  ),
  {
    rules: {
      "no-console": ["error", { allow: ["info", "warn", "error"] }],
      "tailwindcss/classnames-order": "error",
    },
    overrides: [
      {
        files: ["*.ts", "*.tsx", "*.js"],
        parser: "@typescript-eslint/parser",
      },
    ],
  },
];

export default eslintConfig;
