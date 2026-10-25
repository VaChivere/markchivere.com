'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  findIntersection,
  type HumanChangeTopic,
  type TopicId,
} from '@/lib/human-change-data';

/** The three things the panel can be showing. Derived, never stored. */
type DetailView =
  | { kind: 'overview' }
  | { kind: 'topic'; topic: HumanChangeTopic; isPreview: boolean }
  | {
      kind: 'intersection';
      first: HumanChangeTopic;
      second: HumanChangeTopic;
      insight: string;
      question: string;
    };

interface HumanChangeDetailProps {
  topics: HumanChangeTopic[];
  selected: TopicId[];
  /** The node currently under the pointer or keyboard focus. */
  active: TopicId | null;
  centre: { label: string; question: string; intro: string };
}

/**
 * Selection wins over hover, and a hovered area that is not selected previews
 * itself rather than interrupting a selection.
 */
function resolveView(
  topics: HumanChangeTopic[],
  selected: TopicId[],
  active: TopicId | null
): DetailView {
  if (selected.length === 2) {
    const first = topics.find((topic) => topic.id === selected[0]);
    const second = topics.find((topic) => topic.id === selected[1]);
    const pairing = findIntersection(selected[0], selected[1]);

    if (first && second && pairing) {
      return {
        kind: 'intersection',
        first,
        second,
        insight: pairing.insight,
        question: pairing.question,
      };
    }
  }

  if (selected.length === 1) {
    const topic = topics.find((entry) => entry.id === selected[0]);
    if (topic) return { kind: 'topic', topic, isPreview: false };
  }

  if (active) {
    const topic = topics.find((entry) => entry.id === active);
    if (topic) return { kind: 'topic', topic, isPreview: true };
  }

  return { kind: 'overview' };
}

function viewKey(view: DetailView): string {
  if (view.kind === 'topic') return `topic-${view.topic.id}-${view.isPreview ? 'p' : 's'}`;
  if (view.kind === 'intersection') return `pair-${view.first.id}-${view.second.id}`;
  return 'overview';
}

/** Small coloured marker. Colour is never the only signal — the label sits beside it. */
function AccentDot({ accent }: { accent: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-2 w-2 shrink-0 rounded-full"
      style={{ backgroundColor: accent }}
    />
  );
}

export default function HumanChangeDetail({
  topics,
  selected,
  active,
  centre,
}: HumanChangeDetailProps) {
  const view = resolveView(topics, selected, active);

  // A single keyed element rather than a cross-fade: content swaps instantly on
  // selection, so nothing has to be animated out and the panel cannot collapse
  // mid-transition. Reduced-motion users get the swap without the fade.
  //
  // No min-height on lg, and deliberately so. The panel does not need one because
  // the column beside it now carries the diagram, the topic controls and the
  // pairing controls, and none of those change with the selection — so that column
  // is a constant height and pins the grid row on its own. The panel just stretches
  // to meet it, and nothing below the diagram moves when the selection changes.
  //
  // The modest min-height that remains applies below lg, where the two columns
  // stack and there is no row to pin. Without it an empty overview would leave the
  // panel shorter than its own contents look, and the panel grows naturally from
  // there — the change is always the result of a tap, and it happens beneath the
  // control that was just used.
  return (
    <div
      aria-live="polite"
      className="flex min-h-[22rem] flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6 lg:p-7"
    >
      <motion.div
        key={viewKey(view)}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-1 flex-col"
      >
        {view.kind === 'overview' && <Overview centre={centre} topics={topics} />}
        {view.kind === 'topic' && <TopicView topic={view.topic} isPreview={view.isPreview} />}
        {view.kind === 'intersection' && (
          <IntersectionView
            first={view.first}
            second={view.second}
            insight={view.insight}
            question={view.question}
          />
        )}
      </motion.div>
    </div>
  );
}

