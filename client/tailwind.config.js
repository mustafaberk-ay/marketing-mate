/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkBrown: '#5e503f',
				lightBrown: '#a9927d',
				darkBlue: '#22333b',
				white: '#f2f4f3',
			},
		},
	},
	plugins: [],
};
