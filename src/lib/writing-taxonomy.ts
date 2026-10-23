/**
 * Editorial taxonomy for the /writing library.
 *
 * Kept in its own module (rather than inside writing.ts) so that the blog data
 * layer and the Substack feed reader can both use it without creating a circular
 * import between each other.
 *
 * This taxonomy is deliberately separate from `BlogPost.category`, which remains
 * the legacy taxonomy used by the archived /insights index. Keeping them apart
 * means the repositioning does not rewrite existing (indexed) content metadata.
 */
export const WRITING_CATEGORIES = [
  'Leadership & Behaviour',
  'Learning & Capability',
  'Change & AI',
  'Organisations & Performance',
  'Personal Reflections',
] as const;

export type WritingCategory = (typeof WRITING_CATEGORIES)[number];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatArticleDate(date: Date): string {
  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** Normalises the mixed date formats found in content into one shape. */
export function normaliseDate(value: string): { iso: string; label: string } {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return { iso: value, label: value };
  return { iso: parsed.toISOString(), label: formatArticleDate(parsed) };
}
