import { useProfile } from '../App';
import { DO_NOW, SAVE_LATER, MERLIN, MOON_THRESHOLDS } from '../data/checklists';

export default function ChecklistsTab() {
  const { profile, patchProgress } = useProfile();
  const { merlinTrials, moons, checklists } = profile.progress;

  const nextMerlin = MERLIN.milestones.find(m => merlinTrials < m.trials);
  const claimedSlots = MERLIN.milestones
  .filter(m => merlinTrials >= m.trials)
  .reduce((n, m) => n + m.slots, 0);

  const toggle = (id: string) =>
  patchProgress({ checklists: { ...checklists, [id]: !checklists[id] } });

  const setMerlin = (n: number) =>
  patchProgress({ merlinTrials: Math.max(0, Math.min(95, Number.isFinite(n) ? n : 0)) });

  const setMoons = (n: number) =>
  patchProgress({ moons: Math.max(0, Math.min(30, Number.isFinite(n) ? n : 0)) });

  const moonRank =
  moons >= MOON_THRESHOLDS.cumulative ? 3 :
  moons >= MOON_THRESHOLDS.rank2 ? 2 : 1;

  return (
    <div className="space-y-6">
    <section className="rounded-xl border border-[var(--panel-edge)] bg-[var(--panel)] p-5">
    <h2 className="font-display text-lg">Merlin Trials</h2>
    <p className="mt-1 text-xs text-[var(--muted)]">{MERLIN.claimTrap}</p>
    <div className="mt-3 flex items-center gap-3">
    <button onClick={() => setMerlin(merlinTrials - 1)}
    className="h-8 w-8 rounded border border-[var(--panel-edge)]">−</button>
    <input type="number" min={0} max={95} value={merlinTrials}
    onChange={e => setMerlin(Number(e.target.value))}
    className="w-16 bg-transparent text-center text-lg outline-none" />
    <button onClick={() => setMerlin(merlinTrials + 1)}
    className="h-8 w-8 rounded border border-[var(--panel-edge)]">+</button>
    <span className="text-sm text-[var(--muted)]">
    +{claimedSlots} slots unlocked
    {nextMerlin && ` · next at ${nextMerlin.trials}`}
    </span>
    </div>
    <ol className="mt-4 space-y-1 text-sm">
    {MERLIN.milestones.map(m => (
      <li key={m.trials} className={merlinTrials >= m.trials ? 'text-[var(--house-accent)]' : 'text-[var(--muted)]'}>
      {m.trials} trials → +{m.slots} gear slots
      {merlinTrials >= m.trials ? ' — go claim in Challenges' : ''}
      </li>
    ))}
    </ol>
    <a href={MERLIN.activityUrl} target="_blank" rel="noreferrer"
    className="mt-3 inline-block text-xs text-[var(--house-accent)] underline">
    Puzzle solutions on the wiki ↗
    </a>
    </section>

    <section className="rounded-xl border border-[var(--panel-edge)] bg-[var(--panel)] p-5">
    <h2 className="font-display text-lg">Demiguise Moons</h2>
    <p className="mt-1 text-xs text-[var(--muted)]">{MOON_THRESHOLDS.quirk}</p>
    <div className="mt-3 flex items-center gap-3">
    <button onClick={() => setMoons(moons - 1)}
    className="h-8 w-8 rounded border border-[var(--panel-edge)]">−</button>
    <input type="number" min={0} max={30} value={moons}
    onChange={e => setMoons(Number(e.target.value))}
    className="w-16 bg-transparent text-center text-lg outline-none" />
    <button onClick={() => setMoons(moons + 1)}
    className="h-8 w-8 rounded border border-[var(--panel-edge)]">+</button>
    <span className="text-sm text-[var(--muted)]">Alohomora rank {moonRank}</span>
    </div>
    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/40">
    <div className="h-full bg-[var(--house-accent)]"
    style={{ width: `${Math.min(100, (moons / MOON_THRESHOLDS.cumulative) * 100)}%` }} />
    </div>
    <p className="mt-2 text-xs text-[var(--muted)]">
    Rank 2 at {MOON_THRESHOLDS.rank2} · Rank 3 at {MOON_THRESHOLDS.cumulative} cumulative
    </p>
    </section>

    <List title="Do now" items={DO_NOW} checklists={checklists} onToggle={toggle} />
    <List title="Save for later" items={SAVE_LATER} checklists={checklists} onToggle={toggle} />
    </div>
  );
}

function List({ title, items, checklists, onToggle }: {
  title: string;
  items: { id: string; phase: number; item: string }[];
  checklists: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  return (
    <section className="rounded-xl border border-[var(--panel-edge)] bg-[var(--panel)] p-5">
    <h2 className="font-display text-lg">{title}</h2>
    <ul className="mt-3 space-y-2">
    {items.map(x => (
      <li key={x.id}>
      <label className={`flex cursor-pointer gap-3 text-sm ${checklists[x.id] ? 'opacity-50' : ''}`}>
      <input type="checkbox" checked={!!checklists[x.id]} onChange={() => onToggle(x.id)}
      className="mt-0.5 accent-[var(--house-accent)]" />
      <span>
      <span className="mr-2 text-[10px] uppercase text-[var(--muted)]">P{x.phase}</span>
      {x.item}
      </span>
      </label>
      </li>
    ))}
    </ul>
    </section>
  );
}
