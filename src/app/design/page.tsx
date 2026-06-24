import Image from 'next/image';

export default function DesignPage() {
  return (
    <main className="bg-background min-h-dvh font-(family-name:--font-sans) text-[#11110f] transition-colors duration-500 dark:text-[#f4f3ee]">
      <section className="max-w-360-cols-1 mx-auto grid w-full gap-16 px-5 pt-28 pb-10 sm:px-8 sm:pt-32 md:gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] lg:px-12 lg:pt-36 lg:pb-18 xl:px-16">
        <div>
          <h1 className="mt-7 max-w-115 text-[clamp(2.35rem,4.1vw,4.45rem)] leading-[0.97] font-semibold tracking-normal text-balance">
            My highlights.{' '}
            <span className="block text-[#8d8f8a]">
              Recent projects I&apos;m proud of.
            </span>
          </h1>
        </div>

        <div className="flex items-start lg:pt-4">
          <p className="max-w-97.5 text-[clamp(1.35rem,1.85vw,2.3rem)] leading-[1.1] font-medium tracking-normal text-pretty text-[#11110f] dark:text-[#f4f3ee]">
            Concepts and designs for projects currently awaiting{' '}
            <span className="text-[#979a94] dark:text-[#8c9189]">
              implementation.
            </span>
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="border-t border-[#11110f]/12 pt-8 pb-7 dark:border-[#f4f3ee]/14" />
      </section>

      <section
        id="avp"
        className="w-full px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12 xl:px-16"
      >
        <div className="relative mx-auto w-full max-w-245 overflow-hidden">
          <Image
            src="/assets/designs/avp.png"
            alt="AVP visual identity displayed across large city billboards"
            width={1400}
            height={788}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
