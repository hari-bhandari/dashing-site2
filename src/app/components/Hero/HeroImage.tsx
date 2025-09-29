type HeroImageProps = {
	theme?: string;
};

export default function HeroImage({ theme }: HeroImageProps) {
	void theme;
	return (
		<div className="relative mx-auto mt-12 flex max-w-3xl items-center justify-center rounded-[2.5rem] border border-dashed border-slate-300 bg-white/80 p-16 text-center text-slate-500 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400">
			<span className="text-lg font-semibold uppercase tracking-[0.2em]">Placeholder Image</span>
		</div>
	);
}
