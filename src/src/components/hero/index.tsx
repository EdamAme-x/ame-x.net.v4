import Image from "next/image";
import clsx from "clsx";
import GithubVector from "@/assets/svg/github.svg";
import XVector from "@/assets/svg/x.svg";
import { Wave2SVG, WaveSVG } from "../header/svg";
import { HoverBorderGradient } from "../ui/hover-gradient";
import { HoverPreview } from "../ui/hover-preview";
import { Sparkles } from "../ui/sparkles";
import { Spotlight } from "../ui/spotlight";
import { Whoami } from "./whoami";

export function Hero() {
	return (
		<div className={clsx("pt-14")}>
			<div className="absolute top-0 left-0 right-0 bottom-0 opacity-25 filter blur-xs">
				<WaveSVG />
			</div>
			<div className="absolute top-0 left-0 right-0 bottom-0 opacity-25 filter blur-xs">
				<Wave2SVG />
			</div>
			<Spotlight
				fill="#F78DA7"
				className="top-20 h-screen opacity-50 transform rotate-90"
			/>
			<Sparkles
				id="tsparticlesfullpage"
				background="transparent"
				minSize={0.9}
				maxSize={1.8}
				particleDensity={10}
				className="absolute top-0 w-full h-[1000vh]"
				particleColor="#F78DA7"
			/>
			<div
				className={clsx(
					"absolute",
					"top-0 left-1/2 right-0 bottom-0",
					"transform -translate-x-1/2",
					"z-10",
					"flex justify-center items-center",
					"w-screen h-screen"
				)}>
				<div className="w-screen flex flex-col justify-center items-center">
					<div className="flex flex-col mb-1">
						<h1
							className={clsx(
								"font-bold font-raleway",
								"inline-flex flex-col"
							)}>
							<span
								className={clsx(
									"text-4xl",
									"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
								)}>
								Welcome to
							</span>{" "}
							<span
								className={clsx(
									"text-7xl text-akin-bold",
									"text-gradient",
									"animation-hue-rotate"
								)}>
								AMEX NET.
							</span>
						</h1>
						<Whoami />
						<div className="mt-14 flex items-center gap-4 justify-between">
							<HoverBorderGradient>About me</HoverBorderGradient>
							<div className="flex gap-4 items-center pr-5">
								<HoverPreview
									className="text-white"
									url="https://github.com/EdamAme-x">
									<Image
										src={GithubVector}
										alt="github"
										width={24}
										height={24}
									/>
								</HoverPreview>
								<HoverPreview
									className="text-white"
									url="https://x.com/amex2189">
									<Image
										src={XVector}
										alt="x"
										width={24}
										height={24}
									/>
								</HoverPreview>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
