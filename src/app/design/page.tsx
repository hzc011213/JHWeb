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
        className="w-full px-5 pb-[3.75rem] sm:px-8 lg:px-12 xl:px-16"
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

      <section className="w-full bg-[#050505] px-5 pt-14 pb-16 text-[#f4f3ee] sm:px-8 sm:pt-18 sm:pb-24 lg:px-12 lg:pt-22 xl:px-16">
        <div className="max-w-360-cols-1 mx-auto mb-16 grid w-full gap-16 md:mb-20 md:gap-20 lg:mb-24 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)]">
          <div>
            <h2 className="mt-7 max-w-115 text-[clamp(2.35rem,4.1vw,4.45rem)] leading-[0.97] font-semibold tracking-normal text-balance">
              My highlights.{' '}
              <span className="block text-[#8d8f8a]">
                Recent projects I&apos;m proud of.
              </span>
            </h2>
          </div>

          <div className="flex items-start lg:pt-4">
            <p className="max-w-97.5 text-[clamp(1.35rem,1.85vw,2.3rem)] leading-[1.1] font-medium tracking-normal text-pretty text-[#f4f3ee]">
              Concepts and designs for projects currently awaiting{' '}
              <span className="text-[#8c9189]">implementation.</span>
            </p>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-340 gap-10 sm:gap-12 lg:gap-16">
          <div className="mx-auto w-full max-w-285">
            <Image
              src="/assets/designs/avp-pod.svg"
              alt="AVP product design shown across pod and mobile layouts"
              width={2038}
              height={1181}
              priority
              sizes="(min-width: 1280px) 1140px, calc(100vw - 40px)"
              className="h-auto w-full"
            />
          </div>

          <div className="grid w-full grid-cols-1 items-start gap-10 sm:gap-12 md:grid-cols-2 lg:gap-16">
            <Image
              src="/assets/designs/avp-popmart1.svg"
              alt="AVP Pop Mart design exploration with featured product sections"
              width={1280}
              height={1997}
              sizes="(min-width: 1024px) 50vw, calc(100vw - 40px)"
              className="h-auto w-full"
            />
            <Image
              src="/assets/designs/avp-popmart4.svg"
              alt="AVP Pop Mart detail page design exploration"
              width={1029}
              height={1192}
              sizes="(min-width: 1024px) 50vw, calc(100vw - 40px)"
              className="h-auto w-full"
            />
          </div>

          <div className="grid w-full grid-cols-1 items-start gap-10 sm:gap-12 md:grid-cols-2 lg:gap-16">
            <Image
              src="/assets/designs/avp-popmart3.svg"
              alt="AVP Pop Mart product page design exploration"
              width={1029}
              height={1325}
              sizes="(min-width: 1024px) 50vw, calc(100vw - 40px)"
              className="h-auto w-full"
            />
            <Image
              src="/assets/designs/avp-popmart2.svg"
              alt="AVP Pop Mart catalog design exploration"
              width={1280}
              height={1909}
              sizes="(min-width: 1024px) 50vw, calc(100vw - 40px)"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
