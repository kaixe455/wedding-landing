/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				greatvibes: ['DancingScript', 'system-ui', 'sans-serif'],
				salsa: ['Calibri Light', 'system-ui', 'sans-serif'],

			},
			backgroundImage: {
				'main': "url('/imgs/bg.webp')"
			}
		},
	},
	plugins: [],
}
