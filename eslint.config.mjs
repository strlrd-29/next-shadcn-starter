import path from "node:path"
import { fileURLToPath } from "node:url"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import tsParser from "@typescript-eslint/parser"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-console": [
        "error",
        {
          allow: ["info", "warn", "error"],
        },
      ],
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js"],
    languageOptions: {
      parser: tsParser,
    },
  },
]

export default eslintConfig
