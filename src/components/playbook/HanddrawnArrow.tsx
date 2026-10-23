import type { SVGProps } from 'react';

type ArrowDirection = 'right' | 'left' | 'down' | 'downRight';

interface HanddrawnArrowProps extends Omit<SVGProps<SVGSVGElement>, 'direction'> {
  direction?: ArrowDirection;
}

/*
 * Rotating a single drawing keeps every arrow in the same hand. A scale flip
 * is used for "left" so the curve still reads as drawn with the same wrist.
 */
const ORIENTATION: Record<ArrowDirection, string> = {
  right: '',
  left: '-scale-x-100',
  down: 'rotate-90',
  downRight: 'rotate-45',
};

/**
 * A short, deliberately wobbly annotation arrow. Purely decorative — it is
 * always hidden from assistive technology and never carries meaning.
 */
export default function HanddrawnArrow({
  direction = 'right',
  className = '',
  ...rest
}: HanddrawnArrowProps) {
  return (
    <svg
      viewBox="0 0 72 30"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`${ORIENTATION[direction]} ${className}`}
      {...rest}
    >
      <g stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 19.5C12.5 8.5 25 4.5 36.5 9.2C45 12.9 53 19 63 15.5" />
        <path d="M56.8 9.9L63 15.5L54.6 18.2" />
      </g>
    </svg>
  );
}
