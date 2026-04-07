import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import perfectionist from "eslint-plugin-perfectionist";
import regexp from "eslint-plugin-regexp";
import markdown from "@eslint/markdown";

export default tseslint.config(
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
		files: ["**/*.ts", "**/*.tsx"],
		extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
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
		ignores: ["node_modules", "dist", ".github", ".changeset", "src/env.d.ts", "src/content/**/*.md"],
	},
);
