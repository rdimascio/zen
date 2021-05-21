/**
 * Path for blog posts
 */

/**
 * External dependencies
 */
import { useRouter } from 'next/router';
import hydrate from 'next-mdx-remote/hydrate';

/**
 * Internal dependencies
 */
import { getAllPosts, getAllPostMeta, dateSortDesc, formatSlug } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';
import SinglePost from '@/templates/single-post';

export default function Blog({ post }) {
	const { content } = post;
	const router = useRouter();
	const source = hydrate(content, {
		components: MDXComponents,
	});

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<SinglePost>
			{ source }
		</SinglePost>
	);
}


export async function getStaticPaths() {
	const posts = await getAllPostMeta();
	const paths = posts
		.sort((a, b) => dateSortDesc(a.date, b.date))
		.slice(0, 12);

	return {
		paths: paths.map((post) => ({
			params: {
				slug: formatSlug(post.slug),
			},
		})),
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const posts = await getAllPosts();
	const { content, ...meta } = posts.find((post) => post.slug === params.slug);

	return {
		props: {
			post: {
				content,
				meta,
			}
		},
		revalidate: 1,
	};
}
