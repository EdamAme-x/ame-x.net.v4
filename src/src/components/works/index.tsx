"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Items } from "./items";

export function Works() {
	return (
		<div
			id="works"
			className="w-screen flex flex-col justify-center items-center dark">
			<AboutMe />
		</div>
	);
}

export function AboutMe() {
	return (
		<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] use-transform relative z-[20]">
			{Items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={cn("[&>p:text-lg]", item.className)}
					icon={item.icon}
					raw={item.raw}
				/>
			))}
		</BentoGrid>
	);
}
