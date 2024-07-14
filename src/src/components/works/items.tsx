;
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ExternalLink, GitPullRequestCreateArrowIcon, HammerIcon } from "lucide-react";
import DenoLogo from "@/assets/svg/deno.svg";
import GoLogo from "@/assets/svg/go.svg";
import HonoLogo from "@/assets/svg/hono.svg";
import MisskeyLogo from "@/assets/svg/misskey.svg";
import TypeScriptLogo from "@/assets/svg/typescript.svg";


const MyContributions = () => {
	const variants = {
		initial: {
			x: 10,
            rotate: 5
		},
		animate: {
			x: 0,
			rotate: 0,
			transition: {
				duration: 0.2
			}
		}
	};
	const variantsSecond = {
		initial: {
			x: -10,
            rotate: -5
		},
		animate: {
			x: 0,
			rotate: 0,
			transition: {
				duration: 0.2
			}
		}
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
			<motion.div
				variants={variants}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] py-2 px-3 items-center space-x-2 bg-white dark:bg-black">
                <Image
					src={HonoLogo}
					alt="logo"
					height="100"
					width="100"
					className="h-6 w-6 flex-shrink-0 transform scale-[1.1]"
				/>
				<div className="w-full h-4 inline-flex items-center justify-between">
                    <span className="font-semibold text-neutral-100 text-sm pt-.5">Hono.js</span>
                    <a href="https://hono.dev/" target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2 text-neutral-400" />
                    </a>
                </div>
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] py-2 px-3 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
				 <Image
					src={MisskeyLogo}
					alt="logo"
					height="100"
					width="100"
					className="h-6 w-6 flex-shrink-0 transform scale-[1.1]"
				/>
				<div className="w-full h-4 inline-flex items-center justify-between">
                    <span className="font-semibold text-neutral-100 text-sm pt-.5">Misskey</span>
                    <a href="https://misskey-hub.net/" target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2 text-neutral-400" />
                    </a>
                </div>
			</motion.div>
			<motion.div
				variants={variants}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] py-2 px-3 items-center space-x-2 bg-white dark:bg-black">
				<Image
					src={DenoLogo}
					alt="logo"
					height="100"
					width="100"
					className="h-6 w-6 flex-shrink-0 transform scale-[1.1]"
				/>
				<div className="w-full h-4 inline-flex items-center justify-between">
                    <span className="font-semibold text-neutral-100 text-sm pt-.5">My projects</span>
                     <a href="https://github.com/EdamAme-x?tab=repositories" target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2 text-neutral-400" />
                    </a>
                </div>
			</motion.div>
		</motion.div>
	);
};
const SkeletonTwo = () => {
	const variants = {
		initial: {
			width: 0
		},
		animate: {
			width: "100%",
			transition: {
				duration: 0.2
			}
		},
		hover: {
			width: ["0%", "100%"],
			transition: {
				duration: 2
			}
		}
	};
	const arr = new Array(6).fill(0);
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
			{arr.map((_, i) => (
				<motion.div
					key={"skelenton-two" + i}
					variants={variants}
					style={{
						maxWidth: Math.random() * (100 - 40) + 40 + "%"
					}}
					className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"></motion.div>
			))}
		</motion.div>
	);
};
const SkeletonThree = () => {
	const variants = {
		initial: {
			backgroundPosition: "0 50%"
		},
		animate: {
			backgroundPosition: ["0, 50%", "100% 50%", "0 50%"]
		}
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={variants}
			transition={{
				duration: 5,
				repeat: Infinity,
				repeatType: "reverse"
			}}
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
			style={{
				background:
					"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
				backgroundSize: "400% 400%"
			}}>
			<motion.div className="h-full w-full rounded-lg"></motion.div>
		</motion.div>
	);
};
const MyTechs = () => {
	const first = {
		initial: {
            y: 5,
            x: 20,
            rotate: -20
		},
		hover: {
            y: 0,
            x: 0,
            rotate: 0
		}
	};
	const second = {
		initial: {
			y: 5,
            x: -20,
            rotate: 20
		},
		hover: {
			y: 0,
            x: 0,
            rotate: 0
		}
	};

	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="relative z-[0] flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2">
			<motion.div
                variants={first}
				className={clsx(
					"h-full text-neutral-500 hover:text-neutral-100 transition-all duration-300 relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black",
					"dark:border-cyan-500/25 border flex flex-col items-center justify-center"
				)}>
				<Image
					src={GoLogo}
					alt="lang"
					height="100"
					width="100"
					className="h-10 w-10 transform scale-[1.1]"
				/>
				<p className="sm:text-sm text-xs text-center font-semibold text-[inherit] mt-4">
					Golang
				</p>
				<p className="border border-yellow-500 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 text-xs rounded-full px-2 py-0.5 mt-4">
					Middle
				</p>
			</motion.div>
			<motion.div
				className={clsx(
					"h-full text-neutral-500 hover:text-neutral-100 transition-all duration-300 relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black",
					"dark:border-cyan-500/25 border flex flex-col items-center justify-center"
				)}>
				<Image
					src={TypeScriptLogo}
					alt="lang"
					height="100"
					width="100"
					className="h-10 w-10 transform scale-[1.1]"
				/>
				<p className="sm:text-sm text-xs text-center font-semibold text-[inherit] mt-4">
					TypeScript
				</p>
				<p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
					Professional
				</p>
			</motion.div>
			<motion.div
            variants={second}
				className={clsx(
					"h-full text-neutral-500 hover:text-neutral-100 transition-all duration-300 relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black",
					"dark:border-cyan-500/25 border flex flex-col items-center justify-center"
				)}>
				<Image
					src={DenoLogo}
					alt="lang"
					height="100"
					width="100"
					className="h-10 w-10 transform scale-[1.1]"
				/>
				<p className="sm:text-sm text-xs text-center font-semibold text-[inherit] mt-4">
					Deno
				</p>
				<p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
					Expert
				</p>
			</motion.div>
		</motion.div>
	);
};
const SkeletonFive = () => {
	const variants = {
		initial: {
			x: 0
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2
			}
		}
	};
	const variantsSecond = {
		initial: {
			x: 0
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2
			}
		}
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
			<motion.div
				variants={variants}
				className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black">
				<img
					src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
					alt="avatar"
					height="100"
					width="100"
					className="rounded-full h-10 w-10"
				/>
				<p className="text-xs text-neutral-500">
					There are a lot of cool framerworks out there like React,
					Angular, Vue, Svelte that can make your life ....
				</p>
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
				<p className="text-xs text-neutral-500">Use PHP.</p>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
			</motion.div>
		</motion.div>
	);
};

