import Button from '@/components/ui/Button';
import StickyNote from '@/components/playbook/StickyNote';

export default function SpeakingInvite() {
  return (
    <section className="bg-navy">
      <div className="shell section">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="type-eyebrow mb-5 text-bronze-light">Speaking</p>
            <h2 className="type-h2 text-ivory">Speaking, Facilitation &amp; Conversations</h2>

            {/* Playbook note — a workshop observation, set against the navy. */}
            <div className="mt-10 lg:mt-14">
              <StickyNote rotation={-1.8} tone="yellow" className="w-[16.5rem]">
                Change happens in behaviour, not PowerPoint.
              </StickyNote>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="type-lead mb-8 text-slate-light">
              I contribute to conversations about leadership, learning, organisational change and
              the human side of technology adoption.
            </p>
            <Button href="/speaking" variant="inverse" size="lg">
              More About Speaking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
