import Button from '@/components/ui/Button';

const ROLES = ['Founder of Treamio', 'Consultant', 'Facilitator', 'Writer'];

/**
 * The band that closes the hero.
 *
 * It exists for two reasons. Editorially it carries the descriptor and the two
 * calls to action that used to sit inside the Introduction panel, so the hero
 * ends on the positioning rather than trailing into the next section. Visually
 * it is a solid, full-bleed bar running the whole width of the page — the
 * portrait at the foot of the hero is cropped hard at the subject's feet, and
 * because it hangs past the hero's foot this band paints over that cut, so the
 * subject reads as standing behind the band instead of as a cropped photograph.
 * That is why it is `relative z-10` with an opaque background: the z-index is
 * structural, not decorative.
 */
export default function HeroDivider() {
  return (
    <section className="relative z-10 bg-navy">
      <div className="shell py-8 lg:py-9">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <p className="type-meta flex flex-wrap items-center gap-x-3 gap-y-2 text-bronze-light">
            {ROLES.map((role, index) => (
              <span key={role} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className="text-ivory/25">
                    |
                  </span>
                )}
                <span className="uppercase tracking-[0.14em]">{role}</span>
              </span>
            ))}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Button href="/writing" size="lg" variant="inverse">
              Explore My Thinking
            </Button>
            <Button href="/about" size="lg" variant="inverse-outline">
              About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
