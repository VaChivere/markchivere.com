const ventures = [
  {
    name: 'Treamio',
    url: 'https://treamio.com',
    description:
      'An international consultancy focused on leadership, organisational capability, team performance and change.',
  },
  {
    name: 'GrantsHub.eu',
    url: 'https://grantshub.eu',
    description:
      'An AI-powered funding intelligence platform helping organisations discover grant opportunities and assess funding readiness.',
  },
];

export default function MyWork() {
  return (
    <section className="section bg-ivory">
      <div className="shell">
        <div className="mb-14 max-w-2xl">
          <p className="type-eyebrow mb-5 text-bronze-ink">Ventures</p>
          <h2 className="type-h2 text-navy">What I&apos;m Building</h2>
        </div>

        <div className="border-t border-gray-200">
          {ventures.map((venture) => (
            <div
              key={venture.name}
              className="grid gap-5 border-b border-gray-200 py-10 lg:grid-cols-12 lg:gap-12 lg:py-12"
            >
              <h3 className="type-h3 text-navy lg:col-span-4">{venture.name}</h3>
              <p className="type-body text-slate lg:col-span-5">{venture.description}</p>
              <div className="lg:col-span-3 lg:text-right">
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-navy transition-colors hover:text-bronze-ink"
                >
                  Visit {venture.name.replace('.eu', '')}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
