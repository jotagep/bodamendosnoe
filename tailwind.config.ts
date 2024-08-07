import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			spacing: {
				"18": "4.5rem",
			},
			fontFamily: {
				harry: ["HarryFont", "sans-serif"], // 'sans-serif' is a fallback font
				paris: ["Paris 2024", "sans-serif"],
			},
			colors: {
				"harry-potter-gold": "#d4af37", // Este es un tono dorado típico
				"harry-potter-burgundy": "#800020", // Este es un burdeos oscuro
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
}
export default config
