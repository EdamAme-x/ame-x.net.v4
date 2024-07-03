import clsx from "clsx";
import { GlassedButton } from "../ui/glassed-button";
import { Sparkles } from "../ui/sparkles";
import { Spotlight } from "../ui/spotlight";
import { Background } from "./background";

export function Hero() {
	return (
		<div className={clsx("mt-14")}>
			<Spotlight fill="#0FAD78" className="top-0" />
			<Sparkles
				id="tsparticlesfullpage"
				background="transparent"
				minSize={0.2}
				maxSize={0.6}
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
					"flex flex-col justify-center items-start"
				)}>
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
				<div>
					<GlassedButton>
						<span>About me</span>
					</GlassedButton>
				</div>
			</div>
		</div>
	);
}
