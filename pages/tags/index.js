import Archive from '@/layouts/archive';
import { getAllTags } from '@/lib/tags';

export async function getStaticProps() {
	const tags = await getAllTags();

	return { props: { tags } };
}

export default function Tags({ tags }) {
	const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);

	return <Archive content={sortedTags} />;
}
