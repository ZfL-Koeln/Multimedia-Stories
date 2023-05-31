/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1920px',
				'4xl': '2400px'
			},
			fontFamily: {
				'roboto': ['Roboto', 'serif']
			}
		},
	},
	plugins: [],
}

