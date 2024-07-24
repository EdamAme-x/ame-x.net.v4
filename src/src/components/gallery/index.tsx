"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { sha256 } from "js-sha256";
import { ExternalLink, GalleryVerticalIcon, StarIcon } from "lucide-react";
import { cache } from "@/lib/cache";

const reposCache = cache<Repo[]>("repos", 12 * 60 * 60 * 1000);

export function Gallery() {
	return (
		<div
			id="gallery"
			className="w-full flex flex-col justify-center items-center mt-10">
			<h2 className="text-3xl font-bold text-gradient inline-flex gap-x-1 items-center">
				<GalleryVerticalIcon width={24} height={24} />
				Gallery
			</h2>
			<Repos />
		</div>
	);
}

function Repos() {
	const [repos, setRepos] = useState<Repo[]>([]);

	useEffect(() => {
		const getRepos = async () => {
			const data = await reposFetcher();

			if (!data) {
				return [];
			}

			return data;
		};

		const data = reposCache(getRepos);

		data.then(data => {
			setRepos(data);
		});
	}, []);

	return (
		<div className="flex flex-wrap justify-center md:justify-between w-full px-5 md:px-10 gap-y-5 mt-5">
			{repos.slice(0, 12).map(repo => {
				const hash = sha256(repo.full_name);
				const head = hash.slice(0, 6);
				const tail = hash.slice(-6);

				return (
					<div
						key={repo.id}
						className="flex flex-col border border-white/[0.2] rounded-md w-[90%] md:w-[40%] lg:w-[30%] bg-black">
						<div className="w-full h-[150px] rounded-t-md bg-grid-white/[0.2] border border-white/[0.2] flex justify-center items-center">
							<div
								className={clsx(
									"absolute flex justify-center items-center w-[90px] h-[90px] border border-white/[0.2] filter backdrop-blur-md rounded-md p-1"
								)}
								style={{
									background: `linear-gradient(135deg, #${head} 0%, #${tail} 100%)`
								}}>
								<div className="w-full h-full rounded-md bg-[#000000]"></div>
							</div>
							<a
								href={repo.html_url}
								target="_blank"
								className="relative bottom-[35%] left-[35%] md:left-[40%] p-2 rounded-full border bg-border/[0.1] filter backdrop-blur-md">
								<ExternalLink width={16} height={16} />
							</a>
						</div>
						<div className="w-full h-1/2 py-3 px-4 flex flex-col justify-between">
							<div className="text-md font-semibold">
								{repo.name.length > 40
									? repo.name.substring(0, 35) + "..."
									: repo.name}
							</div>
							<div className="text-xs font-regular text-slate-500">
								{repo.description}
							</div>
							<div>
								<span className="inline-flex gap-x-1 items-center text-sm">
									<StarIcon width={16} height={16} />
									{repo.stargazers_count}
								</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

const reposFetcher = async () => {
	const response = await fetch(
		"https://api.github.com/search/repositories?q=owner:EdamAme-x&sort=start"
	);

	if (!response.ok) {
		return null;
	}

	const data = await response.json();

	return data["items"].slice(0, 12) as Repo[];
};

type Repo = {
	id: number;
	name: string;
	full_name: string;
	html_url: string;
	description: string;
	stargazers_count: number;
	topics: string[];
};
