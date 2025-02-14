import Image from 'next/image'

export default function Partners() {
  return (
    <div className="w-full py-12 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold text-gray-600 mb-8 dark:text-white">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {/* Partner 1 */}
          <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all">
            <Image
              src="partners\partnersTest.svg"
              alt="Partner 1"
              fill
              className="object-contain"
            />
          </div>

          {/* Partner 2 */}
          <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all">
            <Image
              src="partners\partnersTest.svg"
              alt="Partner 2"
              fill
              className="object-contain"
            />
          </div>

          {/* Partner 3 */}
          <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all">
            <Image
              src="partners\partnersTest.svg"
              alt="Partner 3"
              fill
              className="object-contain"
            />
          </div>

          {/* Partner 4 */}
          <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all">
            <Image
              src="partners\partnersTest.svg"
              alt="Partner 4"
              fill
              className="object-contain"
            />
          </div>

          {/* Partner 5 */}
          <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all">
            <Image
              src="partners\partnersTest.svg"
              alt="Partner 5"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}