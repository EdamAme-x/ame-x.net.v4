"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, color, LayoutGroup, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
	words,
	duration = 3000,
	colors = [],
	className,
	containerClassName
}: {
	words: string[];
	duration?: number;
	colors?: string[];
	className?: string;
	containerClassName?: string;
}) => {
	const [currentWord, setCurrentWord] = useState(words[0]);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	// thanks for the fix Julian - https://github.com/Julian-AT
	const startAnimation = useCallback(() => {
		const word = words[words.indexOf(currentWord) + 1] || words[0];
		setCurrentWord(word);
		setIsAnimating(true);
	}, [currentWord, words]);

	useEffect(() => {
		if (!isAnimating)
			setTimeout(() => {
				startAnimation();
			}, duration);
	}, [isAnimating, duration, startAnimation]);

	return (
		<AnimatePresence
			onExitComplete={() => {
				setIsAnimating(false);
			}}>
			<motion.div
				suppressHydrationWarning
				initial={{
					opacity: 0,
					y: 10
				}}
				animate={{
					opacity: 1,
					y: 0
				}}
				transition={{
					duration: 0.4,
					ease: "easeInOut",
					type: "spring",
					stiffness: 100,
					damping: 10
				}}
				exit={{
					opacity: 0,
					y: -40,
					x: 40,
					filter: "blur(8px)",
					scale: 2,
					position: "absolute"
				}}
				className={cn(
					"z-10 inline-block relative text-left",
					"px-2",
					className
				)}
				key={currentWord}>
				{currentWord.split("").map((letter, index) => (
					<motion.span
						key={currentWord + index}
						initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{
							delay: index * 0.08,
							duration: 0.4
						}}
						className={clsx(
							"inline-block",
							letter === " " && "w-1",
							colors.length > 0 &&
								colors[
									words.indexOf(currentWord) % colors.length
								],
							containerClassName
						)}>
						{letter}
					</motion.span>
				))}
			</motion.div>
		</AnimatePresence>
	);
};
