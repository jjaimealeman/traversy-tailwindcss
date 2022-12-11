import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({

	// plugins: [vue()],

	// Sunday, February 20, 2022 @ 10:05:17 PM
	// https://youtu.be/PbKWt-_oI3Q
	// an 'opt-in' compiler time macro.
	plugins: [
		vue({
			reactivityTransform: true
		}),
		Icons({ /* options */ }),
		Components({
			resolvers: [
			  IconsResolver(),
			]
		  }),
	],

	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	server: {
		host: true,
		open: false,
		port: 3000
	},
})
