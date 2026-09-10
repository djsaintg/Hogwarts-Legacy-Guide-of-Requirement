import type { House, Phase, Quest, Verdict } from '../types';

const fq = (name: string) =>
`https://hogwarts-legacy.fandom.com/wiki/${name.replace(/ /g, '_')}`;

let n = 0;
const Q = (
    name: string,
    phase: Phase,
    unlocks: string[],
    verdict: Verdict,
    note: string,
    extra: Partial<Quest> = {},
): Quest => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
             name,
             type: 'main',
             phase,
             order: ++n,
             unlocks,
             verdict,
             note,
             walkthrough: fq(name),
             ...extra,
});

export const MAINS: Quest[] = [
    Q('The Path to Hogwarts', 1, ['Tutorial', 'Ancient Magic intro'], 'story', 'Learn the ropes.'),
    Q('Welcome to Hogwarts', 1, ['Sorting Ceremony'], 'story', 'You get sorted — create your app profile here, for flavour.'),
    Q('Charms Class', 1, ['Accio'], 'story', 'Your first pull.'),
    Q('Defence Against the Dark Arts Class', 1, ['Levioso', 'Crossed Wands (side)'], 'story', 'Levioso; duelling club opens.'),
    Q('Weasley After Class', 1, ["Ronen's Assignment — Reparo"], 'story', 'First assignment unlocks.'),

    Q('Welcome to Hogsmeade', 2, ['Hogsmeade shops & vendors', 'Hogsmeade side quests'], 'story', 'Vendors, wand, first dungeon.'),
    Q("The Locket's Secret", 2, ["Hecat's Assignment 1 — Incendio"], 'story', 'Do the assignment immediately.'),
    Q('Secrets of the Restricted Section', 2, ['Disillusionment'], 'story', 'Stealth 101 — learn it well, Phantoms.'),
    Q('Tomes and Tribulations', 2, ["Hecat's Assignment 2 — Expelliarmus"], 'story', 'Critical path: gates Jackdaw\'s Rest.'),
    Q('The Girl from Uagadou', 2, ['First Highlands outing'], 'story', 'First steps outside — stay on the path.'),
    Q('Herbology Class', 2, ['Potted combat plants', 'Dittany seeds'], 'story', 'Grow-your-own combat begins.'),
    Q('Potions Class', 2, ['Wiggenweld & Edurus brewing'], 'story', 'Potion bench basics.'),

    Q('Trials of Merlin', 3, ['Merlin Trials', 'Exploration Challenges rewards'], 'detour',
      'The law: never pass a trial. First +4 slots at 2 — claim them in Challenges.'),

{
    id: 'house-gryffindor', name: 'The Hunt for the Missing Pages', type: 'main', phase: 3, order: 14,
    unlocks: ['House story beat'], verdict: 'story',
    note: 'Gryffindor’s flavour beat.',
    walkthrough: fq('The Hunt for the Missing Pages'), onlyHouse: 'gryffindor',
},
{
    id: 'house-ravenclaw', name: "Ollivander's Heirloom", type: 'main', phase: 3, order: 14,
    unlocks: ['House story beat'], verdict: 'story',
    note: 'Ravenclaw’s flavour beat.',
    walkthrough: fq("Ollivander's Heirloom"), onlyHouse: 'ravenclaw',
},
{
    id: 'house-hufflepuff', name: 'Prisoner of Love', type: 'main', phase: 3, order: 14,
    unlocks: ['House story beat'], verdict: 'story',
    note: 'Hufflepuff’s flavour beat — and the only Azkaban visit in the game.',
    walkthrough: fq('Prisoner of Love'), onlyHouse: 'hufflepuff',
},
{
    id: 'house-slytherin', name: "Scrope's Last Hope", type: 'main', phase: 3, order: 14,
    unlocks: ['House story beat'], verdict: 'story',
    note: 'Slytherin’s flavour beat.',
    walkthrough: fq("Scrope's Last Hope"), onlyHouse: 'slytherin',
},

Q("Jackdaw's Rest", 3,
  ['Talent system — all 36 points', "Sharp's Assignments — Depulso, Diffindo", 'The Map Chamber path'],
  'story', 'The big gate: talents go online the moment this falls.',
  { prereq: 'assignment-hecat-2' }),

Q('Flying Class', 4, ['Broom flight', 'Spintwitches purchases', 'Flight Test (side)'], 'explore',
  'Wheels! Bring 600g — then do Flight Test on your way out.', { breakpoint: 'light' }),

Q('The Room of Requirement', 5, ['Room of Requirement', "Garlick's Assignment 1 — Wingardium Leviosa"],
  'explore', 'Home base online — pause, brew, grow, stock.', { breakpoint: 'pause' }),
Q('In the Shadow of the Undercroft', 5, ['Confringo (Sebastian)'], 'story', "Sebastian's line warms up."),
Q('The Map Chamber', 5, ["Garlick's Assignment 2 — Flipendo", "Kogawa's Assignments — Glacius, Arresto Momentum"],
  'story', 'Three assignments unlock at once.', { prereq: 'jackdaws-rest' }),
Q("Percival Rackham's Trial", 5, ["Onai's Assignment — Descendo", 'Broom Upgrade 1 available*'],
  'story', 'First Keeper trial. *Flight Test done + 1,000g.'),
Q('Beasts Class', 5, ['Beast feeding & brushing'], 'story', 'Beast basics, pre-Nab-Sack.'),
Q("The Caretaker's Lunar Lament", 5, ['Alohomora I', 'Demiguise Moons'], 'story', 'Lockpicking + the moon economy.'),
Q('The Helm of Urtkot', 5, [], 'story', 'Story run.'),
Q('In the Shadow of the Estate', 5, ['Sebastian: Dark Arts choices'], 'story', 'Choices with consequences ahead.'),
Q('The Elf, the Nab-Sack, and the Loom', 5,
  ['Loom — gear upgrades & traits', 'Nab-Sack — beast capture'],
  'explore', 'Training wheels off. Full free roam.', { breakpoint: 'full' }),

Q('The High Keep', 6, ['Flying mount'], 'story', 'A certain feathered friend.'),
Q('Astronomy Class', 6, ['Astronomy Tables'], 'story', 'Constellation collectibles open.'),
Q('Back on the Path', 6, [], 'story', 'Story bridge.'),
Q("Charles Rookwood's Trial", 6, ["Howin's Assignment — Bombarda"], 'story', 'Keeper trial; Bombarda opens.'),
Q('Fire and Vice', 6, ["Weasley's Assignment — Transformation"], 'story', 'The final spell assignment.'),
Q('In the Shadow of the Mine', 6, [], 'story', 'Story run.'),
Q("It's All Gobbledegook", 6, [], 'story', 'Story run.'),
Q('The Headmistress Speaks', 6, [], 'story', 'Story run.'),
Q('The Polyjuice Plot', 6, [], 'story', 'Story run.'),
Q("Niamh Fitzgerald's Trial", 6, ['Broom Upgrade 3 available*'], 'story', 'Keeper trial. *Sky is the Limit + 7,500g.'),
Q('In the Shadow of the Mountain', 6, [], 'story', 'Story run.'),
Q("Lodgok's Loyalty", 6, [], 'story', 'Story run.'),
Q("San Bakar's Trial", 6, [], 'story', 'Keeper trial.'),
Q('Wand Mastery', 6, [], 'story', 'Story run.'),
Q('The Final Repository', 6, ['Finale'], 'story', 'The big one.'),
Q('In the Shadow of Revelation', 6, ['Sebastian finale'], 'story', "Sebastian's endgame — Dark Arts builds, this matters."),
Q("Weasley's Watchful Eye", 6, [], 'story', 'Post-game wind-down.'),
Q('The House Cup', 6, ['Post-game'], 'story', 'Level 34 gate — the true end.'),
];

