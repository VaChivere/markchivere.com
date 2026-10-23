interface CoachBoardProps {
  /** "board" is a tactics whiteboard; "clipboard" is a coach's paper note pad. */
  variant?: 'board' | 'clipboard';
  className?: string;
}

/**
 * The coach's board: a tactics whiteboard with a drawn play, or a clipboard of
 * paper notes. Same hand and same brand strokes as the rest of the playbook.
 *
 * Decorative only — hidden from assistive technology.
 */
export default function CoachBoard({ variant = 'board', className = '' }: CoachBoardProps) {
  if (variant === 'clipboard') {
    return (
      <svg
        viewBox="0 0 160 190"
        fill="none"
        aria-hidden="true"
        focusable="false"
        className={className}
      >
        {/* Clip */}
        <rect
          x="62"
          y="2"
          width="36"
          height="15"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <rect x="75" y="0" width="10" height="5" rx="2" fill="currentColor" opacity="0.3" />

        {/* Paper */}
        <rect
          x="20"
          y="10"
          width="120"
          height="172"
          rx="6"
          stroke="currentColor"
          strokeWidth="1.5"
          className="fill-note"
        />

        {/* Heading */}
        <path
          d="M38 34H92"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.3"
        />

        {/* Sketched play */}
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="42" cy="68" r="3.5" fill="currentColor" stroke="none" opacity="0.7" />
          <path d="M48 70C64 78 80 58 96 62" strokeDasharray="3.5 4.5" opacity="0.7" />
          <path d="M91.5 57.4L96 62L89.6 64" opacity="0.7" />
          <path d="M100 44L107 51L120 34" opacity="0.5" />
        </g>

        {/* Notes */}
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.18">
          <path d="M38 122H122" />
          <path d="M38 142H122" />
          <path d="M38 162H94" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* Board and tray */}
      <rect
        x="8"
        y="10"
        width="184"
        height="120"
        rx="5"
        fill="#ffffff"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="70" y="131" width="60" height="5" rx="2" fill="currentColor" opacity="0.15" />

      {/* Pitch */}
      <rect
        x="26"
        y="30"
        width="148"
        height="82"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.3"
      />
      <line
        x1="100"
        y1="30"
        x2="100"
        y2="112"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.14"
      />
      <line
        x1="26"
        y1="71"
        x2="174"
        y2="71"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 6"
        opacity="0.14"
      />

      {/* Cones */}
      <path d="M44 98L49 88L54 98Z" fill="currentColor" opacity="0.3" />
      <path d="M146 98L151 88L156 98Z" fill="currentColor" opacity="0.3" />

      {/* Attackers */}
      <g fill="currentColor" opacity="0.7">
        <circle cx="62" cy="70" r="3.5" />
        <circle cx="84" cy="92" r="3.5" />
      </g>

      {/* Defence */}
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
        <path d="M117 61L125 69M125 61L117 69" />
        <path d="M139 83L147 91M147 83L139 91" />
      </g>

      {/* Movement */}
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M66 74C82 94 98 92 116 84" strokeDasharray="4 5" opacity="0.75" />
        <path d="M109.7 91.9L116 84L105.9 83.5" opacity="0.75" />
      </g>
    </svg>
  );
}
