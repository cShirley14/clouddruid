import eslint from "@eslint/js";
import markdown from "@eslint/markdown";
import astro from "eslint-plugin-astro";
import perfectionist from "eslint-plugin-perfectionist";
import regexp from "eslint-plugin-regexp";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

// defineConfig() is required for the `extends` key used below (ESLint 10 flat config)
export default defineConfig([
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs.recommended,
	perfectionist.configs["recommended-natural"],
	regexp.configs["flat/recommended"],
	{
		files: ["**/*.astro"],
		rules: {
			"astro/jsx-a11y/no-redundant-roles": "error",
		},
	},
	{
		extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		files: ["**/*.md"],
		plugins: { markdown },
		processor: "markdown/markdown",
	},
	{
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ ignoreRestSiblings: true, varsIgnorePattern: "Props" },
			],
			"@typescript-eslint/no-var-requires": "warn",
		},
	},
	{
		ignores: [
			"node_modules",
			"dist",
			".astro",
			".github",
			".changeset",
			"src/env.d.ts",
			"src/content/**/*.md",
		],
	},
]);
