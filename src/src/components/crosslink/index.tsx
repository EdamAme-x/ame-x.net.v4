import { sha256 } from "js-sha256";
import { CableIcon, ExternalLink, StarIcon } from "lucide-react";
import { CrossLinks } from "@/consts/crosslink";

export function CrossLink() {
	return (
		<div
			id="gallery"
			className="w-full flex flex-col justify-center items-center mt-10">
			<h2 className="text-3xl font-bold text-gradient inline-flex gap-x-1 items-center">
				<CableIcon width={24} height={24} />
				CrossLink
			</h2>
			<Links />
		</div>
	);
}

function Links() {
	return (
		<div className="flex flex-wrap justify-center md:justify-between w-full px-5 md:px-10 gap-y-5 mt-5">
			{CrossLinks.slice(0, 12).map(crossLink => {
				const hash = sha256(crossLink.url);
				const headColor = hash.slice(0, 6);
				const tailColor = hash.slice(-6);

				return (
					<div
						key={crossLink.url}
						className="flex flex-col border border-white/[0.2] rounded-md w-[90%] md:w-[40%] lg:w-[30%] bg-black">
						<div className="w-full h-[150px] rounded-t-md bg-grid-white/[0.2] border border-white/[0.2] flex justify-center items-center">
							<div
								className="absolute flex justify-center items-center w-[90px] h-[90px] border border-white/[0.2] filter backdrop-blur-md rounded-full p-1"
								style={{
									background: `linear-gradient(135deg, #${headColor} 0%, #${tailColor} 100%)`
								}}>
								<div className="w-full h-full rounded-full bg-[#000000]" />
							</div>
							<a
								href={crossLink.url}
								target="_blank"
								className="relative bottom-[35%] left-[35%] md:left-[40%] p-2 rounded-full border bg-border/[0.1] filter backdrop-blur-md">
								<ExternalLink width={16} height={16} />
							</a>
						</div>
						<div className="w-full h-1/2 py-3 px-4 flex flex-col justify-between">
							<div className="text-md font-semibold line-clamp-2">
								{crossLink.name}
							</div>
							<div className="text-xs font-regular text-slate-500 line-clamp-2">
								{crossLink.description}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
