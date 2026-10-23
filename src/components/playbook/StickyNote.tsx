import type { ReactNode } from 'react';

type NoteTone = 'cream' | 'yellow';

interface StickyNoteProps {
  children: ReactNode;
  /** Optional provenance line, e.g. "Workshop notes". */
  label?: string;
  /** Warm cream or muted yellow. Use yellow where the note needs to lift. */
  tone?: NoteTone;
  /** Degrees of tilt. Keep within ±2.5° so the page stays composed. */
  rotation?: number;
  className?: string;
}

const TONE: Record<NoteTone, { surface: string; strip: string; fold: string }> = {
  cream: {
    surface: 'bg-note border-note-edge/60',
    strip: 'bg-bronze/15',
    fold: 'text-note-edge',
  },
  yellow: {
    surface: 'bg-note-warm border-note-warm-edge/70',
    strip: 'bg-bronze/20',
    fold: 'text-note-warm-edge',
  },
};

/**
 * A paper note from Mark's professional notebook.
 *
 * The note carries real prose, so it is exposed to assistive technology with
 * role="note". The adhesive strip and the folded corner are decorative.
 */
export default function StickyNote({
  children,
  label,
  tone = 'cream',
  rotation = -1.5,
  className = '',
}: StickyNoteProps) {
  const { surface, strip, fold } = TONE[tone];

  return (
    <div
      role="note"
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`relative rounded-[2px] border px-5 py-4 shadow-[0_12px_26px_-18px_rgba(25,42,56,0.5)] ${surface} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-[3px] rounded-t-[2px] ${strip}`}
      />
      <p className="type-hand text-navy">{children}</p>
      {label && <p className="type-meta mt-2 text-bronze-ink">{label}</p>}

      {/* Folded corner — the underside of the lifted paper. */}
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        focusable="false"
        className={`absolute right-0 bottom-0 h-3.5 w-3.5 ${fold}`}
      >
        <path d="M16 0V16H0L16 0Z" fill="currentColor" opacity="0.55" />
      </svg>
    </div>
  );
}
