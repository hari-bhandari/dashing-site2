"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTheme } from "next-themes";

import HeroCTA from "./HeroCTA";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const heroVariants = {
	initial: { opacity: 0, y: 24 },
	enter: { opacity: 1, y: 0 }
};

const contentVariants = {
	initial: { opacity: 0, y: 32 },
	enter: { opacity: 1, y: 0 }
};

const imageVariants = {
	initial: { opacity: 0, scale: 0.95 },
	enter: { opacity: 1, scale: 1 }
};

export default function Hero() {
	const { theme, resolvedTheme } = useTheme();

	const currentTheme = useMemo(() => {
		if (theme && theme !== "system") {
			return theme;
		}
		return resolvedTheme;
	}, [theme, resolvedTheme]);

	return (
		<motion.section
			className="relative overflow-hidden px-4 pb-24 pt-32 text-white sm:px-6 md:pt-36 lg:px-8 lg:pt-48 min-h-[810px]"
			initial="initial"
			animate="enter"
			variants={heroVariants}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center">
				<motion.div
					className="flex w-full max-w-2xl flex-col items-center gap-10 lg:items-start"
					variants={contentVariants}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
				>
					<HeroText />
					<HeroCTA />
				</motion.div>
				<motion.div
					variants={imageVariants}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
					className="w-full"
				>
					<HeroImage theme={currentTheme ?? undefined} />
				</motion.div>
			</div>
		</motion.section>
	);
}
