import Link from '@/components/Link';

export default function Archive({ content }) {
	return (
		<ul>
			{content.map((item) => {
				const { slug, title } = item;

				return (
					<li key={slug}>
						<article>
							<h3>
								<Link href={`/blog/${slug}`}>
									{title}
								</Link>
							</h3>
						</article>
					</li>
				);
			})}
		</ul>
	)
}
