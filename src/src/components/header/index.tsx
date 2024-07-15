"use client";

import { Fragment } from "react";
import Image from "next/image";
import clsx from "clsx";
import IconImage from "@/assets/favicon.png";
import { SNS } from "../hero/sns";
import { Button } from "../ui/button";
import { GlassedButton } from "../ui/glassed-button";
import { Separator } from "../ui/separator";
import Link from "next/link";

export function Header() {
	return (
		<header
			className={clsx(
				"fixed top-0 z-[49]",
				"w-full h-14",
				"backdrop-blur-sm",
				"border border-white/[0.2]",
				"px-4",
				"flex justify-between items-center"
			)}>
			<Image
				src={IconImage}
				alt="icon"
				priority
				width={48}
				height={48}
				className={clsx("w-12 h-12")}
			/>
			<nav className="flex gap-8">
				<Link href="#works">
					<span
						className={clsx(
							"font-semibold text-neutral-100 text-md",
							"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
						)}>
						Profile
					</span>
				</Link>
				<Link href="/blog">
					<span
						className={clsx(
							"font-semibold text-neutral-100 text-md",
							"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
						)}>
						Blog
					</span>
				</Link>
				<Link href="/gallery">
					<span
						className={clsx(
							"font-semibold text-neutral-100 text-md",
							"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
						)}>
						Gallery
					</span>
				</Link>
			</nav>
			<div className="flex gap-4 justify-end items-center">
				<SNS size={18} />
			</div>
		</header>
	);
}
