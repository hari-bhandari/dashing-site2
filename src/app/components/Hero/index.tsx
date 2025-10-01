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
		<section className="relative overflow-hidden px-4 pb-24 pt-32 text-white sm:px-6 md:pt-36 lg:px-8 lg:pt-40">
			<div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#1b0f3f] via-[#140930] to-transparent" aria-hidden />
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_55%)]" aria-hidden />
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
