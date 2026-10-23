interface RugbyPlayDiagramProps {
  /** "posts" is the goalposts alone; "play" adds a dashed running line. */
  variant?: 'posts' | 'play';
  className?: string;
}

/**
 * Fine-line rugby markings drawn in the same hand as the rest of the playbook.
 * Colour is inherited through currentColor so callers can use any brand token.
 *
 * Decorative only — hidden from assistive technology.
 */
export default function RugbyPlayDiagram({
  variant = 'posts',
  className = '',
}: RugbyPlayDiagramProps) {
  const isPlay = variant === 'play';

  return (
    <svg
      viewBox="0 0 120 96"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        {/* Pitch markings */}
        <line x1="12" y1="86" x2="108" y2="86" opacity="0.35" />
        <line x1="12" y1="92" x2="108" y2="92" opacity="0.14" />

        {/* Posts. The crossbar sits just above the halfway point of the uprights
            — 3 m of crossbar under a 6.4 m post, which is 54% of the post
            height. Drawing it higher reads as decorative rather than accurate. */}
        <line x1="34" y1="86" x2="34" y2="8" />
        <line x1="86" y1="86" x2="86" y2="8" />
        <line x1="34" y1="44" x2="86" y2="44" />
      </g>

      {isPlay && (
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Dashed running line */}
          <path d="M18 76C30 60 42 68 52 54" strokeDasharray="4 5" />
          <path d="M51.3 61L52 54L45.6 56.9" />
          <circle cx="18" cy="76" r="3.5" fill="currentColor" stroke="none" />
          <circle cx="52" cy="54" r="3.5" fill="currentColor" stroke="none" />
        </g>
      )}
    </svg>
  );
}
