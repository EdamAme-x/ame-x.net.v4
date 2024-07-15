"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
	className,
	children
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	const [mouseEnter, setMouseEnter] = useState(false);

	return (
		<div
			onMouseEnter={() => {
				setMouseEnter(true);
			}}
			onMouseLeave={() => {
				setMouseEnter(false);
			}}
			className={cn(
				"px-4 max-w-md max-h-[20rem] h-full w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600",
				className
			)}>
			<div className="flex justify-center items-center">
				<Illustration mouseEnter={mouseEnter} />
				<div>{children}</div>
			</div>
		</div>
	);
};

export const GlowingStarsDescription = ({
	className,
	children
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<p className={cn("text-base text-white max-w-[16rem]", className)}>
			{children}
		</p>
	);
};

export const GlowingStarsTitle = ({
	className,
	children
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<h2 className={cn("font-bold text-2xl text-[#eaeaea]", className)}>
			{children}
		</h2>
	);
};

const createWave = () => {
	let currentFrame = [
		1, 20, 39, 58, 77, 96, 78, 61, 44, 27, 10, 29, 48, 67, 86, 105, 89, 72
	];

	const next = () => {
		const nextFrame = currentFrame.map(i => {
			const baseIndex = Math.floor(i / 18) * 18;
			return baseIndex + (((i % 18) + 1) % 18);
		});
		currentFrame = nextFrame;
		return nextFrame;
	};

	return next;
};

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
	const stars = 108;
	const columns = 18;

	const [glowingStars, setGlowingStars] = useState<number[]>([]);

	const highlightedStars = useRef<number[]>([]);

	useEffect(() => {
		const wave = createWave();
		const interval = setInterval(() => {
			highlightedStars.current = wave();
			setGlowingStars([...highlightedStars.current]);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="h-48 p-1 w-full"
			style={{
				display: "grid",
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: `1px`
			}}>
			{[...Array(stars)].map((_, starIdx) => {
				const isGlowing = glowingStars.includes(starIdx);
				const delay = (starIdx % 10) * 0.1 * (starIdx / 10);
				const staticDelay = starIdx * 0.01;
				return (
					<div
						key={`matrix-col-${starIdx}}`}
						className="relative flex items-center justify-center">
						<Star
							isGlowing={mouseEnter ? true : isGlowing}
							delay={mouseEnter ? staticDelay : delay}
						/>
						{mouseEnter && <Glow delay={staticDelay} />}
						<AnimatePresence mode="wait">
							{isGlowing && <Glow delay={delay} />}
						</AnimatePresence>
					</div>
				);
			})}
		</div>
	);
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
	return (
		<motion.div
			key={delay}
			initial={{
				scale: 1
			}}
			animate={{
				scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
				background: isGlowing ? "#fff" : "#666"
			}}
			transition={{
				duration: 2,
				ease: "easeInOut",
				delay: delay
			}}
			className={cn(
				"bg-[#666] h-[1px] w-[1px] rounded-full relative z-20"
			)}></motion.div>
	);
};

const Glow = ({ delay }: { delay: number }) => {
	return (
		<motion.div
			initial={{
				opacity: 0
			}}
			animate={{
				opacity: 1
			}}
			transition={{
				duration: 2,
				ease: "easeInOut",
				delay: delay
			}}
			exit={{
				opacity: 0
			}}
			className="absolute  left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-emerald-600 blur-[1px] shadow-2xl shadow-emerald-400"
		/>
	);
};
