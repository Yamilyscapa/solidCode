import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				heading: ['DM Serif Text'],
				poppins: ['Poppins']
			}
		}
	},

	plugins: []
} satisfies Config;
