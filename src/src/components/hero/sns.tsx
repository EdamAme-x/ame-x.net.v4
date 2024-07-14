import Image from "next/image";
import GithubVector from "@/assets/svg/github.svg";
import XVector from "@/assets/svg/x.svg";
import ZennVector from "@/assets/svg/zenn.svg";

export function SNS() {
	return (
		<>
			<a target="_blank" href="https://github.com/EdamAme-x">
				<Image src={GithubVector} alt="github" width={24} height={24} />
			</a>
			<a target="_blank" href="https://x.com/amex2189">
				<Image src={XVector} alt="x" width={24} height={24} />
			</a>
			<a target="_blank" href="https://zenn.dev/ame_x">
				<Image src={ZennVector} alt="zenn" width={24} height={24} />
			</a>
		</>
	);
}
