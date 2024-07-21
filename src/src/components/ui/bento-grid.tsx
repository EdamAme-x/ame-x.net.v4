import { cn } from "@/lib/utils";

export const BentoGrid = ({
	className,
	children
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
				className
			)}>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
	raw
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	raw?: React.ReactNode;
}) => {
	return raw ? (
		raw
	) : (
		<div
			className={cn(
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-black border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
				className
			)}>
			{header}
			<div className="group-hover/bento:translate-x-2 transition duration-200">
				<div className="font-sans font-bold text-neutral-200 mb-2 mt-2 inline-flex items-center gap-x-2">
					{icon} {title}
				</div>
				<div className="font-sans font-normal text-xs text-neutral-300">
					{description}
				</div>
			</div>
		</div>
	);
};
