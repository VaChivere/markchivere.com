/**
 * Where My Interests Sit — content and pairings.
 *
 * This is a personal map of interests rather than a service list, so the copy
 * lives here instead of inside the components. The diagram, the detail panel
 * and the intersection logic all read from these objects, which means the
 * content can be re-worded, re-ordered or extended without touching
 * interaction code.
 *
 * The four areas echo the "Themes" section already on the homepage but are not
 * the same taxonomy. That section answers "what do you think about"; this one
 * answers "how do these four things connect".
 */

export type TopicId = 'teams' | 'leadership' | 'learning' | 'ai';

export interface TopicLink {
  label: string;
  href: string;
}

export interface HumanChangeTopic {
  id: TopicId;
  /** Printed on the node and in the panel. */
  index: string;
  title: string;
  /** Node label — the full title does not fit inside a node. */
  shortLabel: string;
  /** One line, shown when a node is hovered or focused. */
  summary: string;
  description: string;
  questions: string[];
  /** How the area connects back to the central concept. */
  connection: string;
  /**
   * Node and connector colour. These four are the only saturated colours on the
   * site and they are deliberately confined to this component.
   *
   * They only work on navy. Measured against the ivory page surface they come
   * in at 1.5–2.1:1, which is unusable for anything; against navy they run
   * 6.5–8.9:1. That measurement is the reason the diagram sits on a dark field
   * rather than on the page surface, and why no darker variants were invented.
   */
  accent: string;
  /**
   * Only destinations that actually exist. An empty array is a valid state: the
   * AI area has no published article behind it yet, so it shows no links rather
   * than a placeholder pointing nowhere.
   */
  links: TopicLink[];
}

export interface HumanChangeIntersection {
  pair: [TopicId, TopicId];
  /** How the two areas meet. */
  insight: string;
  /** The question the pairing opens up. */
  question: string;
}

export const humanChangeCentre = {
  label: 'Intersection of Interests',
  question:
    'What does it actually take for people to change how they work, individually and together?',
  intro:
    'Four areas I keep returning to, and the question underneath all of them. They are not separate interests — each one is another way of looking at the same problem.',
} as const;

export const humanChangeTopics: HumanChangeTopic[] = [
  {
    id: 'teams',
    index: '01',
    title: 'Teams and Collective Performance',
    shortLabel: 'Teams',
    summary: 'Why talent in a room is not the same thing as a team that performs.',
    description:
      'Why talented individuals do not automatically make effective teams, and what it takes to build trust, alignment and the ability to perform together.',
    questions: [
      'Why do some groups of talented people struggle to work effectively together?',
      'What creates trust and accountability when the pressure is on?',
      'How do teams move from individual excellence to collective performance?',
    ],
    connection:
      'Collective performance is where change becomes visible. It either shows up in how a group works together, or it does not show up at all.',
    accent: '#5BD5CC',
    links: [
      {
        label: 'The Meetings Where Trust Actually Happens',
        href: '/insights/meetings-where-trust-actually-happens',
      },
    ],
  },
  {
    id: 'leadership',
    index: '02',
    title: 'Leadership and Behaviour',
    shortLabel: 'Leadership',
    summary: 'What leaders do that shifts behaviour, and why intent is not enough.',
    description:
      'What leaders do that actually shifts behaviour, and why good intentions so often fail to survive the working week.',
    questions: [
      'What do leaders actually do that changes behaviour?',
      'Why do good intentions disappear under everyday pressure?',
      'How do leaders create the conditions for lasting change?',
    ],
    connection:
      'What leaders do consistently, rather than what they intend, is the most direct lever on behaviour — which is why leadership runs through everything else here.',
    accent: '#F7A17E',
    links: [
      {
        label: 'The Difficult Conversations That Build Trust',
        href: '/insights/difficult-conversations-that-build-trust',
      },
    ],
  },
  {
    id: 'learning',
    index: '03',
    title: 'Learning and Change',
    shortLabel: 'Learning',
    summary: 'Why understanding something is not the same as being able to do it.',
    description:
      'How people build capability, change established habits and turn new knowledge into better ways of working.',
    questions: [
      'Why does so much learning fail to transfer into everyday work?',
      'What makes new capabilities stick?',
      'How do we design learning around performance rather than attendance?',
    ],
    connection:
      'Learning is change made deliberate: the attempt to make something stick rather than merely be understood.',
    accent: '#B5A1F2',
    links: [
      {
        label: 'Trust Isn’t Built in Workshops',
        href: '/insights/trust-isnt-built-in-workshops',
      },
    ],
  },
  {
    id: 'ai',
    index: '04',
    title: 'AI, Technology and Adoption',
    shortLabel: 'Technology',
    summary: 'Why deploying a tool and changing how people work are different problems.',
    description:
      'Why introducing new technology is often easier than changing how people use it, and what building products teaches me about that gap.',
    questions: [
      'Why does deploying technology rarely guarantee adoption?',
      'What makes people change established ways of working?',
      'What does building technology products reveal about organisational change?',
    ],
    connection:
      'Adoption is a change problem first and a technical problem second. Building products is what made that ordering obvious to me.',
    accent: '#E4C679',
    // No published article sits behind this area yet, so it carries no links.
    links: [],
  },
];

/**
 * The six pairings, in the order the brief lists them. Exported so the
 * intersection chooser can offer them explicitly rather than leaving visitors
 * to find them by clicking around the diagram.
 */
export const humanChangeIntersections: HumanChangeIntersection[] = [
  {
    pair: ['teams', 'leadership'],
    insight:
      'How leadership behaviour shapes trust, accountability and collective performance.',
    question: 'What does a leader do on a bad week that a good one does not?',
  },
  {
    pair: ['teams', 'learning'],
    insight:
      'How teams develop shared habits, feedback practices and the ability to improve together.',
    question: 'How does a team notice it is getting better, rather than just busier?',
  },
  {
    pair: ['teams', 'ai'],
    insight:
      'How technology changes collaboration, decision-making and the way teams coordinate their work.',
    question: 'When part of the work is done by a machine, what is left for a team to coordinate?',
  },
  {
    pair: ['leadership', 'learning'],
    insight: 'How leaders create the conditions for learning to become sustained behaviour.',
    question: 'What turns a course into a habit?',
  },
  {
    pair: ['leadership', 'ai'],
    insight:
      'Why AI adoption depends as much on leadership behaviour as on technical capability.',
    question: 'Who is accountable when the technology is adopted but the behaviour is not?',
  },
  {
    pair: ['learning', 'ai'],
    insight:
      'How people develop the confidence, skills and habits needed to use new technology effectively.',
    question: 'What has to be learned before the tool becomes useful?',
  },
];

/** Pairing order is not significant — the lookup is symmetric. */
export function findIntersection(
  first: TopicId,
  second: TopicId
): HumanChangeIntersection | undefined {
  return humanChangeIntersections.find(
    ({ pair }) =>
      (pair[0] === first && pair[1] === second) || (pair[0] === second && pair[1] === first)
  );
}

export function findTopic(id: TopicId): HumanChangeTopic | undefined {
  return humanChangeTopics.find((topic) => topic.id === id);
}
