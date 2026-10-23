import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-ivory">
      <div className="shell pt-12 md:pt-16">
        {/* The portrait always carries a negative bottom margin, so it hangs past
            the foot of this section at every width. The divider band that follows
            is opaque and stacked above it, which covers the hard crop at the
            subject's feet and reads as standing behind that band. The margin sets
            how deep the subject sinks into the band — 16px, which hides the crop
            while leaving the whole figure above it visible. Below lg the columns
            stack and the head necessarily sits under the copy rather than level
            with it, but the portrait still meets the band. */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Copy. No bottom padding: at lg the portrait has to stay the taller
              column so the negative margin on it actually pushes past the section
              foot rather than being absorbed by the grid row. */}
          <div className="lg:col-span-7">
            <p className="type-eyebrow text-bronze-ink mb-6">Mark Chivere</p>

            <h1 className="type-display text-navy mb-7">
              The Human Side of{' '}
              <em className="font-editorial font-normal italic tracking-[-0.01em]">
                Performance.
              </em>
            </h1>

            <p className="type-lead max-w-[36rem] text-slate">
              I write, speak and work at the intersection of leadership, behavioural science,
              organisational change and artificial intelligence.
            </p>
          </div>

          {/* Portrait. The subject is lifted out of the studio photograph, so it
              sits straight on the page — no plate, frame or drop shadow. */}
          <div className="lg:col-span-5">
            <Image
              src="/mark-chivere-hero-cutout.png"
              alt="Mark Chivere"
              width={1024}
              height={1024}
              priority
              className="mx-auto -mb-4 h-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
