'use client';

import type { HumanChangeTopic, TopicId } from '@/lib/human-change-data';

/**
 * Node centres as percentages of the square canvas.
 *
 * These are identical at every breakpoint, because the SVG connectors use the
 * same coordinates and must stay attached to the nodes. Only the node diameter
 * changes between sizes, which re-proportions the composition on small screens
 * rather than uniformly shrinking it.
 */
const NODE_GEOMETRY: Record<TopicId, { x: number; y: number; position: string }> = {
  teams: { x: 28.8, y: 28.8, position: 'left-[28.8%] top-[28.8%]' },
  leadership: { x: 71.2, y: 28.8, position: 'left-[71.2%] top-[28.8%]' },
  learning: { x: 28.8, y: 71.2, position: 'left-[28.8%] top-[71.2%]' },
  ai: { x: 71.2, y: 71.2, position: 'left-[71.2%] top-[71.2%]' },
};

export type NodeState = 'selected' | 'active' | 'dim' | 'idle';

/** Eight-digit hex is not everywhere, so alpha is applied explicitly. */
export function withAlpha(hex: string, alpha: number): string {
  const value = parseInt(hex.slice(1), 16);
  return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
}

/**
 * A node is emphasised if it is selected, or if it is the one under the pointer
 * or keyboard focus. Everything else steps back — but only in its strokes and
 * fills. Label contrast is handled separately so de-emphasis never pushes text
 * below AA.
 */
export function nodeState(id: TopicId, selected: TopicId[], active: TopicId | null): NodeState {
  if (selected.includes(id)) return 'selected';
  if (active === id) return 'active';
  const somethingElseHasFocus = active !== null || selected.length > 0;
  return somethingElseHasFocus ? 'dim' : 'idle';
}

function nodeSurface(state: NodeState, accent: string) {
  // The site's global focus ring is bronze, which is only 3.7:1 against navy.
  // Pairing the ring with the node's own colour keeps it both legible (6.5–8.9:1)
  // and identifiable. outlineColor is inert until :focus-visible sets a style.
  const focusRing = { outlineColor: withAlpha(accent, 0.95) };

  switch (state) {
    case 'selected':
      return {
        ...focusRing,
        borderColor: withAlpha(accent, 0.95),
        backgroundColor: withAlpha(accent, 0.16),
        boxShadow: `0 0 0 1px ${withAlpha(accent, 0.9)}, 0 0 0 9px ${withAlpha(accent, 0.1)}`,
      };
    case 'active':
      return {
        ...focusRing,
        borderColor: withAlpha(accent, 0.9),
        backgroundColor: withAlpha(accent, 0.12),
        boxShadow: `0 0 0 1px ${withAlpha(accent, 0.7)}`,
      };
    case 'dim':
      return {
        ...focusRing,
        borderColor: withAlpha(accent, 0.22),
        backgroundColor: withAlpha(accent, 0.02),
        boxShadow: 'none',
      };
    default:
      return {
        ...focusRing,
        borderColor: withAlpha(accent, 0.55),
        backgroundColor: withAlpha(accent, 0.05),
        boxShadow: 'none',
      };
  }
}

/** Connector weight and brightness, matched to the node it runs to. */
function connectorStyle(state: NodeState) {
  switch (state) {
    case 'selected':
      return { strokeOpacity: 1, strokeWidth: 1.5, dashed: false };
    case 'active':
      return { strokeOpacity: 0.9, strokeWidth: 1.25, dashed: false };
    case 'dim':
      return { strokeOpacity: 0.16, strokeWidth: 1, dashed: true };
    default:
      return { strokeOpacity: 0.4, strokeWidth: 1, dashed: true };
  }
}

interface HumanChangeDiagramProps {
  topics: HumanChangeTopic[];
  selected: TopicId[];
  active: TopicId | null;
  /** Full accessible description of the central concept. */
  centreLabel: string;
  centreDescription: string;
  onToggle: (id: TopicId) => void;
  onActivate: (id: TopicId | null) => void;
}

