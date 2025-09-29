import Link from "next/link";

export default function HeroCTA() {
	return (
		<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
			<Link
				href="/contact"
				className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
			>
				Book a Demo
			</Link>
			<Link
				href="/features"
				className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:text-white"
			>
				Explore Solutions
			</Link>
		</div>
	);
}
