"use client";

import { useState } from "react";
import { ArrowUp, HeartIcon } from "lucide-react";

interface FireWorksMockClass {
    start: () => void;
    stop: () => void;
}

export function Footer() {
	const [isFireworking, setIsFireworking] = useState<null | FireWorksMockClass>(null);

	const firework = async () => {
		if (isFireworking) {
			isFireworking.stop();
			document
				.getElementById("fireworks-overlay")
				?.childNodes[0].remove();
			setIsFireworking(null);
			return;
		}

		const fw = new (await import("fireworks-js")).Fireworks(document.getElementById("fireworks-overlay")!);
		fw.start();
		setIsFireworking(fw);
	};

	return (
		<>
			<footer className="border-t border-white/[0.2] w-screen min-h-[100px] mt-10 flex flex-col justify-center items-center">
				<div className="text-sm inline-flex items-center font-semibold gap-x-2">
					Made with{" "}
					<HeartIcon
						onClick={firework}
						width={32}
						height={32}
						className={isFireworking ? "" : "animate-pulse"}
					/>{" "}
					by <a href="https://github.com/EdamAme-x">ame_x</a>
				</div>
				{!isFireworking && (
					<div className="text-sm flex flex-col items-center font-semibold gap-y-1 mt-2">
						<ArrowUp />
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
