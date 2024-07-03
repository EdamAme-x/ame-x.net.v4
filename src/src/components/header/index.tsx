"use client";

import Image from "next/image";
import clsx from "clsx";
import IconImage from "@/assets/favicon.png";
import { HeaderLinks } from "@/consts/headerLinks";
import { RotateGlowingBorder } from "../ui/rotate-glowing-boreder";

export function Header() {
	return (
		<header
			className={clsx(
				"grid items-center grid-cols-4 gap-5",
				"fixed top-0 left-0 right-0 z-[49]",
				"h-14",
				"rounded-b-xl",
				"py-2 px-5 mx-5",
				"backdrop-blur-md"
			)}>
			<Image
				src={IconImage}
				alt=""
				priority
				width={48}
				height={48}
				className={clsx("w-12 h-12", "col-span-2")}
			/>
			<RotateGlowingBorder containerClassName="h-10">
				<div className={clsx("flex justify-center gap-x-6 px-10")}>
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
			</RotateGlowingBorder>
		</header>
	);
}
