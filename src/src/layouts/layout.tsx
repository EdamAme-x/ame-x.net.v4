import { Header } from "@/components/header";

interface Props {
	children: React.ReactNode;
}

export function Layout({ children }: Props) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
