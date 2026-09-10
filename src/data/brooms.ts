// Per the Fandom Brooms page (fetched & verified). Stats are identical at purchase;
// speed comes only from the three upgrades. A patient player never pays for cosmetics.
export interface Broom {
    name: string; acquisition: 'purchase' | 'challenge' | 'gift';
    vendor?: string; cost?: number; condition?: string; desc: string;
}
export const BROOMS: Broom[] = [
    // Albie Weekes — Spintwitches, Hogsmeade
    { name: 'Ember Dash Broom',       acquisition: 'purchase', vendor: 'Albie Weekes', cost: 600,  desc: 'For the fiery-tempered.' },
{ name: 'Moon Trimmer Broom',     acquisition: 'purchase', vendor: 'Albie Weekes', cost: 600,  desc: 'Ash; built for stability.' },
{ name: 'Wind Wisp Broom',        acquisition: 'purchase', vendor: 'Albie Weekes', cost: 600,  desc: 'A light touch — literally.' },
{ name: 'Yew Weaver Broom',       acquisition: 'purchase', vendor: 'Albie Weekes', cost: 600,  desc: 'Comfortable, speedy, woven.' },
{ name: 'Hogwarts House Broom',   acquisition: 'purchase', vendor: 'Albie Weekes', cost: 600,  desc: 'House pride on a stick. ⚠ house-coloured?' },
{ name: 'Dark Lightning Broom',   acquisition: 'purchase', vendor: 'Albie Weekes', cost: 2000, desc: 'Dabblers in the Dark Arts.' },
// Other vendors
{ name: 'Aeromancer Broom',       acquisition: 'purchase', vendor: 'Rohan Prakash',   cost: 3000, desc: 'Cuts air like a potioneer\u2019s knife.' },
{ name: 'Family Antique Broom',   acquisition: 'purchase', vendor: 'Priya Treadwell',  cost: 2500, desc: 'A flying heirloom.' },
{ name: 'Silver Arrow Broom',     acquisition: 'purchase', vendor: 'Arn',              cost: 5000, desc: 'By Leonard Jewkes himself.' },
{ name: 'Sky Scythe Broom',       acquisition: 'purchase', vendor: 'Leopold Babcocke', cost: 5000, desc: 'For demonstrating myriad skills.' },
// Balloon challenges — free
{ name: 'Night Dancer Broom',     acquisition: 'challenge', condition: 'Pop 2 balloon sets',  desc: 'Nimble, impressive style.' },
{ name: 'Lickety Swift Broom',    acquisition: 'challenge', condition: 'Pop 5 balloon sets',  desc: 'Aerodynamic breeze.' },
{ name: 'Wild Fire Broom',        acquisition: 'challenge', condition: 'Pop 10 balloon sets', desc: 'A little untamed spark.' },
{ name: 'Bright Spark Broom',     acquisition: 'challenge', condition: 'Pop 15 balloon sets', desc: 'Fly among the stars.' },
// The quiet freebie
{ name: 'Lavender Borealis Broom', acquisition: 'gift', condition: 'Appears after your first broom purchase', desc: 'Rivers of light in the twilit northern sky.' },
];

export interface BroomUpgrade { n: 1 | 2 | 3; cost: number; requires: string[]; }
export const UPGRADES: BroomUpgrade[] = [
    { n: 1, cost: 1000, requires: ['Flight Test', "Percival Rackham's Trial"] },
{ n: 2, cost: 4000, requires: ['Upgrade 1 gates', 'The Sky is the Limit'] },
{ n: 3, cost: 7500, requires: ['The Sky is the Limit', "Niamh Fitzgerald's Trial"] },
];

// The flight ledger, phase-tagged — rendered on the Roadmap tab.
export const GOLD_BUDGET = [
    { phase: 'Phase 4 — Flying Class', item: 'Any 600g broom (or House Broom)', gold: 600 },
    { phase: 'Phase 5 — post-Rackham', item: 'Upgrade 1 (needs Flight Test)',  gold: 1000 },
    { phase: 'Phase 6 — mid',          item: 'Upgrade 2 (Sky is the Limit)',   gold: 4000 },
    { phase: 'Phase 6 — post-Niamh',   item: 'Upgrade 3',                      gold: 7500 },
{ phase: 'TOTAL',                  item: 'Flight-complete',                gold: 13100 },
];
