import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { clsx } from 'clsx';
import type { House, Profile, Progress } from './types';
import * as svc from './services/profileService';
import type { Store } from './services/profileService';
import SortingHat from './components/SortingHat';
import ProfileSwitcher from './components/ProfileSwitcher';
import RoadmapTab from './components/RoadmapTab';
import QuestTable from './components/QuestTable';
import TalentPlanner from './components/TalentPlanner';
import BuildsTab from './components/BuildsTab';
import ChecklistsTab from './components/ChecklistsTab';
import SpellsTab from './components/SpellsTab';

const TABS = [
    { id: 'roadmap',    emoji: '🗺️', label: 'Roadmap',    C: RoadmapTab },
{ id: 'quests',     emoji: '📜', label: 'Quests',     C: QuestTable },
{ id: 'talents',    emoji: '✨', label: 'Talents',    C: TalentPlanner },
{ id: 'builds',     emoji: '⚔️', label: 'Builds',     C: BuildsTab },
{ id: 'checklists', emoji: '✅', label: 'Checklists', C: ChecklistsTab },
{ id: 'spells',     emoji: '🪄', label: 'Spells',     C: SpellsTab },
] as const;

interface Ctx {
    profile: Profile;
    profiles: Profile[];
    setLevel: (n: number) => void;
    patchProgress: (patch: Partial<Progress>) => void;
    switchTo: (id: string) => void;
    remove: (id: string) => void;
    newWizard: () => void;          // hands control back to the Sorting Hat
}
const ProfileContext = createContext<Ctx | null>(null);
export const useProfile = () => {
    const ctx = useContext(ProfileContext);
    if (!ctx) throw new Error('useProfile outside a profile');
    return ctx;
};

const levelPatch = (s: Store, id: string, n: number): Store => ({
    ...s,
    profiles: s.profiles.map(p => (p.id === id ? { ...p, level: n } : p)),
});

export default function App() {
    const [store, setStore] = useState<Store>(() => svc.load());
    const [tab, setTab] = useState<(typeof TABS)[number]['id']>('roadmap');

    useEffect(() => { svc.save(store); }, [store]);

    const active = store.profiles.find(p => p.id === store.activeId) ?? null;

    // The entire app re-skins by writing one attribute.
    useEffect(() => {
        document.documentElement.dataset.house = active?.house ?? 'neutral';
    }, [active?.house]);

    const ctx = useMemo<Ctx | null>(() => (active ? {
        profile: active,
        profiles: store.profiles,
        setLevel: n => setStore(s => levelPatch(s, active.id, Math.max(1, Math.min(40, n)))),
                                           patchProgress: patch => setStore(s => ({
                                               ...s,
                                               profiles: s.profiles.map(p => (p.id === active.id
                                               ? { ...p, progress: { ...p.progress, ...patch } } : p)),
                                           })),
                                           switchTo: id => setStore(s => ({ ...s, activeId: id })),
                                               remove: id => setStore(s => {
                                                   const profiles = s.profiles.filter(p => p.id !== id);
                                                   return { profiles, activeId: s.activeId === id ? profiles[0]?.id ?? null : s.activeId };
                                               }),
                                               newWizard: () => setStore(s => ({ ...s, activeId: null })),
    } : null), [active, store.profiles]);

    // ── The Gate: no active profile → the Sorting Hat owns the screen ──
    if (!ctx) return (
        <div className="candle-glow min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <SortingHat
        claimed={svc.claimedHouses(store.profiles)}
        canAdd={store.profiles.length < svc.MAX_PROFILES}
        onCreate={(name, house) => setStore(s => {
            const p = svc.makeProfile(name, house);
            return { profiles: [...s.profiles, p].slice(0, svc.MAX_PROFILES), activeId: p.id };
        })}
        onCancel={store.profiles.length
            ? () => setStore(s => ({ ...s, activeId: s.profiles[0].id }))
            : undefined}
            />
            </div>
    );

    const Active = TABS.find(t => t.id === tab)!.C;
    return (
        <ProfileContext.Provider value={ctx}>
        <div className="candle-glow min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="relative z-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-5">
        <div>
        <h1 className="font-display text-xl tracking-wide">Guide of Requirement</h1>
        <p className="text-xs text-[var(--muted)]">an unofficial Hogwarts Legacy companion</p>
        </div>
        <ProfileSwitcher />
        </header>

        <nav className="mx-auto mt-4 max-w-6xl border-b border-[var(--panel-edge)] px-4">
        <div className="flex flex-wrap gap-1">
        {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
            className={clsx(
                'font-display rounded-t-lg px-4 py-2 text-sm tracking-wide transition-colors',
                tab === t.id
                ? 'text-[var(--house-accent)]'
                : 'text-[var(--muted)] hover:text-[var(--text)]',
            )}
            style={tab === t.id ? { borderBottom: '2px solid var(--house-accent)' } : undefined}>
            {t.emoji} {t.label}
            </button>
        ))}
        </div>
        </nav>

        <main className="mx-auto max-w-6xl px-4 py-6">
        <Active />
        </main>
        </div>
        </div>
        </ProfileContext.Provider>
    );
}
