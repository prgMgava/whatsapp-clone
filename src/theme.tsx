import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		white: {
			200: '#f6f6f6',
			300: '#EEE',  
			350: '#EDEDED',
			400: '#d2dbdc',
			500: '#DDD',
		},
		black: {
			100: '#919191'
		}
	},
	fonts: {
		body: `'Segoe UI', Helvetica Neue, Helvetica,Lucida Grande sans-serif`
	}
})