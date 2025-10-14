import Image from "next/image";

export default function FinanceLeadersTrust() {
  return (
    <section className="w-full px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-extrabold leading-tight text-amber-400 sm:text-4xl">
          Finance Directors trust Dashing to protect growth
        </h2>

        {/* Testimonial block with vertical accent */}
        <div className="mt-8 flex gap-6">
          <div className="hidden w-[2px] bg-gradient-to-b from-violet-400 via-violet-500 to-violet-400 sm:block" />
          <div>
            <p className="text-2xl font-extrabold leading-snug text-amber-300 sm:text-3xl">
              &ldquo;Our new Dashing software has been instrumental in streamlining our operations and the customer service and technical support is on point.&rdquo;
            </p>
            <div className="mt-6">
              <Image
                src="/testimonials/Sonar.png"
                alt="Sonar Electronics"
                width={220}
                height={60}
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>

        {/* Credibility + Assurance */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-extrabold text-amber-300">Industry credibility</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300">
              Even small early adopters or peer quotes validate our approach to financial management solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-amber-300">Assurance messaging</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300">
              Full training, onboarding, and satisfaction guarantee included with every implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