export const Items = [
	{
		title: "Technology I use",
		description: (
			<span className="text-sm">
				I have a wide range of skills! I can even clean the bathtub!
				Thanks, it&apos;s joke.
			</span>
		),
		header: <MyTechs />,
		className: "md:col-span-2",
		icon: <HammerIcon width={18} height={18} />
	},
	{
		title: "My Contributions",
		description: (
			<span className="text-sm">
				Experience of my contributions to the open source community.
			</span>
		),
		header: <MyContributions />,
		className: "md:col-span-1",
		icon: <GitPullRequestCreateArrowIcon width={18} height={18} />
	},
	{
		title: "Automated Proofreading",
		description: (
			<span className="text-sm">
				Let AI handle the proofreading of your documents.
			</span>
		),
		header: <SkeletonTwo />,
		className: "md:col-span-1",
		icon: <></>
	},
	{
		title: "Contextual Suggestions",
		description: (
			<span className="text-sm">
				Get AI-powered suggestions based on your writing context.
			</span>
		),
		header: <SkeletonThree />,
		className: "md:col-span-1",
		icon: <></>
	},
	{
		title: "Text Summarization",
		description: (
			<span className="text-sm">
				Summarize your lengthy documents with AI technology.
			</span>
		),
		header: <SkeletonFive />,
		className: "md:col-span-1",
		icon: <></>
	}
];