function Overview({
  centre,
  topics,
}: {
  centre: { label: string; question: string; intro: string };
  topics: HumanChangeTopic[];
}) {
  return (
    <>
      <p className="type-eyebrow mb-5 text-bronze-light/85">Overview</p>
      <p className="font-editorial mb-5 text-xl leading-snug text-ivory md:text-2xl">
        {centre.question}
      </p>
      <p className="type-body text-ivory/75">{centre.intro}</p>

      <ul className="mt-auto grid grid-cols-2 gap-x-5 gap-y-3 pt-8">
        {topics.map((topic) => (
          <li key={topic.id} className="flex items-center gap-2">
            <AccentDot accent={topic.accent} />
            <span className="type-small text-ivory/75">{topic.shortLabel}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function TopicView({ topic, isPreview }: { topic: HumanChangeTopic; isPreview: boolean }) {
  return (
    <article className="flex flex-1 flex-col">
      <div className="mb-4 flex items-center gap-3">
        <AccentDot accent={topic.accent} />
        <span className="type-eyebrow text-bronze-light/85">{topic.index}</span>
        <span className="type-eyebrow text-ivory/50">
          {isPreview ? 'Preview' : 'Selected'}
        </span>
      </div>

      <h3 className="type-h3 mb-4 text-ivory">{topic.title}</h3>
      <p className="type-body mb-6 text-ivory/75">{topic.description}</p>

      <div className="mb-6">
        <h4 className="type-eyebrow mb-3 text-bronze-light/85">Questions I keep returning to</h4>
        <ol className="space-y-3">
          {topic.questions.map((question, index) => (
            <li key={question} className="flex gap-3">
              <span
                aria-hidden="true"
                className="type-meta shrink-0 pt-0.5 font-semibold"
                style={{ color: topic.accent }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[0.9375rem] leading-relaxed text-ivory/85">{question}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mb-6 border-l-2 border-bronze-light/40 pl-4">
        <h4 className="type-eyebrow mb-2 text-bronze-light/85">How it connects</h4>
        <p className="font-editorial text-lg leading-snug text-ivory/85">{topic.connection}</p>
      </div>

      {topic.links.length > 0 && (
        <div className="border-t border-white/10 pt-5">
          <h4 className="type-eyebrow mb-3 text-ivory/50">Read on</h4>
          <ul className="space-y-2">
            {topic.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-baseline gap-2 text-[0.9375rem] font-medium text-ivory underline decoration-bronze-light/50 decoration-1 underline-offset-4 transition-colors hover:text-bronze-light"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-bronze-light/70">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="type-small mt-auto pt-6 text-ivory/55">
        Select a second area to see how the two connect.
      </p>
    </article>
  );
}

function IntersectionView({
  first,
  second,
  insight,
  question,
}: {
  first: HumanChangeTopic;
  second: HumanChangeTopic;
  insight: string;
  question: string;
}) {
  return (
    <article className="flex flex-1 flex-col">
      <p className="type-eyebrow mb-4 text-bronze-light/85">Intersection</p>

      <h3 className="type-h3 mb-5 text-ivory">
        <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="inline-flex items-center gap-2">
            <AccentDot accent={first.accent} />
            {first.shortLabel}
          </span>
          <span aria-hidden="true" className="text-ivory/40">
            &times;
          </span>
          <span className="inline-flex items-center gap-2">
            <AccentDot accent={second.accent} />
            {second.shortLabel}
          </span>
        </span>
      </h3>

      <p className="type-body mb-6 text-ivory/80">{insight}</p>

      <div className="mb-6 border-l-2 border-bronze-light/40 pl-4">
        <h4 className="type-eyebrow mb-2 text-bronze-light/85">The question underneath</h4>
        <p className="font-editorial text-lg leading-snug text-ivory/85">{question}</p>
      </div>

      <p className="type-small mt-auto border-t border-white/10 pt-5 text-ivory/55">
        Clear the selection to return to the overview, or pick a different pair.
      </p>
    </article>
  );
}
