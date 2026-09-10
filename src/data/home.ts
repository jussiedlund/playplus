export type Retailer = { name: string; url: string };
export type Endorsement = { quote: string; name: string; role: string; pending?: boolean };
export type Author = { name: string; bio: string; alt: string };
export type Essential = {
  name: string;
  slug: string;
  layer: 'Activator' | 'Stage' | 'Team';
  asset: string;
};
export type Card = { eyebrow: string; title: string; body: string; linkLabel?: string; href?: string; tone: 'blue' | 'yellow' };

export const retailers: Retailer[] = [
  { name: 'Amazon', url: 'https://www.amazon.com/' },
  { name: 'Waterstones', url: 'https://www.waterstones.com/' },
  { name: 'Barnes & Noble', url: 'https://www.barnesandnoble.com/' },
  { name: 'Bookshop.org', url: 'https://bookshop.org/' },
  { name: 'Apple Books', url: 'https://books.apple.com/' },
];

export const endorsements: Endorsement[] = [
  {
    quote: 'Most books about innovation focus on what to build. This one focuses on the conditions that make building possible — and gets it exactly right. I wish I’d had this book twenty years ago.',
    name: 'Ed Catmull',
    role: 'Co-founder of Pixar and author of Creativity, Inc.',
  },
  { quote: 'Endorsement copy pending client sign-off.', name: 'Amy Edmondson', role: 'Author and Harvard Business School professor', pending: true },
  { quote: 'Endorsement copy pending client sign-off.', name: 'Adam Grant', role: 'Organisational psychologist and author', pending: true },
];

export const essentials: Essential[] = [
  { name: 'Radical Transparency', slug: 'radical-transparency', layer: 'Stage', asset: '/assets/figma/radical-transparency.svg' },
  { name: 'Blend and Build', slug: 'blend-and-build', layer: 'Activator', asset: '/assets/figma/blend-and-build.svg' },
  { name: 'Space to Explore', slug: 'space-to-explore', layer: 'Activator', asset: '/assets/figma/space-to-explore.svg' },
  { name: 'Flat by Design', slug: 'flat-by-design', layer: 'Team', asset: '/assets/figma/flat-by-design.svg' },
  { name: 'Player Mindset', slug: 'player-mindset', layer: 'Team', asset: '/assets/figma/player-mindset.svg' },
  { name: 'Freedom Within Form', slug: 'freedom-within-form', layer: 'Stage', asset: '/assets/figma/freedom-within-form.svg' },
];

export const authors: Author[] = [
  {
    name: 'Olof Schybergson',
    alt: 'Portrait of Olof Schybergson — pending final asset',
    bio: 'Olof co-founded Fjord in 2001, turning it into a top design firm with global studios. After Accenture acquired Fjord in 2013, he led 4,000 designers, serving diverse clients for a decade. He is now CEO of Colossus, a consultancy focused on innovation and memorable experiences, based in Surrey.',
  },
  {
    name: 'Mark Curtis',
    alt: 'Portrait of Mark Curtis — pending final asset',
    bio: 'Mark co-founded Fjord in 2001 as Chief Client Officer, shaping its creative culture and client relationships. A writer and strategist, he led Fjord’s thought leadership, including Fjord Trends, and designed Play+ practices. Mark publishes essays monthly and advises the Lib Dems on AI, also serving as an Advisor to Colossus.',
  },
];

export const cards: Card[] = [
  { eyebrow: 'On your own', title: 'Play+ at a glance', body: 'A one-page visual summary of the six essentials, ten “+” elements, four structures, and four outcomes. Pin it to your wall, share it with your team, bring it to your next leadership conversation.', linkLabel: 'Download PDF', href: '/resources/play-plus-at-a-glance', tone: 'blue' },
  { eyebrow: 'On your own', title: 'Six essentials self-check', body: 'A simple worksheet for teams to honestly assess which essentials are strong, which are absent, and where to focus first.', linkLabel: 'Download PDF', href: '/resources/six-essentials-self-check', tone: 'blue' },
  { eyebrow: 'With us', title: 'Keynote talks', body: '45–60 minutes for a conference stage or a leadership offsite. Olof and Mark make the case that play is the foundation of breakthrough work, and that most organisations are running a warehouse while calling it a playground. One speaker or both.', tone: 'yellow' },
  { eyebrow: 'With us', title: 'Play+ workshops', body: 'Half a day or a full day with your leadership team. You’ll map your organisation against the six essentials, argue honestly about which are present and which are absent, choose the “+” elements worth your energy, and leave with one specific move each.', tone: 'yellow' },
];
