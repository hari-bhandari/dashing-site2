const highlightClasses = "bg-gradient-to-r from-amber-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent";

export default function HeroText() {
	return (
		<div className="flex flex-col gap-6 text-center lg:text-left">
			<div className="space-y-2">
				<p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-200/90">Broker ERP</p>
				<h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
					<span className="block">More Deals.</span>
					<span className="block">Gain Real-Time Control.</span>
					<span className={`block ${highlightClasses}`}>Grow Profitably.</span>
				</h1>
			</div>
			<p className="text-lg text-white/70 lg:text-xl">
				The broker-specific ERP that helps you close deals faster, see clearly, and scale with confidence.
			</p>
		</div>
	);
}
