import Image from "next/image";
import clsx from "clsx";
import { BriefcaseBusiness } from "lucide-react";
import BgImage from "@/assets/background.jpg";
import CliffImage from "@/assets/cliff.png";
import TreeImage from "@/assets/trees.webp";
import { ElectricPulse } from "../section/electric-pulse";
import { HoverBorderGradient } from "../ui/hover-gradient";
import { Sparkles } from "../ui/sparkles";
import { Spotlight } from "../ui/spotlight";
import { Whoami } from "./whoami";

export function Hero() {
	return (
		<div className={clsx("pt-14", "h-[85vh]", "user-select-none")}>
			<Image
				src={BgImage}
				height={484}
				priority
				className="absolute z-[0] top-0 left-0 w-full hidden md:block"
				alt="lake"
			/>
			<Image
				src={TreeImage}
				height={484}
				className="absolute z-[0] top-0 left-0 w-full hidden md:block"
				alt="tree"
			/>
			<Image
				src={CliffImage}
				height={726}
				priority
				className="absolute z-[3] top-0 right-0 hidden md:block"
				alt="cliff"
			/>
			<ElectricPulse className="absolute z-[-1] top-0 inset-0 md:hidden" />
			<Spotlight fill="#852A01" className="top-0 h-screen" />
			<Sparkles
				id="tsparticlesfullpage"
				background="transparent"
				minSize={0.9}
				maxSize={1.8}
				particleDensity={10}
				className="absolute top-0 z-[-1] w-full h-[600vh]"
				particleColor={["#F78DA7", "#189BED"]}
			/>
			<div
				className={clsx(
					"absolute",
					"top-0 left-1/2 right-0 bottom-0 md:left-1/4",
					"transform -translate-x-1/2 md:-translate-x-1/4",
					"z-[11] pointer-events-none",
					"flex justify-center items-center",
					"w-screen h-screen sm:w-1/2"
				)}>
				<div className="w-full flex flex-col justify-center items-center">
					<div className="flex flex-col mb-1">
						<h1
							className={clsx(
								"font-bold",
								"inline-flex flex-col"
							)}>
							<span
								className={clsx(
									"text-xl sm:text-3xl md:text-4xl",
									"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
								)}>
								Welcome to
							</span>{" "}
							<span
								className={clsx(
									"text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
									"text-gradient"
								)}>
								AMEX NET
							</span>
						</h1>
						<Whoami />
						<div className="mt-7 flex items-center justify-center pointer-events-auto">
							<a href="#works">
								<HoverBorderGradient className="px-7 inline-flex items-center gap-2">
									<BriefcaseBusiness width={16} height={16} />{" "}
									<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-100">
										View my works
									</span>
								</HoverBorderGradient>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
