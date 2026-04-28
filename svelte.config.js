import { vitePreprocess } from '@astrojs/svelte';

export default {
	preprocess: vitePreprocess(),
	compilerOptions: {
		// runes: false
	},
	kit: {
		alias: {
			'@': './src',
			'$lib': './src/lib'
		}
	}
}
