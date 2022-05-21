const typography = require('@tailwindcss/typography');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, require('daisyui')],
	daisyui: {
		themes: ['dracula']
	}
};

module.exports = config;
