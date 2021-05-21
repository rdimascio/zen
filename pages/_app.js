import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDXComponents';

export default function App({ Component, pageProps }) {
	return (
		<MDXProvider components={MDXComponents}>
			<Component {...pageProps} />
		</MDXProvider>
	);
}
