/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		borderWidth: {
			DEFAULT: '1px',
			1: '1px',
			2: '2px',
			3: '3px',
			4: '4px',
			6: '6px',
			8: '8px'
		},
		extend: {
			fontFamily: {
				kanit: ['Kanit', 'sans-serif'],
				plus: ['"Plus Jakarta Sans"', 'sans-serif']
			},
			animation: {
				skeleton: 'skeleton-loading 1s linear infinite alternate'
			},
			keyframes: {
				'skeleton-loading': {
					'0%': {
						backgroundColor: 'hsl(200, 20%, 80%)'
					},
					'100%': {
						backgroundColor: 'hsl(200, 20%, 95%)'
					}
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms')({ strategy: 'class' }),
		require('@tailwindcss/line-clamp')
	]
};
