const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');
const config = require('../zen.config');
const { siteMetadata } = config;

(async function generate() {
	const feed = new RSS({
		title: siteMetadata.title,
		site_url: siteMetadata.siteUrl,
		feed_url: `${siteMetadata.siteUrl}/feed.xml`,
	});

	const posts = await fs.readdir(path.join(__dirname, '..', 'content', 'posts'));

	await Promise.all(
		posts.map(async (name) => {
			const content = await fs.readFile(
				path.join(__dirname, '..', 'content', 'posts', name)
			);
			const frontmatter = matter(content);

			feed.item({
				title: frontmatter.data.title,
				url: `${siteMetadata.siteUrl}/blog` + name.replace(/\.mdx?/, ''),
				date: frontmatter.data.publishedAt,
				description: frontmatter.data.summary
			});
		})
	);

	await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
})();
