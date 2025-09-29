"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";

import HeroCTA from "./HeroCTA";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

export default function Hero() {
	const { theme, resolvedTheme } = useTheme();

	const currentTheme = useMemo(() => {
		if (theme && theme !== "system") {
			return theme;
		}
		return resolvedTheme;
	}, [theme, resolvedTheme]);

	return (
		<section className="relative overflow-hidden px-4 pb-24 pt-28 sm:px-6 sm:pt-32 md:pt-36 lg:px-8 lg:pt-40">
			<div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-sky-50 via-white to-transparent dark:from-slate-900 dark:via-slate-950" aria-hidden />
			<div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center">
				<div className="flex w-full max-w-2xl flex-col items-center gap-10 lg:items-start">
					<HeroText />
					<HeroCTA />
				</div>
				<HeroImage theme={currentTheme ?? undefined} />
			</div>
		</section>
	);
}
