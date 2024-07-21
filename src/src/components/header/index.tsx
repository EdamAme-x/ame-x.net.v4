"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
	BookAIcon,
	GalleryVerticalIcon,
	MenuIcon,
	UserRoundIcon
} from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger
} from "@/components/ui/sheet";
import IconImage from "@/assets/favicon.png";
import { SNS } from "../section/sns";

// Temporary
const blogUrl = "https://zenn.dev/ame_x";
const galleryUrl = "https://github.com/EdamAme-x?tab=repositories";

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
			<nav className="hidden sm:flex gap-8 ml-4 pl-[6px]">
				<Link href="#works">
					<span
						className={clsx(
							"font-semibold text-neutral-100 text-md",
							"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
						)}>
						Profile
					</span>
				</Link>
				<Link href={blogUrl}>
					<span
						className={clsx(
							"font-semibold text-neutral-100 text-md",
							"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
						)}>
						Blog
					</span>
				</Link>
				<Link href={galleryUrl}>
					<span
						className={clsx(
							"font-semibold text-neutral-100 text-md",
							"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
						)}>
						Gallery
					</span>
				</Link>
			</nav>
			<div className="hidden sm:flex gap-4 justify-end items-center">
				<SNS size={18} />
			</div>
			<Sheet>
				<SheetTrigger className="block sm:hidden">
					<MenuIcon />
				</SheetTrigger>
				<SheetContent className="w-[250px] sm:w-[600px]">
					<SheetHeader>
						<SheetDescription className="flex flex-col gap-4">
							<Image
								src={IconImage}
								alt="icon"
								width={32}
								height={32}
							/>
							<nav className="flex flex-col items-start gap-3">
								<Link href="#works">
									<span
										className={clsx(
											"font-semibold text-neutral-100 text-md",
											"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
											"inline-flex items-center gap-2"
										)}>
										<UserRoundIcon
											width={16}
											height={16}
											className="text-white"
										/>
										Profile
									</span>
								</Link>
								<Link href={blogUrl}>
									<span
										className={clsx(
											"font-semibold text-neutral-100 text-md",
											"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
											"inline-flex items-center gap-2"
										)}>
										<BookAIcon
											width={16}
											height={16}
											className="text-white"
										/>
										Blog
									</span>
								</Link>
								<Link href={galleryUrl}>
									<span
										className={clsx(
											"font-semibold text-neutral-100 text-md",
											"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
											"inline-flex items-center gap-2"
										)}>
										<GalleryVerticalIcon
											width={16}
											height={16}
											className="text-white"
										/>
										Gallery
									</span>
								</Link>
							</nav>
							<div className="flex gap-4 justify-end items-center">
								<SNS size={18} />
							</div>
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</header>
	);
}
