import Image from "next/image";
import BackgroundImage from "@/assets/background.png";

export function Background() {
	return (
		<>
			<Image src={BackgroundImage} alt="" />
		</>
	);
}
