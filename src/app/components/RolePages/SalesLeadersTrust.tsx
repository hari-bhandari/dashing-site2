"use client";

import { IconCheck, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote: "The Dashing support team and programmers have been awesome to work with. They have really listened to our suggestions and requests, and continuously make improvements to the software. I finally have an ERP software that I can rely on and where I know I will get the support and flexibility that is needed in this industry.",
    name: "Michael",
    designation: "Sonicare Solutions Inc.",
    src: "/testimonials/Sonicare.png",
  },
  {
    quote: "Our new Dashing software has been instrumental in streamlining our operations and the customer service and technical support is on point. Highly recommend!",
    name: "Travis",
    designation: "Sonar",
    src: "/testimonials/Sonar.png",
  },
  {
    quote: "Dashing Distribution Software. Our journey to finding and utilizing a software platform was an exhausting, frustrating, and, at times, seemingly hopeless process. Thankfully, through word-of-mouth by a fellow distributor, Dashing was presented. The software flows nicely and is very user friendly. Purchase orders are easily created, sent, and received and are directly linked to the correlating sales order. The shipping process is easily navigated and has the ability to adhere to customer needs and requirements specifically. Myself and my team certainly feel relieved. This industry is unique and securing the appropriate software is difficult. The Dashing team is amazing. I could not be happier, quite honestly.",
    name: "Michelle Gorman",
    designation: "K-1 Technologies",
    src: "/testimonials/K1.png",
  },
];

export default function SalesLeadersTrust() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[auto_minmax(0,1fr)] items-stretch pb-8 sm:pb-10">
          {/* Image column */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 flex items-center justify-center bg-white rounded-lg">
              <Image
                src={testimonials[current].src}
                alt={testimonials[current].designation}
                width={200}
                height={80}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </div>
          {/* Textual content column */}
          <div className="flex min-h-[500px] flex-col gap-6">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Trusted by brokers like you</h2>
            <div className="flex items-start gap-4">
              <div className="h-full w-1 rounded-full bg-amber-300/70 flex-shrink-0" aria-hidden />
              <div className="max-h-64 overflow-y-auto pr-2">
                <p className="text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
              </div>
            </div>
            {/* Name and Designation */}
            <div className="flex flex-col gap-1 opacity-80">
              <p className="text-lg font-semibold text-white">{testimonials[current].name}</p>
              <p className="text-sm text-white/70">{testimonials[current].designation}</p>
            </div>
            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                aria-label="Previous testimonial"
              >
                <IconChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 w-2 rounded-full transition ${
                      i === current ? "bg-lime-400" : "bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                aria-label="Next testimonial"
              >
                <IconChevronRight className="h-5 w-5" />
              </button>
            </div>
            {/* Commitment bar */}
            <div className="w-full rounded-lg bg-emerald-700/90 px-5 py-4 text-white shadow-[0_20px_45px_-30px_rgba(0,0,0,0.6)] ring-1 ring-emerald-400/30">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-emerald-600/80">
                  <IconCheck className="h-4 w-4" aria-hidden />
                </span>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Commitment:</span> full onboarding, training, and satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