const A = (id: string, name: string, spell: string, after: string, phase: Phase): Quest => ({
    id, name, type: 'assignment', phase, order: 0, unlocks: [`Spell: ${spell}`],
    spellReward: spell, unlockedBy: after, verdict: 'story',
    note: `Reward: ${spell}. Do it the moment it appears.`, walkthrough: fq(name),
});

export const ASSIGNMENTS: Quest[] = [
    A('assignment-ronen', "Professor Ronen's Assignment", 'Reparo', 'weasley-after-class', 1),
    A('assignment-hecat-1', "Professor Hecat's Assignment 1", 'Incendio', 'the-lockets-secret', 2),
    A('assignment-hecat-2', "Professor Hecat's Assignment 2", 'Expelliarmus', 'tomes-and-tribulations', 2),
    A('assignment-sharp-1', "Professor Sharp's Assignment 1", 'Depulso', 'jackdaws-rest', 3),
    A('assignment-sharp-2', "Professor Sharp's Assignment 2", 'Diffindo', 'jackdaws-rest', 3),
    A('assignment-garlick-1', "Professor Garlick's Assignment 1", 'Wingardium Leviosa', 'the-room-of-requirement', 5),
    A('assignment-garlick-2', "Professor Garlick's Assignment 2", 'Flipendo', 'the-map-chamber', 5),
    A('assignment-kogawa-1', "Madam Kogawa's Assignment 1", 'Glacius', 'the-map-chamber', 5),
    A('assignment-kogawa-2', "Madam Kogawa's Assignment 2", 'Arresto Momentum', 'the-map-chamber', 5),
    A('assignment-onai', "Professor Onai's Assignment", 'Descendo', 'percival-rackhams-trial', 5),
    A('assignment-howin', "Professor Howin's Assignment", 'Bombarda', 'charles-rookwoods-trial', 6),
    A('assignment-weasley', "Professor Weasley's Assignment", 'Transformation', 'fire-and-vice', 6),
];

