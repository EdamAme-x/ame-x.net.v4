import { Fragment } from "react";
import { FlipWords } from "../ui/flip-word";

export function Whoami() {
	return (
		<div className="text-2xl font-medium text-gray-400">
			<span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
				I&apos;m{" "}
			</span>
			<FlipWords
				words={[
					"Web Developer",
					"OSS Contributor",
					"Backend Developer"
				]}
				colors={[
					"from-cyan-400 to-cyan-600",
					"from-emerald-200 to-green-300",
					"from-red-400 to-red-600"
				]}
				containerClassName="font-bold bg-clip-text text-transparent bg-gradient-to-b"
				duration={3000}
			/>
		</div>
	);
}
