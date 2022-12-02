/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		// screens: {
		// 	sm: '540px',
		// 	// => @media (min-width: 576px) { ... }

		// 	md: '720px',
		// 	// => @media (min-width: 768px) { ... }

		// 	lg: '960px',
		// 	// => @media (min-width: 992px) { ... }

		// 	xl: '1140px',
		// 	// => @media (min-width: 1200px) { ... }

		// 	'2xl': '1320px'
		// 	// => @media (min-width: 1400px) { ... }
		// },
		// container: {
		// 	center: true,
		// 	padding: '16px'
		// },
		extend: {
			colors: {
				black: '#212b36',
				dark: '#090E34',
				'dark-700': '#090e34b3',
				primary: '#3056D3',
				secondary: '#13C296',
				'body-color': '#637381',
				warning: '#FBBF24',
				'rural-blue': '#3056d3',
				'light-grey': '#f4f4f3',
				gold: '#9c8322',
				'homey-taupe': '#ece8d3',
				'dark-grey': '#111827'
			}
		}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};
