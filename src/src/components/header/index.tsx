"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import IconImage from "@/assets/favicon.png";
import { HeaderLinks } from "@/consts/headerLinks";

export function Header() {
	const path = usePathname();

	return (
		<header
			className={clsx(
				"grid items-center grid-cols-4 gap-5",
				"fixed top-0 left-0 right-0 z-49",
				"h-14",
				"rounded-b-xl",
				"py-2 px-5 mx-5",
				"backdrop-blur-md"
			)}>
			<Image
				src={IconImage}
				alt=""
				className={clsx("w-12 h-12", "col-span-2")}
			/>
			<div className={clsx("flex justify-center gap-x-4")}>
				{HeaderLinks.map(link => (
					<a
						href={link.path}
						key={link.path}
						className={clsx(
							"text-sm font-medium font-raleway"
						)}>
						{link.name}
					</a>
				))}
			</div>
		</header>
	);
}
