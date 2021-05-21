import Archive from '@/templates/archive';
import { getAllPosts } from '@/lib/mdx';

export async function getStaticProps() {
	const posts = await getAllPosts();

	return { props: { posts } };
}

export default function Blog({ posts }) {
	return <Archive content={posts} />;
}
