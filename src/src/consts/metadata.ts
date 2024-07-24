import type { Metadata } from "next";

const url = "https://ame-x.net";
const icon = "favicon.png";
const siteName = "Amex Net";
const description = `Who am I? I'm a Web Developer, FullStack Developer & OSS Developer, or @amex2189. I have experience in building web applications & useful tool XD`;

export const MetaData: Metadata = {
	metadataBase: new URL(url),
	title: `${siteName}`,
	description,
	openGraph: {
		title: siteName,
		description,
		url,
		siteName,
		locale: "ja_JP",
		type: "website",
		images: icon
	},
	icons: icon,
	verification: {
		google: ""
	},
	publisher: `@EdamAme-x`,
	robots: "index, follow",
	creator: `@EdamAme-x`,
	keywords: ["amex2189", "ame_x"],
	generator: `My Hand LoL XD`
};
