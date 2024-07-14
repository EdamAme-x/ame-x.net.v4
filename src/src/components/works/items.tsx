import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import { AudioLinesIcon, AwardIcon, ExternalLink, FolderIcon, GitPullRequestCreateArrowIcon, HammerIcon, MessageCircleQuestionIcon, PanelsTopLeftIcon, RouterIcon, UserPlusIcon, UsersIcon } from "lucide-react";
import FaviconPng from "@/assets/favicon.png";
import DenoLogo from "@/assets/svg/deno.svg";
import GoLogo from "@/assets/svg/go.svg";
import HonoLogo from "@/assets/svg/hono.svg";
import MisskeyLogo from "@/assets/svg/misskey.svg";
import TypeScriptLogo from "@/assets/svg/typescript.svg";
import { SNS } from "../hero/sns";
import { GlowingStarsBackgroundCard } from "../ui/glowing-star-bg";


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
const MyAchievement = () => {
    const first = {
        initial: {
            rotate: -5
        },
        hover: {
            rotate: 0
        }
    }

    const second = {
        initial: {
            rotate: 5
        },
        hover: {
            rotate: 0
        }
    }

	return (
		<motion.div
            initial="initial"
			whileHover="hover"
			className="flex flex-col w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 px-3">
            <motion.div variants={first} className="bg-black border border-neutral-100/25 h-auto w-full rounded-lg flex flex-col gap-2 p-2">
                <div className="flex justify-between">
                    <span className="font-semibold text-neutral-100 text-xs inline-flex gap-x-2"><UsersIcon className="h-4 w-4 text-emerald-500" /> Users of my service</span>
                    <div className="flex gap-x-1">
                        <HammerIcon width={12} height={12} className="text-white" />
                        <PanelsTopLeftIcon width={12} height={12} className="text-white" />
                        <RouterIcon width={12} height={12} className="text-white" />
                    </div>
                </div>
                <div className="border border-neutral-100/25 h-full w-full rounded-md flex p-3">
                    <span className="font-semibold text-neutral-100 text-md">5000+</span>
                </div>
            </motion.div>
             <motion.div variants={second} className="bg-black border border-neutral-100/25 h-auto w-full rounded-lg flex flex-col gap-2 p-2">
                <div className="flex justify-between">
                    <span className="font-semibold text-neutral-100 text-xs inline-flex gap-x-2"><UserPlusIcon className="h-4 w-4 text-cyan-500" /> My followers</span>
                <div className="flex gap-x-1">
                    <SNS size={12} />
                </div>
                </div>
                <div className="border border-neutral-100/25 h-full w-full rounded-md flex justify-between p-3">
                    <span className="font-semibold text-neutral-100 text-md">2000+</span>
                </div>
            </motion.div>
		</motion.div>
	);
};
const ListeningMusic = () => {
	return (
		<GlowingStarsBackgroundCard className="bg-transparent border-none h-0 hidden md:block" />
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
					"h-[97.5%] text-neutral-500 hover:text-neutral-100 transition-all duration-300 relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black",
					"dark:border-white/20 border flex flex-col items-center justify-center"
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
					"h-[97.5%] text-neutral-500 hover:text-neutral-100 transition-all duration-300 relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black",
					"dark:border-white/20 border flex flex-col items-center justify-center"
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
					"h-[97.5%] text-neutral-500 hover:text-neutral-100 transition-all duration-300 relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black",
					"dark:border-white/20 border flex flex-col items-center justify-center"
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


const Questions = () => {
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

    const messages = [
		"Hello, Amex.\nAre you accepting a job and a request?",
		"Sure, I am always accepting it.",
		"Where should I contact you from?",
		<span key={3}>
			<a
				href="https://twitter.com/amex2189"
				target="_blank"
				className="text-cyan-500">
				Here
			</a>
			, you can find me.
		</span>,
		"Thanks, and I have one more question.",
		"",
		"I was wondering, what kinds of projects are you open to?.",
		<span key={7}>
			Ok, I am accepting &apos;Web&apos;, &apos;Backend&apos;, &apos;help
			me&apos; and &apos;create any tool&apos;.
		</span>,
		"Thanks for your time."
	];

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
            {
                messages.map((message, i) => (
                message !== "" &&
                    (i % 2 === 1
                        ? <motion.div
                            key={i}
                            variants={variants}
                            className="flex flex-row items-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black">
                            <Image
                                src={DenoLogo}
                                alt="avatar"
                                height="100"
                                width="100"
                                className="rounded-full h-6 w-6"
                            />
                            <p className={clsx("text-xs text-neutral-300", messages.length > 20 && "text-[0.6rem]")}>
                                {message}
                            </p>
                        </motion.div>
                        : <motion.div
                            key={i}
                            variants={variantsSecond}
                            className="flex flex-row items-center rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 pl-3 items-center justify-end space-x-2 max-w-[95%] ml-auto bg-white dark:bg-black">
                            <p className="text-xs text-neutral-500">
                                {message}
                            </p>
                            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-emerald-500 flex-shrink-0 transform rotate-45" />
                        </motion.div>
                    )
                ))
            }
        <div className="h-6 w-2/5 ml-auto border border-white/[0.2] rounded-2xl flex items-center justify-center">
                <a href="https://twitter.com/amex2189" target="_blank" className="text-xs text-neutral-500">Hear more.</a>
            </div>
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
		title: "My Achievement",
		description: <span className="text-sm">Achievement of my works.</span>,
		header: <MyAchievement />,
		className: "md:col-span-1",
		icon: <AwardIcon width={18} height={18} />
	},
	{
		title: "Listening Music",
		description: (
			<span className="text-sm">
				I listen to music and play it in{" "}
				<a
					className="text-emerald-400 inline-flex items-start"
					href="https://open.spotify.com/user/31zhwofz73s6j6d4kpna5hovrrc4?si=d77d21773b354bd7"
					target="_blank">
					Spotify{" "}
					<ExternalLink
						width={8}
						height={8}
						className="text-neutral-100 mt-[2px] ml-[2px]"
					/>
				</a>
			</span>
		),
		header: <ListeningMusic />,
		className: "md:col-span-1",
		icon: <AudioLinesIcon width={18} height={18} />
	},
	{
		title: "Questions",
		description: (
			<span className="text-sm">
				About the questions that you may have.
			</span>
		),
		header: <Questions />,
		className: "md:col-span-1 md:row-span-2",
		icon: <MessageCircleQuestionIcon width={18} height={18} />
	}
];