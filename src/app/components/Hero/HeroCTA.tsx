import Link from "next/link";

export default function HeroCTA() {
	return (
		<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
			<Link
				href="/contact"
				className="inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] shadow-[0_25px_60px_-20px_rgba(129,103,255,0.7)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8167FF]"
			>
				Book a Demo
			</Link>
			<Link
				href="/features"
				className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-base font-semibold text-white/85 transition hover:-translate-y-0.5 hover:border-white/60 hover:text-white"
			>
				Explore Solutions
			</Link>
		</div>
	);
}
