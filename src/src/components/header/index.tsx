"use client";

import Image from "next/image";
import clsx from "clsx";
import IconImage from "@/assets/favicon.png";
import { HeaderLinks } from "@/consts/headerLinks";
import { LanternContainer } from "../ui/lantern";
import { RotateGlowingBorder } from "../ui/rotate-glowing-border";

export function Header() {
	return (
		<header
			className={clsx(
				"flex items-center gap-5",
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
			<RotateGlowingBorder containerClassName="h-10 bg-[#0C1222] mx-auto">
				<div className={clsx("flex justify-center gap-x-6 px-10")}>
					{HeaderLinks.map(link => (
						<a
							href={link.path}
							key={link.path}
							className={clsx(
								"text-sm font-medium font-raleway",
								"text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-300"
							)}>
							{link.name}
						</a>
					))}
				</div>
			</RotateGlowingBorder>
		</header>
	);
}
