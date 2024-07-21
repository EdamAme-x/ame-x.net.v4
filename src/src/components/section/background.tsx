"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import BackgroundImage from "@/assets/background.png";

const image = (className: string) => (
	<Image
		src={BackgroundImage}
		alt=""
		priority
		className={clsx("w-full", className)}
		style={{
			objectFit: "cover",
			objectPosition: "center",
			backgroundSize: "cover",
			opacity: 0.75
		}}
	/>
);

export function Background(
	props: React.HTMLAttributes<HTMLElement> & {
		image?: string;
		isAnimated?: boolean;
	}
) {
	return (
		<div {...props}>
			{props.isAnimated && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}>
					{image(props.image ?? "")}
				</motion.div>
			)}
			{!props.isAnimated && image(props.image ?? "")}
		</div>
	);
}
