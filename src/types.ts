export type House = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff';
export type Phase = 1 | 2 | 3 | 4 | 5 | 6;
export type Verdict = 'story' | 'detour' | 'explore';
export type TalentTier = 5 | 16 | 22;
export type TalentTree = 'spells' | 'dark-arts' | 'core' | 'stealth' | 'ror';

export interface Talent {
    id: string;
    name: string;
    tree: TalentTree;
    tier: TalentTier;
    description: string;
}

export interface SitPick { id: string; why: string; }
export interface Build {
    id: string;
    name: string;
    tagline: string;
    core: string[];
    situational: SitPick[];
    gearTraits: string[];
    strategy: string;
}

export const talentPointsFor = (level: number) =>
Math.max(0, Math.min(level, 40) - 4);

export interface Quest {
    id: string;
    name: string;
    type: 'main' | 'side' | 'assignment' | 'relationship';
    phase: Phase;
    order: number;
    unlocks: string[];
    prereq?: string;
    unlockedBy?: string;
    spellReward?: string;
    onlyHouse?: House;
    breakpoint?: 'light' | 'pause' | 'full';
    verdict: Verdict;
    note: string;
    walkthrough?: string;
}

export interface SitPick { id: string; why: string; }
export interface Build {
    id: string; name: string; tagline: string;
    core: string[];         // must-have talent ids — counts vs the 36 budget
    situational: SitPick[];
    gearTraits: string[];   // ⚠ names pending a traits-page fetch
    strategy: string;
}
export interface Progress {
    quests: Record<string, boolean>;
    talents: string[];
    checklists: Record<string, boolean>;
    merlinTrials: number;
    moons: number;            // NEW — Alohomora II @ 9 · III @ 13 (22 cumulative)
}