export default function HumanChangeDiagram({
  topics,
  selected,
  active,
  centreLabel,
  centreDescription,
  onToggle,
  onActivate,
}: HumanChangeDiagramProps) {
  // Only a real mouse produces hover. Touch fires pointerenter immediately
  // before the tap, which would leave a node stuck in its hovered state.
  const handlePointerEnter = (event: React.PointerEvent<HTMLButtonElement>, id: TopicId) => {
    if (event.pointerType === 'mouse') onActivate(id);
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === 'mouse') onActivate(null);
  };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[21rem] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[34rem]">
      {/* Connections to the centre. Decorative: every relationship it draws is
          also stated in the panel text, so nothing here is load-bearing. */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        {topics.map((topic) => {
          const geometry = NODE_GEOMETRY[topic.id];
          const state = nodeState(topic.id, selected, active);
          const { strokeOpacity, strokeWidth, dashed } = connectorStyle(state);

          return (
            <line
              key={topic.id}
              x1={`${geometry.x}%`}
              y1={`${geometry.y}%`}
              x2="50%"
              y2="50%"
              stroke={topic.accent}
              strokeWidth={strokeWidth}
              strokeOpacity={strokeOpacity}
              strokeDasharray={dashed ? '2 5' : undefined}
              className="transition-[stroke-opacity,stroke-width] duration-200"
            />
          );
        })}

        {/* The chord between two selected areas — the intersection made visible. */}
        {selected.length === 2 && (
          <line
            x1={`${NODE_GEOMETRY[selected[0]].x}%`}
            y1={`${NODE_GEOMETRY[selected[0]].y}%`}
            x2={`${NODE_GEOMETRY[selected[1]].x}%`}
            y2={`${NODE_GEOMETRY[selected[1]].y}%`}
            stroke="#f7f5f0"
            strokeWidth={1}
            strokeOpacity={0.4}
            strokeDasharray="2 5"
          />
        )}
      </svg>

      {/* The centre. Not a control: it is the concept, and the explicit
          "Show the overview" button in the control strip is the way back. */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 flex aspect-square w-[44%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-bronze-light/40 bg-white/[0.05] px-4 text-center md:w-[36%]">
        <span className="type-eyebrow mb-2 text-bronze-light/85">Centre</span>
        <span className="font-heading text-[0.9375rem] font-semibold leading-tight text-ivory md:text-lg">
          {centreLabel}
        </span>
        <span className="sr-only">{centreDescription}</span>
      </div>

      {/* The fields. Real buttons, so keyboard focus, tap targets and selection
          state are all native rather than simulated on SVG shapes. */}
      {topics.map((topic) => {
        const geometry = NODE_GEOMETRY[topic.id];
        const state = nodeState(topic.id, selected, active);
        const isSelected = state === 'selected';
        const isDim = state === 'dim';

        return (
          <button
            key={topic.id}
            type="button"
            aria-pressed={isSelected}
            aria-label={topic.title}
            onClick={() => onToggle(topic.id)}
            onPointerEnter={(event) => handlePointerEnter(event, topic.id)}
            onPointerLeave={handlePointerLeave}
            onFocus={() => onActivate(topic.id)}
            onBlur={() => onActivate(null)}
            className={`absolute flex aspect-square w-[40%] -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center justify-center rounded-full border px-3 text-center transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 md:w-[31%] ${geometry.position} ${
              state === 'active' ? 'scale-[1.03]' : 'scale-100'
            }`}
            style={nodeSurface(state, topic.accent)}
            data-topic={topic.id}
            data-state={state}
          >
            <span
              aria-hidden="true"
              className="type-meta mb-1 block"
              style={{ color: withAlpha(topic.accent, isDim ? 0.7 : 0.95) }}
            >
              {topic.index}
            </span>
            <span
              className={`font-heading text-[0.8125rem] font-semibold leading-tight md:text-[0.9375rem] ${
                isDim ? 'text-ivory/70' : 'text-ivory'
              }`}
            >
              {topic.shortLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}
