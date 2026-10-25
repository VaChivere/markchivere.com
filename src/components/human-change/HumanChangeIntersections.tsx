'use client';

import {
  humanChangeIntersections,
  findTopic,
  type TopicId,
} from '@/lib/human-change-data';

interface HumanChangeIntersectionsProps {
  selected: TopicId[];
  onSelectPair: (first: TopicId, second: TopicId) => void;
}

function isActivePair(selected: TopicId[], first: TopicId, second: TopicId) {
  if (selected.length !== 2) return false;
  return (
    (selected[0] === first && selected[1] === second) ||
    (selected[0] === second && selected[1] === first)
  );
}

/**
 * The second way into the diagram.
 *
 * Clicking two nodes on the diagram also lands here, but that route assumes a
 * visitor knows the pairing is possible. Listing all six means the intersections
 * are visible, named controls rather than hotspots a visitor has to find.
 *
 * Deliberately compact and mounted in the diagram's own control cluster, directly
 * beneath the topic controls. The diagram is what visibly responds to a pairing —
 * the chord between the two areas appears there — so the control has to sit under
 * it rather than in a section of its own further down the page. Listed as cards
 * in a separate block, the controls sat ~520px below the thing they change, which
 * put the two out of view of each other on every common laptop viewport.
 */
export default function HumanChangeIntersections({
  selected,
  onSelectPair,
}: HumanChangeIntersectionsProps) {
  return (
    <div className="mt-8 border-t border-white/10 pt-7 md:mt-10">
      <p className="type-eyebrow mb-4 text-center text-bronze-light/85">Or combine two areas</p>

      <ul className="flex flex-wrap justify-center gap-2">
        {humanChangeIntersections.map(({ pair }) => {
          const first = findTopic(pair[0]);
          const second = findTopic(pair[1]);
          if (!first || !second) return null;

          const isActive = isActivePair(selected, pair[0], pair[1]);

          return (
            <li key={`${pair[0]}-${pair[1]}`}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelectPair(pair[0], pair[1])}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory ${
                  isActive
                    ? 'border-bronze-light/60 bg-white/[0.1] text-ivory'
                    : 'border-white/12 text-ivory/70 hover:border-white/25 hover:text-ivory'
                }`}
              >
                {/* Two overlapping dots, so the pairing is identifiable by shape
                    as well as by its label. */}
                <span aria-hidden="true" className="flex shrink-0 items-center">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: first.accent }} />
                  <span
                    className="-ml-0.5 h-2 w-2 rounded-full"
                    style={{ backgroundColor: second.accent }}
                  />
                </span>
                <span className="font-heading text-[0.8125rem] font-semibold">
                  {first.shortLabel}
                  <span aria-hidden="true" className="px-1 opacity-40">
                    &times;
                  </span>
                  {second.shortLabel}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
