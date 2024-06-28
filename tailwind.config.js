/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				navbar: '#1F1F1F'
			},
			fontFamily: {
				kaisei: ['Kaisei HarunoUmi', 'serif'],
				inter: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [require('rippleui')],
	rippleui: {
		removeThemes: ['dark', 'light']
	}
};
