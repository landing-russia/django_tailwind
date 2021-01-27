const colors = require('tailwindcss/colors')

module.exports = {
	purge: {
		mode: 'layers',
		content: [
			'./public/**/*.html',
			'../**/templates/*.html',
            '../**/templates/**/*.html'
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				amber: colors.amber
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
