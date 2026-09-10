import { useEffect, useRef, useState } from 'react';
import { HOUSES } from '../data/houses';
import { useProfile } from '../App';
import { MAX_PROFILES } from '../services/profileService';

export default function ProfileSwitcher() {
    const { profile, profiles, setLevel, switchTo, remove, newWizard } = useProfile();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
            document.addEventListener('mousedown', close);
            return () => document.removeEventListener('mousedown', close);
    }, []);

    const house = HOUSES.find(h => h.id === profile.house)!;

    return (
        <div ref={ref} className="relative">
        <button onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 rounded-full border border-[var(--panel-edge)] bg-[var(--panel)] px-3 py-1.5 text-sm">
        <span>{house.emoji}</span>
        <span className="font-display">{profile.name}</span>
        <span className="text-xs text-[var(--muted)]">Lv {profile.level}</span>
        </button>

        {open && (
            <div className="absolute right-0 z-20 mt-2 w-72 rounded-xl border border-[var(--panel-edge)] bg-[var(--panel)] p-3 shadow-2xl">
            <div className="flex items-center justify-between rounded-lg bg-black/30 p-2">
            <span className="text-xs text-[var(--muted)]">Level</span>
            <div className="flex items-center gap-2">
            <button onClick={() => setLevel(profile.level - 1)}
            className="h-6 w-6 rounded border border-[var(--panel-edge)] text-[var(--muted)] hover:text-[var(--text)]">−</button>
            <input type="number" min={1} max={40} value={profile.level}
            onChange={e => setLevel(Number(e.target.value) || 1)}
            className="w-12 bg-transparent text-center text-sm outline-none" />
            <button onClick={() => setLevel(profile.level + 1)}
            className="h-6 w-6 rounded border border-[var(--panel-edge)] text-[var(--muted)] hover:text-[var(--text)]">+</button>
            </div>
            </div>
            <p className="mt-1 px-1 text-[10px] text-[var(--muted)]">
            1 talent point per level from 5 — 36 at 40.
            </p>

            <div className="mt-2 border-t border-[var(--panel-edge)] pt-2">
            {profiles.filter(p => p.id !== profile.id).map(p => {
                const ph = HOUSES.find(h => h.id === p.house)!;
                return (
                    <button key={p.id} onClick={() => { switchTo(p.id); setOpen(false); }}
                    className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm hover:bg-white/5">
                    <span>{ph.emoji}</span><span>{p.name}</span>
                    <span className="ml-auto text-xs text-[var(--muted)]">Lv {p.level}</span>
                    </button>
                );
            })}
            <button onClick={newWizard} disabled={profiles.length >= MAX_PROFILES}
            className="mt-1 w-full rounded-lg border border-dashed border-[var(--panel-edge)] px-2 py-1.5 text-sm text-[var(--muted)] hover:text-[var(--text)] disabled:opacity-40">
            + New wizard
            </button>
            <button
            onClick={() => {
                if (window.confirm(`Dismiss ${profile.name}? Their roadmap, talents and trials will vanish — no take-backs.`)) {
                    setOpen(false);
                    remove(profile.id);
                }
            }}
            className="mt-2 w-full rounded-lg px-2 py-1.5 text-xs text-red-400/70 hover:bg-red-500/10">
            Dismiss {profile.name}…
            </button>
            </div>
            </div>
        )}
        </div>
    );
}
