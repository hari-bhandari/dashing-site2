type HeroImageProps = {
	theme?: string;
};

export default function HeroImage({ theme }: HeroImageProps) {
	void theme;
	return (
		<div className="relative mx-auto mt-12 flex max-w-3xl items-center justify-center rounded-[2.5rem] border border-white/20 bg-white/10 p-16 text-center text-white/70 shadow-[0_45px_120px_-60px_rgba(12,10,43,0.8)] backdrop-blur-lg">
			<span className="text-lg font-semibold uppercase tracking-[0.2em]">Placeholder Image</span>
		</div>
	);
}
