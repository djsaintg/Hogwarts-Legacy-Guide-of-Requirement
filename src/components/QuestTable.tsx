import { useMemo, useState } from 'react';
import { clsx } from 'clsx';
import { useProfile } from '../App';
import {
  MAINS, ASSIGNMENTS, CRITICAL_SIDES, SEBASTIAN, NATSAI, POPPY,
} from '../data/quests';
import type { Quest } from '../types';

const TYPES = ['all', 'main', 'assignment', 'relationship', 'side'] as const;

export default function QuestTable() {
  const { profile, patchProgress } = useProfile();
  const done = profile.progress.quests;
  const [q, setQ] = useState('');
  const [type, setType] = useState<(typeof TYPES)[number]>('all');
  const [hideDone, setHideDone] = useState(false);

  const all = useMemo(() => {
    const sides = CRITICAL_SIDES; // coarse sides live here until v1.0.2 sweep
    return [
      ...MAINS.filter(x => !x.onlyHouse || x.onlyHouse === profile.house),
                      ...ASSIGNMENTS, ...SEBASTIAN, ...NATSAI, ...POPPY, ...sides,
    ];
  }, [profile.house]);

  const rows = all.filter(x => {
    if (type !== 'all' && x.type !== type) return false;
    if (hideDone && done[x.id]) return false;
    if (q && !x.name.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  const toggle = (id: string) =>
  patchProgress({ quests: { ...done, [id]: !done[id] } });

  return (
    <div className="space-y-4">
    <div className="flex flex-wrap items-center gap-2">
    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search quests…"
    className="min-w-[12rem] flex-1 rounded-lg border border-[var(--panel-edge)] bg-[var(--panel)] px-3 py-2 text-sm outline-none focus:border-[var(--house-accent)]" />
    {TYPES.map(t => (
      <button key={t} onClick={() => setType(t)}
      className={clsx('rounded-full px-3 py-1 text-xs capitalize',
        type === t ? 'bg-[var(--house-accent)] text-[var(--house-on-accent)]' : 'text-[var(--muted)] ring-1 ring-[var(--panel-edge)]')}>
        {t}
        </button>
    ))}
    <label className="ml-auto flex items-center gap-2 text-xs text-[var(--muted)]">
    <input type="checkbox" checked={hideDone} onChange={e => setHideDone(e.target.checked)}
    className="accent-[var(--house-accent)]" />
    Hide completed
    </label>
    </div>

    <p className="text-xs text-[var(--muted)]">{rows.length} shown · house quests filtered to {profile.house}</p>

    <ul className="divide-y divide-[var(--panel-edge)] rounded-xl border border-[var(--panel-edge)] bg-[var(--panel)]">
    {rows.map(x => (
      <li key={x.id} className={clsx('flex items-start gap-3 px-4 py-3', done[x.id] && 'opacity-50')}>
      <input type="checkbox" checked={!!done[x.id]} onChange={() => toggle(x.id)}
      className="mt-1 accent-[var(--house-accent)]" />
      <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-baseline gap-2">
      <span className="font-display text-sm">{x.name}</span>
      <span className="text-[10px] uppercase text-[var(--muted)]">{x.type} · P{x.phase}</span>
      {x.walkthrough && (
        <a href={x.walkthrough} target="_blank" rel="noreferrer"
        className="text-[10px] text-[var(--house-accent)] underline">wiki ↗</a>
      )}
      </div>
      <p className="text-xs text-[var(--muted)]">{x.note}</p>
      </div>
      </li>
    ))}
    </ul>
    </div>
  );
}
