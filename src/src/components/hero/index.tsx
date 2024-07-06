import Image from "next/image";
import clsx from "clsx";
import GithubVector from "@/assets/svg/github.svg";
import XVector from "@/assets/svg/x.svg";
import { GlassedButton } from "../ui/glassed-button";
import { HoverPreview } from "../ui/hover-preview";
import { Sparkles } from "../ui/sparkles";
import { Spotlight } from "../ui/spotlight";
import { Rocket } from "./rocket";

export function Hero() {
	return (
		<div className={clsx("pt-14")}>
			<Spotlight fill="#0FAD78" className="top-0" />
			<Sparkles
				id="tsparticlesfullpage"
				background="transparent"
				minSize={0.6}
				maxSize={1.4}
				particleDensity={100}
				className="w-full h-screen"
				particleColor="#0FAD78"
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
				<div className="w-1/2 flex flex-col justify-center items-center">
					<div className="flex flex-col">
						<h1
							className={clsx(
								"text-3xl font-bold font-raleway",
								"inline-flex flex-col"
							)}>
							<span
								className={clsx(
									"text-3xl",
									"bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
								)}>
								Welcome to
							</span>{" "}
							<span
								className={clsx(
									"text-6xl text-akin-bold",
									"text-gradient",
									"animation-hue-rotate"
								)}>
								AMEX NET.
							</span>
						</h1>
						<div className="mt-3 flex items-center gap-4 justify-between">
							<GlassedButton>
								<span>About me</span>
							</GlassedButton>
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
				<div className="w-1/2 h-screen">
					<Rocket />
				</div>
			</div>
		</div>
	);
}
