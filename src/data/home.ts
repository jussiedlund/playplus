export type Retailer = { name: string; url: string };
export type Endorsement = { quote: string; name: string; role: string; image: string; imageAlt: string };
export type Author = { name: string; bio: string; image: string; alt: string };
export type MoveCard = { group: 'On your own' | 'With us'; kicker: string; title: string; body: string; linkLabel?: string; href?: string; tone: 'blue' | 'yellow' };

export const retailers: Retailer[] = [
  { name: 'Amazon', url: 'https://www.amazon.com/' },
  { name: 'Waterstones', url: 'https://www.waterstones.com/' },
  { name: 'Barnes & Noble', url: 'https://www.barnesandnoble.com/' },
  { name: 'Bookshop.org', url: 'https://bookshop.org/' },
  { name: 'Apple Books', url: 'https://books.apple.com/' },
];

// These entries intentionally reproduce the current Figma frame verbatim, including
// its duplicate Ed Catmull card and “Mumintrollet” placeholder attribution.
export const endorsements: Endorsement[] = [
  {
    quote: 'Most books about innovation focus on what to build. This one focuses on the conditions that make building possible — and gets it exactly right. I wish I’d had this book twenty years ago.',
    name: 'Ed Catmull',
    role: 'co-founder of Pixar and author of Creativity, Inc.',
    image: '/assets/content/ed-catmull.webp',
    imageAlt: 'Ed Catmull',
  },
  {
    quote: 'Most books about innovation focus on what to build. This one focuses on the conditions that make building possible — and gets it exactly right. I wish I’d had this book twenty years ago.',
    name: 'Ed Catmull',
    role: 'co-founder of Pixar and author of Creativity, Inc.',
    image: '/assets/content/ed-catmull.webp',
    imageAlt: 'Ed Catmull',
  },
  {
    quote: 'Most books about innovation focus on what to build. This one focuses on the conditions that make building possible — and gets it exactly right. I wish I’d had this book twenty years ago.',
    name: 'Mumintrollet',
    role: 'co-founder of Pixar and author of Creativity, Inc.',
    image: '/assets/content/moomin.webp',
    imageAlt: 'Moomintrollet',
  },
];

export const authors: Author[] = [
  {
    name: 'Olof Schybergson',
    image: '/assets/content/olof.webp',
    alt: 'Portrait of Olof Schybergson',
    bio: 'Olof co-founded Fjord in 2001, turning it into a top design firm with global studios. After Accenture acquired Fjord in 2013, he led 4,000 designers, serving diverse clients for a decade. He is now CEO of Colossus, a consultancy focused on innovation and memorable experiences, based in Surrey.',
  },
  {
    name: 'Mark Curtis',
    image: '/assets/content/mark.webp',
    alt: 'Portrait of Mark Curtis',
    bio: 'Mark co-founded Fjord in 2001 as Chief Client Officer, shaping its creative culture and client relationships. A writer and strategist, he led Fjord’s thought leadership, including Fjord Trends, and designed Play+ practices. Mark publishes essays monthly and advises the Lib Dems on AI, also serving as an Advisor to Colossus.',
  },
];

export const moveCards: MoveCard[] = [
  {
    group: 'On your own',
    kicker: 'Play+',
    title: 'At a glance',
    body: 'A one-page visual summary of the six essentials, ten "+" elements, four structures, and four outcomes. Pin it to your wall, share it with your team, bring it to your next leadership conversation.',
    linkLabel: 'Download PDF',
    href: '/resources/play-plus-at-a-glance',
    tone: 'blue',
  },
  {
    group: 'On your own',
    kicker: 'Six essentials',
    title: 'Self-check',
    body: 'A simple worksheet for teams to honestly assess which essentials are strong, which are absent, and where to focus first.',
    linkLabel: 'Download PDF',
    href: '/resources/six-essentials-self-check',
    tone: 'blue',
  },
  {
    group: 'With us',
    kicker: 'Keynote',
    title: 'Talks',
    body: '45–60 minutes for a conference stage or a leadership offsite. Olof and Mark make the case that play is the foundation of breakthrough work, and that most organisations are running a warehouse while calling it a playground. One speaker or both.',
    tone: 'yellow',
  },
  {
    group: 'With us',
    kicker: 'Play+',
    title: 'Workshops',
    body: 'Half a day or a full day with your leadership team. You’ll map your organisation against the six essentials, argue honestly about which are present and which are absent, choose the "+" elements worth your energy, and leave with one specific move each.',
    tone: 'yellow',
  },
];
