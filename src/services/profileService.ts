// Four slots, one per house — matching the game's save structure.
// Ported from the RS3 playerService pattern: pure functions over a
// single versioned localStorage blob, consumed via React context.
import type { House, Profile } from '../types';

const KEY = 'guide-of-requirement.v1';
export const MAX_PROFILES = 4;

export interface Store { profiles: Profile[]; activeId: string | null; }

export const emptyStore = (): Store => ({ profiles: [], activeId: null });

export function makeProfile(name: string, house: House): Profile {
    return {
        id: `p${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
        name: name.trim() || 'Unnamed Wizard',
        house,
        level: 5,
        createdAt: Date.now(),
        progress: { quests: {}, talents: [], checklists: {}, merlinTrials: 0, moons: 0 },
    };
}

export function load(): Store {
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return emptyStore();
        const parsed = JSON.parse(raw) as Store;
        if (!Array.isArray(parsed.profiles)) return emptyStore();
        return { profiles: parsed.profiles.slice(0, MAX_PROFILES), activeId: parsed.activeId };
    } catch { return emptyStore(); }
}

export function save(store: Store): void {
    try { localStorage.setItem(KEY, JSON.stringify(store)); }
    catch { /* private-mode etc. — the app still works for this session */ }
}

/** House → owner name, so the Sorting Hat can nudge duplicates — never block. */
export function claimedHouses(profiles: Profile[]): Partial<Record<House, string>> {
    return Object.fromEntries(profiles.map(p => [p.house, p.name]));
}
