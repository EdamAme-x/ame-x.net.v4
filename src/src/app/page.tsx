import { BlogPostList } from "@/components/blog";
import { CrossLink } from "@/components/crosslink";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Works } from "@/components/works";
import { Layout } from "@/layouts/layout";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Works />
			<BlogPostList />
			<Gallery />
			<CrossLink />
		</Layout>
	);
}
