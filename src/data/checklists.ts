export const MERLIN = {
    activityUrl: 'https://hogwarts-legacy.fandom.com/wiki/Merlin_Trials',
    claimTrap: 'Slots apply only once claimed in Exploration Challenges.',
    milestones: [
        { trials: 2, slots: 4 },
        { trials: 6, slots: 4 },
        { trials: 10, slots: 4 },
        { trials: 14, slots: 4 },
        { trials: 20, slots: 4 },
    ],
};

export const MOON_THRESHOLDS = {
    rank2: 9,
    rank3Total: 13,
    cumulative: 22,
    quirk: 'Rank 3 first asks for 9 moons, then 4 more on turn-in — 13 for the rank, 22 cumulative.',
};

export const DO_NOW: { id: string; phase: number; item: string }[] = [
    { id: 'floo', phase: 2, item: 'Light every Floo Flame you walk past.' },
{ id: 'castle-sides', phase: 2, item: 'Easy castle sides: Cache in the Castle, Like a Moth to a Frame, Flying Off the Shelves.' },
{ id: 'merlin-law', phase: 3, item: 'Never pass a Merlin Trial. Claim slots at 2 / 6 / 10 / 14 / 20.' },
{ id: 'broom-600', phase: 4, item: 'Buy a 600g broom, then do Flight Test immediately.' },
{ id: 'balloons', phase: 4, item: 'Pop balloon sets while flying — free brooms at 2 / 5 / 10 / 15 sets.' },
{ id: 'moons', phase: 5, item: 'Moon runs: 9 → Alohomora II; 22 cumulative for III.' },
{ id: 'ror-stock', phase: 5, item: 'RoR online: plant Dittany, brew a Wiggenweld stockpile.' },
{ id: 'upgrade-1', phase: 5, item: 'Broom Upgrade 1 (1,000g) after Rackham + Flight Test.' },
];

export const SAVE_LATER: { id: string; phase: number; item: string }[] = [
    { id: 'map-clear', phase: 5, item: 'Full map clearing & high-level camps — pre-Loom gear dies fast.' },
{ id: 'beasts', phase: 5, item: 'Beast collecting — pointless before the Nab-Sack.' },
{ id: 'upgrades-late', phase: 6, item: 'Broom upgrades 2–3 (4,000g / 7,500g) — gated behind The Sky is the Limit.' },
{ id: 'vanity-brooms', phase: 6, item: 'Silver Arrow & Sky Scythe (5,000g each) — late vanity.' },
{ id: 'merlin-max', phase: 6, item: 'Merlin beyond 20 — inventory is maxed; completionism only.' },
{ id: 'house-cup', phase: 6, item: 'The House Cup — level 34 gate. It will wait.' },
];
