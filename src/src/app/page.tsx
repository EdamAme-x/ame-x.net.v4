import { Hero } from "@/components/hero";
import { Works } from "@/components/works";
import { Layout } from "@/layouts/layout";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Works />
		</Layout>
	);
}
