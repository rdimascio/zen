import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import visit from 'unist-util-visit';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';

import imgToJsx from '@/lib/img-to-jsx';
import MDXComponents from '@/components/MDXComponents';

const root = process.cwd();
const postsPath = path.join(root, 'content', 'posts');

const tokenClassNames = {
	tag: 'text-code-red',
	'attr-name': 'text-code-yellow',
	'attr-value': 'text-code-green',
	deleted: 'text-code-red',
	inserted: 'text-code-green',
	punctuation: 'text-code-white',
	keyword: 'text-code-purple',
	string: 'text-code-green',
	function: 'text-code-blue',
	boolean: 'text-code-red',
	comment: 'text-gray-400 italic',
};

export async function getPostSlugs() {
	return fs.readdirSync(postsPath);
}

export function formatSlug(slug) {
	return slug.replace(/\.(mdx|md)/, '');
}

export function dateSortDesc(a, b) {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
}

export async function getAllPosts() {
	const posts = fs.readdirSync(postsPath);

	return await Promise.all(
		posts
			.map(async (post) => {
				const source = fs.readFileSync(path.join(root, 'content', 'posts', post), 'utf8');
				const { data, content } = matter(source);

				return {
					...data,
					slug: formatSlug(post),
					content: await getPostContent(content),
					readingTime: readingTime(content),
				};
			})
			.sort((a, b) => dateSortDesc(a.date, b.date))
	);
}

export async function getPostContent(content) {
	return await renderToString(content, {
		components: MDXComponents,
		mdxOptions: {
			remarkPlugins: [
				require('remark-slug'),
				require('remark-autolink-headings'),
				require('remark-code-titles'),
				imgToJsx,
			],
			inlineNotes: true,
			rehypePlugins: [
				require('@mapbox/rehype-prism'),
				() => {
					return (tree) => {
						visit(tree, 'element', (node, index, parent) => {
							const [token, type] = node.properties.className || [];

							if (token === 'token') {
								node.properties.className = [tokenClassNames[type]];
							}
						});
					};
				},
			],
		},
	});
}

export async function getAllPostMeta() {
	return (fs.readdirSync(postsPath) || [])
		.map((file) => {
			const source = fs.readFileSync(path.join(postsPath, file), 'utf8');
			const { data } = matter(source);

			return data.draft !== true
				? { ...data, slug: formatSlug(file) }
				: null;
		})
		.filter(Boolean)
		.sort((a, b) => dateSortDesc(a.date, b.date));
}
