import { cn } from "@/lib/utils";

export function GlassedButton({
	className,
	children
}: {
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<button
			className={cn(
				"px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 hover:border-emerald-500/25 transition duration-500 text-white mx-auto text-center rounded-full relative mt-4",
				className
			)}>
			{children ? children : <span>Click here</span>}
			<div
				className={cn(
					"absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent",
					className
				)}
			/>
		</button>
	);
}
