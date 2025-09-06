import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

// Import custom rule
import noDataImportForSchema from "./eslint-rules/no-data-import-for-schema";

const config = [
	{
		files: ["**/*.{js,ts}"],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: "module",
				project: "./tsconfig.json",
			},
			globals: {
				node: true,
				es6: true,
			},
		},
		plugins: {
			"@typescript-eslint": typescriptEslint as any,
			custom: {
				rules: {
					"no-data-import-for-schema": noDataImportForSchema,
				},
			},
		},
		rules: {
			// TypeScript ESLint recommended rules
			...typescriptEslint.configs.recommended.rules,

			// Custom rule to warn about @data usage for schema files
			"custom/no-data-import-for-schema": "warn",
		},
		settings: {
			"import/resolver": {
				typescript: {
					alwaysTryTypes: true,
					project: "./tsconfig.json",
				},
			},
		},
	},
];

export default config;
