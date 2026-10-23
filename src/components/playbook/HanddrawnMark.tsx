type MarkVariant = 'underline' | 'circle' | 'check';

interface HanddrawnMarkProps {
  variant?: MarkVariant;
  className?: string;
}

const VIEWBOX: Record<MarkVariant, string> = {
  underline: '0 0 120 12',
  circle: '0 0 170 64',
  check: '0 0 24 20',
};

/* The underline is a stroke, so it is stretched to whatever it sits under.
   The closed shapes keep their own proportions. */
const FIT: Record<MarkVariant, string> = {
  underline: 'none',
  circle: 'xMidYMid meet',
  check: 'xMidYMid meet',
};

const PATH: Record<MarkVariant, { d: string; width: number }> = {
  underline: { d: 'M3 8C24 3 44 9 64 6C84 3 100 9 117 5', width: 2.2 },
  circle: {
    d: 'M96 5C132 8 164 16 163 33C162 50 122 59 83 59C44 59 7 50 7 33C7 17 44 6 92 5C104 5 112 5 118 6',
    width: 1.8,
  },
  check: { d: 'M3 11L9.5 17.5L21 3', width: 2.4 },
};

/**
 * Hand-drawn emphasis marks — an underline, a circling loop, a tick. Used to
 * annotate a phrase the way someone would mark up their own notebook.
 *
 * Decorative only — hidden from assistive technology.
 */
export default function HanddrawnMark({ variant = 'underline', className = '' }: HanddrawnMarkProps) {
  const { d, width } = PATH[variant];

  return (
    <svg
      viewBox={VIEWBOX[variant]}
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio={FIT[variant]}
      className={className}
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
