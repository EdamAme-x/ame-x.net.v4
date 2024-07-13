export const HeaderLinks = [
	{
		name: "Profile",
		path: "/"
	},
	{
		name: "Blog",
		path: "/blog"
	},
	{
		name: "Projects",
		path: "/projects"
	},
	{
		name: "Contact",
		path: "/contact",
		separator: true,
		button: "flat"
	}
] as {
	name: string;
	path: string;
	separator?: true;
	button?: "flat" | "skeleton";
}[];
