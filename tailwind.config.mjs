/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'black': '#000814',
				'white': '#F8F9FA',
				'gray': '#DEE2E6',

			},
			fontSize: {
				'lite': '1rem',
				'base': '1.125rem',  // * 18px
				'sm': '1.107rem',    // * 17px
				'lg': '1.5rem',      // * 24px
				'xl': '2.25rem',     // * 36px
				'3xl': '3rem',       // * 48px
				'4xl': '4rem',       // * 64px
				'5xl': '5rem',       // * 80px
			},
		},
	},
	plugins: [],
}
