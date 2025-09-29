"use client";

import { IconQuote } from "@tabler/icons-react";

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
			"I highly recommend Dashing if you want to stay ahead of the competition. Their expertise and distribution tools transformed our operations, and their responsive team delivers outstanding service every day.",
		name: "Chipstock LLC",
	},
	{
		quote:
			"Our Dashing software has been instrumental in streamlining operations. The onboarding was smooth, the interface is intuitive, and the customer service is exceptional. Highly recommend!",
		name: "Sonar Electronics",
	},
];

function TestimonialCard({ quote, name, designation }: Testimonial) {
	return (
		<article className="relative flex h-full flex-col gap-6 rounded-3xl border border-white/20 bg-white/5 p-8 text-left text-white shadow-[0_50px_120px_-80px_rgba(15,23,42,0.8)] backdrop-blur-md">
			<IconQuote className="absolute -top-5 left-6 h-10 w-10 text-violet-200/70" aria-hidden />
			<div className="space-y-4 pt-6">
				<p className="text-base leading-relaxed text-white/80">{quote}</p>
			</div>
			<div className="mt-auto pt-4">
				<p className="text-lg font-semibold text-white">{name}</p>
				{designation ? <p className="text-sm text-white/60">{designation}</p> : null}
			</div>
			<IconQuote className="absolute -bottom-5 right-6 h-10 w-10 rotate-180 text-violet-200/50" aria-hidden />
		</article>
	);
}

export default function Testimonials({ testimonials = defaultTestimonials }: { testimonials?: Testimonial[] }) {
	if (!testimonials || testimonials.length === 0) {
		return null;
	}

	return (
		<section className="relative isolate overflow-hidden bg-gradient-to-b from-[#140930] via-[#1a0d3d] to-[#140930] py-20 sm:py-24">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.4),transparent_60%)]" aria-hidden />
			<div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 text-center sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-white">
					<p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">Testimonials</p>
					<h2 className="mt-4 text-4xl font-bold text-amber-300 sm:text-5xl">Trusted by Brokers Across North America &amp; Europe</h2>
					<p className="mt-4 text-lg text-white/70">
						Join the growing community of brokers who&apos;ve transformed their operations with Dashing Distribution.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
					))}
				</div>
			</div>
		</section>
	);
}