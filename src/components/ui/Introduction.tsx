import StickyNote from '@/components/playbook/StickyNote';
import HanddrawnArrow from '@/components/playbook/HanddrawnArrow';

export default function Introduction() {
  return (
    // This panel paints no surface of its own. The divider band above carries
    // the contrast, and the ivory behind it is the page's paper surface, which
    // is a single wash across the whole document — a panel that painted its own
    // flat ivory here would cut a visible edge into it.
    <section className="section">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="type-eyebrow mb-5 text-bronze-ink">Introduction</p>
            <h2 className="type-h2 text-navy">Understanding People. Improving Performance.</h2>

            {/* Playbook note. On wide screens it sits in the open space below the
                heading and the arrow carries the eye across to the copy. */}
            <div className="mt-10 lg:mt-20 lg:flex lg:justify-end">
              <div className="relative inline-block">
                <StickyNote rotation={-1.6} className="w-[16rem]">
                  Performance is shaped by the system.
                </StickyNote>
                <HanddrawnArrow className="absolute top-1/2 -right-16 hidden h-7 w-16 -translate-y-1/2 text-bronze lg:block" />
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            <p className="type-lead text-navy">
              Most of my professional life has been spent exploring a deceptively difficult
              question: why do people and organisations struggle to change, even when they know
              what needs to be different?
            </p>
            <p className="type-body text-slate">
              My work has taken me across leadership development, organisational learning,
              technology adoption and performance improvement. Along the way, I&apos;ve become
              increasingly interested in the relationship between human behaviour, organisational
              systems and the conditions that make change possible.
            </p>
            <p className="type-body text-slate">
              This website is where I explore those ideas, share what I&apos;m learning and connect
              the different parts of my professional work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
