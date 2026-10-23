import EditorialAnnotation from '@/components/playbook/EditorialAnnotation';
import RugbyPlayDiagram from '@/components/playbook/RugbyPlayDiagram';

const themes = [
  {
    title: 'Leadership & Human Behaviour',
    description:
      'How leaders influence behaviour, build trust and create conditions for better performance.',
  },
  {
    title: 'Learning & Capability',
    description: 'Why learning does not always translate into changed behaviour.',
  },
  {
    title: 'Change & AI Adoption',
    description:
      'The human factors behind technology adoption and organisational transformation.',
  },
  {
    title: 'Organisations & Performance',
    description:
      'How systems, relationships and everyday decisions influence organisational outcomes.',
  },
];

export default function AreasOfInterest() {
  return (
    <section className="section bg-ivory">
      <div className="shell">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div className="max-w-2xl">
            <p className="type-eyebrow mb-5 text-bronze-ink">Themes</p>
            <h2 className="type-h2 text-navy">What I Think About</h2>
          </div>

          {/* Playbook motif: a tactical line drawn in the open space beside the
              heading. Hidden below lg so it never crowds the heading on narrow
              screens. Decorative SVG is hidden from assistive technology; the
              annotation is real text. */}
          <div className="hidden items-end gap-6 lg:flex">
            <EditorialAnnotation className="pb-1 text-right">
              The work starts after
              <br />
              the workshop.
            </EditorialAnnotation>
            <RugbyPlayDiagram
              variant="play"
              className="h-24 w-[7.5rem] shrink-0 text-bronze/70"
            />
          </div>
        </div>

        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
          {themes.map((theme, index) => (
            <div key={theme.title} className="border-t border-gray-200 pt-7">
              <span className="type-meta mb-4 block text-bronze-ink">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="type-h3 mb-3 text-navy">{theme.title}</h3>
              <p className="type-body max-w-[34rem] text-slate">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
