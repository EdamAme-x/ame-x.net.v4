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
				"px-4 py-2 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 hover:border-blue-500/25 transition duration-500 text-white mx-2 text-center rounded-full relative",
				className
			)}>
			{children ? children : <span>Click here</span>}
			<div
				className={cn(
					"absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent",
					className
				)}
			/>
		</button>
	);
}
