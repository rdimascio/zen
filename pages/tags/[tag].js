import { kebabCase } from '@/lib/utils';
import { getAllPosts } from '@/lib/mdx';
import Archive from '@/templates/archive';

export default function Tag({ posts }) {
	return <Archive content={posts} />;
}

export async function getServerSideProps({ params }) {
	const allPosts = await getAllPosts();
	const filteredPosts = allPosts.filter(
		(post) => post.tags.map((t) => kebabCase(t)).includes(params.tag)
	);

	return {
		props: {
			posts: filteredPosts,
			tag: params.tag,
		},
	};
}
