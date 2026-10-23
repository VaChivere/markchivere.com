import type { ReactNode } from 'react';
import HanddrawnArrow from './HanddrawnArrow';

interface EditorialAnnotationProps {
  children: ReactNode;
  /** The arrow is optional; omit it for a plain handwritten aside. */
  arrow?: 'none' | 'right' | 'left' | 'down';
  className?: string;
  arrowClassName?: string;
}

/**
 * A short handwritten aside. Unlike the drawings this text is meaningful, so
 * it renders as a real paragraph and is read out by assistive technology.
 */
export default function EditorialAnnotation({
  children,
  arrow = 'none',
  className = '',
  arrowClassName = '',
}: EditorialAnnotationProps) {
  return (
    <p className={`type-hand-sm text-bronze-ink ${className}`}>
      {children}
      {arrow !== 'none' && (
        <HanddrawnArrow
          direction={arrow}
          className={`ml-2 inline-block h-4 w-11 shrink-0 align-middle ${arrowClassName}`}
        />
      )}
    </p>
  );
}
