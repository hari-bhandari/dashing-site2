"use client";

import { IconQuote } from "@tabler/icons-react";
import { motion } from "framer-motion";

type Testimonial = {
	quote: string;
	name: string;
	designation?: string;
};

const defaultTestimonials: Testimonial[] = [
	{
		quote:
			"The Dashing support team and programmers have been awesome to work with. They listened to our suggestions and continuously delivered improvements. I finally have an ERP I can rely on, with the support and flexibility this industry needs.",
		name: "Sonicare Solutions Inc.",
	},
	{
		quote:
			"Dashing Distribution Software. Our journey to finding and utilizing a software platform was an exhausting, frustrating, and, at times, seemingly hopeless process. Thankfully, through word-of-mouth by a fellow distributor, Dashing was presented. The software flows nicely and is very user friendly. Purchase orders are easily created, sent, and received and are directly linked to the correlating sales order. The shipping process is easily navigated and has the ability to adhere to customer needs and requirements specifically.",
		name: "K-1 Technologies",
	},
	{
		quote:
			"Our Dashing software has been instrumental in streamlining operations. The onboarding was smooth, the interface is intuitive, and the customer service is exceptional. Highly recommend!",
		name: "Sonar Electronics",
	},
];

const sectionVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0 }
};

const cardsContainer = {
	visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } }
};

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0 }
};

function TestimonialCard({ quote, name, designation }: Testimonial) {
	return (
		<motion.article
			className="relative flex h-full flex-col gap-6 rounded-3xl border border-[#0a2440]/10 bg-white p-8 text-left text-[#0a2440] shadow-[0_30px_80px_-40px_rgba(10,36,64,0.4)]"
			variants={cardVariants}
		>
			<IconQuote className="absolute -top-5 left-6 h-10 w-10 text-lime-400/80" aria-hidden />
			<div className="space-y-4 pt-6">
				<p className="text-base leading-relaxed text-[#0a2440]/80">{quote}</p>
			</div>
			<div className="mt-auto pt-4">
				<p className="text-lg font-semibold text-[#0a2440]">{name}</p>
				{designation ? <p className="text-sm text-[#0a2440]/70">{designation}</p> : null}
			</div>
			<IconQuote className="absolute -bottom-5 right-6 h-10 w-10 rotate-180 text-lime-400/70" aria-hidden />
		</motion.article>
	);
}

export default function Testimonials({ testimonials = defaultTestimonials }: { testimonials?: Testimonial[] }) {
	if (!testimonials || testimonials.length === 0) {
		return null;
	}

	return (
		<motion.section
			className="relative isolate overflow-hidden py-20 sm:py-24 bg-white"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.35 }}
			variants={sectionVariants}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 text-center sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl">
					<p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0a2440]">Testimonials</p>
					<h2 className="mt-4 text-4xl font-bold text-[#0a2440] sm:text-5xl">Trusted by Brokers Across North America &amp; Europe</h2>
					<p className="mt-4 text-lg text-[#0a2440]/80">
						Join the growing community of brokers who&apos;ve transformed their operations with Dashing Distribution Software.
					</p>
				</div>
				<motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={cardsContainer}>
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
					))}
				</motion.div>
			</div>
		</motion.section>
	);
}