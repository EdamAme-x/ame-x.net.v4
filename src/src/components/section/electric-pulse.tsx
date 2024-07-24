"use client";

import React, { Fragment } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const XtoY = {
	initial: {
		x1: "40%",
		x2: "60%",
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

const pipes = [
	{
		id: "xtoy1",
		path: "M -10 208 H 86 c 5.523 0 10 -4.477 10 -10 V 40",
		baseColor: "var(--slate-700)",
		animate: XtoY,
		duration: 2
	},
	{
		id: "xtoy2",
		path: "M -10 180 H 350 c 5.523 0 10 -4.477 10 -10 V 5",
		baseColor: "var(--slate-700)",
		animate: XtoY,
		duration: 3
	},
	{
		id: "xtoy3",
		path: "M 5 772 H 277 c 5.523 0 10 -4.477 10 -10 V 1",
		baseColor: "var(--slate-800)",
		animate: XtoY,
		duration: 1.5
	},
	{
		id: "xtoy4",
		path: "M -8 288 H 103 l 35 -30 V 0",
		baseColor: "var(--slate-700)",
		animate: XtoY,
		duration: 2.5
	},
	{
		id: "xtoy5",
		path: "M -19 371 H 103 l 35 -30 M -19 371 H 103 l 35 -30 V 258",
		electricPath: "M -19 371 H 103 l 35 -30 V 0",
		baseColor: "var(--slate-700)",
		animate: XtoY,
		duration: 2
	},
	{
		id: "xtoy5",
		path: "M 220 180 M 220 180 V 482 H 148 V 540 H -11",
		electricPath:
			"M 220 180 H 350 c 5.523 0 10 -4.477 10 -10 V 5 M 220 180 V 482 H 148 V 540 H -11",
		baseColor: "var(--slate-700)",
		animate: XtoY,
		duration: 2
	}
];

export const ElectricPulse = ({ className }: { className?: string }) => {
	return (
		<div className={clsx("absolute inset-0", className)}>
			<SVGs />
		</div>
	);
};

export const SVGs = () => {
	return (
		<svg
			height="834"
			viewBox="0 0 858 834"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="flex flex-shrink-0">
			{pipes.map(pipe => (
				<Fragment key={pipe.id}>
					<path d={pipe.path} stroke={pipe.baseColor} />

					<path
						d={pipe.electricPath || pipe.path}
						stroke={"url(#" + pipe.id + ")"}
					/>
				</Fragment>
			))}

			<defs>
				{pipes.map(pipe => (
					<motion.linearGradient
						key={pipe.id}
						variants={pipe.animate}
						animate="animate"
						initial="initial"
						transition={{
							duration: pipe.duration,
							repeat: Infinity,
							repeatType: "loop",
							ease: "linear",
							repeatDelay: 1.5,
							delay: Math.random() * 2
						}}
						id={pipe.id}>
						<GradientColors />
					</motion.linearGradient>
				))}

				<filter id="shadow">
					<feDropShadow
						dx="0"
						dy="0"
						stdDeviation="0.5"
						floodColor="#ffffff"
					/>
				</filter>

				<filter id="shadow2">
					<feDropShadow stdDeviation="0.75" floodColor="#822700" />
				</filter>
			</defs>

			<path
				transform="translate(89,175)"
				d="M0 0 0 0 12 0C14 3 14 6 12 9L2 9C0 6 0 3 2 0ZL5 0 5-2C6.3333-3 8-3 9-2L9 0 9 11C7.6667 12 6.3333 12 5 11L5 0Z"
				fill="#153347ef"
				filter="url(#shadow)"
			/>
			<path
				transform="translate(89,175)"
				d="M4 3 10 3C11 3.3333 11 3.6667 10 4L4 4C3 3.6667 3 3.3333 4 3M4 6 10 6C11 5.6667 11 5.3333 10 5L4 5C3 5.3333 3 5.6667 4 6"
				fill="#ffffff"
			/>

			<path
				transform="translate(280,175)"
				d="M0 0 0 0 12 0C14 3 14 6 12 9L2 9C0 6 0 3 2 0ZL5 0 5-2C6.3333-3 8-3 9-2L9 0 9 11C7.6667 12 6.3333 12 5 11L5 0Z"
				fill="#153347ef"
				filter="url(#shadow)"
			/>
			<path
				transform="translate(280,175)"
				d="M4 3 10 3C11 3.3333 11 3.6667 10 4L4 4C3 3.6667 3 3.3333 4 3M4 6 10 6C11 5.6667 11 5.3333 10 5L4 5C3 5.3333 3 5.6667 4 6"
				fill="#ffffff"
			/>

			<path
				transform="translate(131,175)"
				d="M0 0 0 0 12 0C14 3 14 6 12 9L2 9C0 6 0 3 2 0ZL5 0 5-2C6.3333-3 8-3 9-2L9 0 9 11C7.6667 12 6.3333 12 5 11L5 0Z"
				fill="#153347ef"
				filter="url(#shadow)"
			/>
			<path
				transform="translate(131,175)"
				d="M4 3 10 3C11 3.3333 11 3.6667 10 4L4 4C3 3.6667 3 3.3333 4 3M4 6 10 6C11 5.6667 11 5.3333 10 5L4 5C3 5.3333 3 5.6667 4 6"
				fill="#ffffff"
			/>

			{/* <path
				transform="translate(212,377)"
				d="M6 0C7 3 9 3 10 0 16 3 16 6 16 9L0 9C0 6 0 3 6 0"
				fill="#153347ef"
				filter="url(#shadow2)"
			/>
			<path
				transform="translate(225,376) rotate(90 0 0)"
				d="M4 3 9 3C10 3 10 4 9 4L4 4C3 4 3 3 4 3M4 7 9 7C10 7 10 6 9 6L4 6C3 6 3 7 4 7"
				fill="#ffffff"
			/>

			<path
				transform="translate(279,377)"
				d="M6 0C7 3 9 3 10 0 16 3 16 6 16 9L0 9C0 6 0 3 6 0"
				fill="#153347ef"
				filter="url(#shadow2)"
			/>
			<path
				transform="translate(292,376) rotate(90 0 0)"
				d="M4 3 9 3C10 3 10 4 9 4L4 4C3 4 3 3 4 3M4 7 9 7C10 7 10 6 9 6L4 6C3 6 3 7 4 7"
				fill="#ffffff"
			/> */}
		</svg>
	);
};
const GradientColors = () => {
	return (
		<>
			<stop stopColor="#822700" stopOpacity="0"></stop>
			<stop stopColor="#822700"></stop>
			<stop offset="0.325" stopColor="#9a398e"></stop>
			<stop offset="1" stopColor="#DC976F" stopOpacity="0"></stop>
		</>
	);
};
