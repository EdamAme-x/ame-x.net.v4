"use client";

import { Fragment } from "react";
import Image from "next/image";
import clsx from "clsx";
import IconImage from "@/assets/favicon.png";
import { HeaderLinks } from "@/consts/headerLinks";
import { Button } from "../ui/button";
import { GlassedButton } from "../ui/glassed-button";
import { Separator } from "../ui/separator";

export function Header() {
	return (
		<header
			className={clsx(
				"flex items-center gap-5",
				"fixed top-0 z-[49]",
				"h-14 w-screen",
				"rounded-b-xl",
				"py-3 px-5 mx-5",
				"backdrop-blur-sm"
			)}>
			<Image
				src={IconImage}
				alt=""
				priority
				width={48}
				height={48}
				className={clsx("w-12 h-12")}
			/>
			<div className="mx-auto">
				<div
					className={clsx(
						"rounded-md",
						"flex justify-center items-center gap-x-6",
						"px-2 py-1",
						"shadow-sm",
						"h-10"
					)}
					aria-label="TopNavigation">
					{HeaderLinks.map(link => (
						<Fragment key={link.path}>
							{link.separator && (
								<Separator orientation="vertical" />
							)}
							{link.button ? (
								link.button === "flat" ? (
									<a href={link.path}>
										<GlassedButton>
											<span>{link.name}</span>
										</GlassedButton>
									</a>
								) : (
									<a href={link.path}>
										<Button variant="ghost">
											{link.name}
										</Button>
									</a>
								)
							) : (
								<a
									href={link.path}
									className={clsx(
										"text-md font-semibold font-raleway text-[#A8A8A8]",
										"bg-transparent",
										"rounded-md",
										"hover:bg-neutral-300/10 hover:text-white",
										"px-4 py-2",
										"transition-all duration-150"
									)}>
									{link.name}
								</a>
							)}
						</Fragment>
					))}
				</div>
			</div>
		</header>
	);
}
