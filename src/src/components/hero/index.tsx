import clsx from "clsx";
import { BriefcaseBusiness } from "lucide-react";
import { Wave2SVG, WaveSVG } from "../header/svg";
import { HoverBorderGradient } from "../ui/hover-gradient";
import { Sparkles } from "../ui/sparkles";
import { Spotlight } from "../ui/spotlight";
import { Whoami } from "./whoami";
import { Background } from "./background";

export function Hero() {
	return (
		<div className={clsx("pt-14", "h-[85vh]")}>
			<div className="absolute z-[-1] top-0 left-0 right-0 bottom-0 opacity-25 filter blur-xs sm:hidden">
				<WaveSVG />
			</div>
			<div className="absolute z-[-1] top-0 left-0 right-0 bottom-0 opacity-25 filter blur-xs sm:hidden">
				<Wave2SVG />
			</div>
			<Background className="opacity-[0.99] hidden sm:block" />
			<Spotlight
				fill="#189bed77"
				className="top-20 h-screen opacity-50 transform rotate-90"
			/>
			<Sparkles
				id="tsparticlesfullpage"
				background="transparent"
				minSize={0.9}
				maxSize={1.8}
				particleDensity={10}
				className="absolute top-0 z-[-1] w-full h-[300vh]"
				particleColor={["#F78DA7", "#189BED"]}
			/>
			<div
				className={clsx(
					"absolute",
					"top-0 left-1/2 right-0 bottom-0",
					"transform -translate-x-1/2",
					"z-[11] pointer-events-none",
					"flex justify-center items-center",
					"w-screen h-screen"
				)}>
				<div className="w-screen flex flex-col justify-center items-center">
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
									"text-5xl sm:text-7xl md:text-8xl",
									"text-gradient"
								)}>
								AMEX NET.
							</span>
						</h1>
						<Whoami />
						<a
							href="#works"
							className="mt-7 flex items-center justify-center pointer-events-auto">
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
			{/* DEV <CodePanel /> */}
		</div>
	);
}
