'use client';

import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { humanChangeCentre, humanChangeTopics, type TopicId } from '@/lib/human-change-data';
import HumanChangeDiagram, { withAlpha } from './HumanChangeDiagram';
import HumanChangeDetail from './HumanChangeDetail';
import HumanChangeIntersections from './HumanChangeIntersections';

/**
 * Two areas is the ceiling: beyond that the "how do these connect" question
 * stops having one answer, and the panel would have to become a list.
 */
const MAX_SELECTED = 2;

/**
 * The interests diagram: four areas I keep returning to, arranged around a
 * shared centre, with the six ways they pair up.
 *
 * One piece of state — which areas are selected — drives the diagram, the
 * detail panel and the intersection chooser, so the three can never disagree
 * about what is currently being looked at. Hover and keyboard focus are tracked
 * separately and never overwrite a selection.
 *
 * Self-contained: it brings its own navy field, so embedding it anywhere else
 * is a single import rather than a layout negotiation. The heading and lead are
 * overridable because it is used both standalone and as the body of the
 * "Where My Interests Sit" section on /my-work.
 */
interface HumanChangeModelProps {
  heading?: string;
  lead?: string;
}

export default function HumanChangeModel({
  heading = 'Four interests. One connected perspective.',
  lead = 'They are not four separate services. They are four ways of looking at the same problem — what it takes for people to change how they work.',
}: HumanChangeModelProps) {
  const [selected, setSelected] = useState<TopicId[]>([]);
  const [active, setActive] = useState<TopicId | null>(null);

  const toggleTopic = useCallback((id: TopicId) => {
    setSelected((current) => {
      if (current.includes(id)) return current.filter((entry) => entry !== id);
      // Selecting a third area replaces the oldest rather than being refused,
      // so a visitor is never stuck at a dead end.
      if (current.length >= MAX_SELECTED) return [current[current.length - 1], id];
      return [...current, id];
    });
  }, []);

  const selectPair = useCallback((first: TopicId, second: TopicId) => {
    setSelected([first, second]);
  }, []);

  const reset = useCallback(() => setSelected([]), []);
  const handleActivate = useCallback((id: TopicId | null) => setActive(id), []);

  const hasSelection = selected.length > 0;

  return (
    <section className="bg-navy" aria-labelledby="human-change-model-heading">
      <div className="section shell">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-12 max-w-3xl md:mb-16">
            <h2 id="human-change-model-heading" className="type-h2 mb-5 text-ivory">
              {heading}
            </h2>
            <p className="type-lead text-ivory/70">{lead}</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <HumanChangeDiagram
                topics={humanChangeTopics}
                selected={selected}
                active={active}
                centreLabel={humanChangeCentre.label}
                centreDescription={humanChangeCentre.question}
                onToggle={toggleTopic}
                onActivate={handleActivate}
              />

              {/* The same selection as the diagram, as plain controls. Keeps the
                  model usable when the circles are too small to tap comfortably. */}
              <div
                role="group"
                aria-label="Choose one area to explore, or two to see how they connect"
                className="mt-8 flex flex-wrap items-center justify-center gap-2 md:mt-10"
              >
                {humanChangeTopics.map((topic) => {
                  const isSelected = selected.includes(topic.id);
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => toggleTopic(topic.id)}
                      onFocus={() => handleActivate(topic.id)}
                      onBlur={() => handleActivate(null)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-heading text-[0.875rem] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory ${
                        isSelected ? 'text-ivory' : 'border-white/15 text-ivory/70 hover:text-ivory'
                      }`}
                      style={
                        isSelected
                          ? {
                              borderColor: withAlpha(topic.accent, 0.8),
                              backgroundColor: withAlpha(topic.accent, 0.14),
                            }
                          : undefined
                      }
                    >
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: topic.accent }}
                      />
                      {topic.shortLabel}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={reset}
                  disabled={!hasSelection}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-heading text-[0.875rem] font-semibold text-ivory/60 underline decoration-1 underline-offset-4 transition-colors duration-200 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory disabled:pointer-events-none disabled:opacity-40 disabled:no-underline"
                >
                  Show the overview
                </button>
              </div>

              <HumanChangeIntersections selected={selected} onSelectPair={selectPair} />
            </div>

            {/* No wrapper element. The panel is the grid item, so it stretches to
                the full height of the row and its bottom edge stays put as the
                content above it changes. */}
            <HumanChangeDetail
              topics={humanChangeTopics}
              selected={selected}
              active={active}
              centre={humanChangeCentre}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
