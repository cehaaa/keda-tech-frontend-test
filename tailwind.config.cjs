/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-section": "url('./src/assets/hero-section.jpeg')",
			},
		},
	},
	plugins: [],
};