export const CRITICAL_SIDES: Quest[] = [
    { id: 'side-flight-test', name: 'Flight Test', type: 'side', phase: 4, order: 0,
        unlocks: ['Broom Upgrade 1 prerequisite'], unlockedBy: 'flying-class', verdict: 'story',
        note: "Albie's first errand via Imelda's race — do it before Rackham's Trial.",
        walkthrough: fq('Flight Test') },
        { id: 'side-sky-limit', name: 'The Sky is the Limit', type: 'side', phase: 6, order: 0,
            unlocks: ['Broom Upgrades 2 & 3 prerequisite'], verdict: 'story',
            note: "Imelda's finale — the gate for late broom speed.", walkthrough: fq('The Sky is the Limit') },
            { id: 'side-moons', name: 'The Man Behind the Moons', type: 'side', phase: 5, order: 0,
                unlocks: ['Alohomora II & III turn-ins'], unlockedBy: 'the-caretakers-lunar-lament', verdict: 'story',
                note: 'Bring 9 moons → Rank 2; 13 for Rank 3 (9, then 4 more on hand-in).',
                walkthrough: fq('The Man Behind the Moons') },
                { id: 'side-daedalian', name: 'The Daedalian Keys', type: 'side', phase: 2, order: 0,
                    unlocks: ['House tokens collectible'], verdict: 'story',
                    note: 'A gentle anytime hobby — no rush.', walkthrough: fq('The Daedalian Keys') },
];

const S = (i: number, name: string, note: string, unlocks: string[] = []): Quest => ({
    id: `seb-${i}`, name, type: 'relationship', phase: 5, order: 0, unlocks,
    verdict: 'story', note, walkthrough: fq(name),
});
export const SEBASTIAN: Quest[] = [
    S(1, 'In the Shadow of the Bloodline', 'Where it all begins.'),
    S(2, 'In the Shadow of the Study', 'Reportedly grants Crucio.', ['Crucio']),
    S(3, 'In the Shadow of the Discovery', 'Escalation.'),
    S(4, 'In the Shadow of the Time', 'Reportedly grants Imperio.', ['Imperio']),
    S(5, 'In the Shadow of the Distance', 'Escalation.'),
    S(6, 'In the Shadow of the Hope', 'Escalation.'),
    S(7, 'In the Shadow of the Relic', 'Point of no return vibes.'),
    S(8, 'In the Shadow of the Fate', 'Reportedly grants Avada Kedavra.', ['Avada Kedavra']),
    S(9, 'In the Shadow of the Friendship', 'Where it ends.'),
];

const N = (i: number, name: string, phase: Phase, note: string): Quest => ({
    id: `nat-${i}`, name, type: 'relationship', phase, order: 0, unlocks: [],
    verdict: 'story', note, walkthrough: fq(name),
});
export const NATSAI: Quest[] = [
    N(1, 'The Lost Child', 2, 'Follows The Girl from Uagadou.'),
    N(2, "Mum's the Word", 3, 'The animagus reveal.'),
    N(3, 'A Basis for Blackmail', 5, 'Harlow troubles begin.'),
    N(4, 'Grief and Vengeance', 6, 'Escalation.'),
    N(5, 'Finding Focus', 6, 'Natty regroups.'),
    N(6, "Harlow's Last Stand", 6, 'The Harlow thread pays off.'),
    N(7, 'Acting on Instinct', 6, "Natty's finale."),
];

const P = (i: number, name: string, phase: Phase, note: string): Quest => ({
    id: `pop-${i}`, name, type: 'relationship', phase, order: 0, unlocks: [],
    verdict: 'story', note, walkthrough: fq(name),
});
export const POPPY: Quest[] = [
    P(1, 'A Dragon Debrief', 5, "Post-Beasts Class; Poppy's thread opens."),
    P(2, 'Poached Egg', 6, 'A very valuable egg.'),
    P(3, "The Poachers' House Call", 6, 'The poacher arc deepens.'),
    P(4, 'Surprise Meeting', 6, 'Family matters.'),
    P(5, 'The Centaur and the Stone', 6, 'Dorran and the centaur camp.'),
    P(6, "It's in the Stars", 6, 'Escalation.'),
    P(7, 'A Bird in the Hand', 6, 'The snidget gambit.'),
    P(8, 'Poppy Blooms', 6, "Poppy's finale."),
];

export type { House };
