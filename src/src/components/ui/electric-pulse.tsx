"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";


const grad1 = {
	initial: {
		x1: "20%",
		x2: "40%",
		y1: "80%",
		y2: "100%"
	},
	animate: {
		x1: ["20%", "100%", "100%"],
		x2: ["0%", "90%", "90%"],
		y1: ["80%", "80%", "-20%"],
		y2: ["100%", "100%", "0%"]
	}
};

export const ElectricPulse = ({
    className
}: {
    className?: string
}) => {
	return (
		<div className={clsx("absolute inset-0", className)}>
			<SVGs />
		</div>
	);
};

export const SVGs = () => {
	return (
		<svg
			width="858"
			height="434"
			viewBox="0 0 858 434"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="flex flex-shrink-0">
			<path
				d="M -1 208 H 86 c 5.523 0 10 -4.477 10 -10 V 40"
				stroke="var(--slate-800)"
			/>

			<path
				d="M -1 208 H 86 c 5.523 0 10 -4.477 10 -10 V 40"
				stroke="url(#grad1)"
			/>

			<defs>
				<motion.linearGradient
					variants={grad1}
					animate="animate"
					initial="initial"
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						repeatDelay: 2,
						delay: Math.random() * 2
					}}
					id="grad1">
					<GradientColors />
				</motion.linearGradient>
			</defs>
		</svg>
	);
};
const GradientColors = () => {
	return (
		<>
			<stop stopColor="#822700" stopOpacity="0"></stop>
			<stop stopColor="#822700"></stop>
			<stop offset="0.325" stopColor="#9a398e"></stop>
			<stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
		</>
	);
};