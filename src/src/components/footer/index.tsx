"use client";

import { useState } from "react";
import { ArrowUp, HeartIcon } from "lucide-react";

interface FireWorksMockClass {
	start: () => void;
	stop: () => void;
}

export function Footer() {
	const [fireworksInstance, setFireworksInstance] =
		useState<null | FireWorksMockClass>(null);

	const toggleFireworks = async () => {
		if (fireworksInstance) {
			fireworksInstance.stop();
			document
				.getElementById("fireworks-overlay")
				?.childNodes[0].remove();
			setFireworksInstance(null);
			return;
		}

		const fireworks = new (await import("fireworks-js")).Fireworks(
			document.getElementById("fireworks-overlay")!
		);
		fireworks.start();
		setFireworksInstance(fireworks);
	};

	return (
		<>
			<footer className="border-t border-white/[0.2] w-screen min-h-[100px] mt-10 py-2 flex flex-col justify-center items-center">
				<div className="text-sm inline-flex items-center font-semibold gap-x-2">
					Made with{" "}
					<HeartIcon
						onClick={toggleFireworks}
						width={32}
						height={32}
						className={
							fireworksInstance
								? ""
								: "animate-pulse cursor-pointer"
						}
					/>{" "}
					by <a href="https://github.com/EdamAme-x">ame_x</a>
				</div>
				{!fireworksInstance && (
					<div className="text-sm flex flex-col items-center font-semibold gap-y-1 mt-2">
						<ArrowUp width={16} height={16} />
						<span>Click</span>
					</div>
				)}
			</footer>
			<div
				id="fireworks-overlay"
				className="fixed top-0 z-[100] w-screen h-screen pointer-events-none"></div>
		</>
	);
}
