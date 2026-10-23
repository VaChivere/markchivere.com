import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'inverse-outline' | 'quiet';
type ButtonSize = 'sm' | 'md' | 'lg';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 disabled:opacity-60 disabled:pointer-events-none';

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-navy text-ivory hover:bg-navy-soft',
  secondary: 'border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-ivory',
  inverse: 'bg-ivory text-navy hover:bg-white',
  // For the second action when a pair sits on navy: the filled `inverse` carries
  // the primary weight and this is its outlined partner. The border is
  // ivory/50 rather than a token because it has to clear 3:1 against navy as a
  // non-text boundary, and none of the palette's light tones do that.
  'inverse-outline':
    'border border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory/10',
  quiet: 'text-navy underline-offset-4 hover:text-bronze-ink hover:underline',
};

const SIZES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[0.9375rem]',
  lg: 'px-7 py-3.5 text-base',
};

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  /** Renders an <a> instead of a next/link — use for other domains. */
  external?: boolean;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
}

/**
 * The site's only button. Every action across the site uses this component so
 * radius, weight, padding and hover behaviour stay identical.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  external = false,
  target,
  rel,
  type = 'button',
  disabled,
  onClick,
  ...aria
}: ButtonProps) {
  const sizing = variant === 'quiet' ? '' : SIZES[size];
  const classes = `${BASE} ${VARIANTS[variant]} ${sizing} ${className}`.replace(/\s+/g, ' ').trim();

  if (href && external) {
    return (
      <a
        href={href}
        target={target ?? '_blank'}
        rel={rel ?? 'noopener noreferrer'}
        className={classes}
        onClick={onClick}
        {...aria}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick} {...aria}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes} {...aria}>
      {children}
    </button>
  );
}
