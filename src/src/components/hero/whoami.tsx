import { Fragment } from "react";
import { FlipWords } from "../ui/flip-word";

export function Whoami() {
	return (
		<div className="text-lg font-medium text-gray-400">
			I&apos;m
			<FlipWords
				words={[
					"Amex",
					"a Web Developer",
					"a OSS Contributor",
					"a Backend Developer"
				]}
				colors={[
					"from-blue-400 to-blue-600",
					"from-orange-400 to-orange-600",
					"from-green-400 to-green-600",
					"from-red-400 to-red-600"
				]}
				containerClassName="bold bg-clip-text text-transparent bg-gradient-to-b"
				duration={3000}
			/>
		</div>
	);
}
