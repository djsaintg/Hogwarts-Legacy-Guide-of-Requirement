import { useProfile } from '../App';
import { BUILDS } from '../data/builds';
import { TALENTS } from '../data/talents';

const nameOf = (id: string) => TALENTS.find(t => t.id === id)?.name ?? id;

export default function BuildsTab() {
  const { patchProgress } = useProfile();

  return (
    <div className="space-y-6">
    {BUILDS.map(b => (
      <article key={b.id} className="rounded-xl border border-[var(--panel-edge)] bg-[var(--panel)] p-5">
      <header className="flex flex-wrap items-start justify-between gap-3">
      <div>
      <h2 className="font-display text-lg">{b.name}</h2>
      <p className="text-sm text-[var(--muted)]">{b.tagline}</p>
      </div>
      <button
      onClick={() => patchProgress({ talents: [...b.core] })}
      className="font-display rounded-lg px-4 py-2 text-xs"
      style={{ background: 'var(--house-accent)', color: 'var(--house-on-accent)' }}>
      Load into planner ({b.core.length} pts)
      </button>
      </header>
      <p className="mt-3 text-sm leading-relaxed">{b.strategy}</p>
      <h3 className="font-display mt-4 text-xs uppercase tracking-widest text-[var(--muted)]">Must-haves</h3>
      <p className="mt-1 text-sm">{b.core.map(nameOf).join(' · ')}</p>
      <h3 className="font-display mt-4 text-xs uppercase tracking-widest text-[var(--muted)]">Situational</h3>
      <ul className="mt-1 space-y-1 text-sm text-[var(--muted)]">
      {b.situational.map(s => (
        <li key={s.id}><span className="text-[var(--text)]">{nameOf(s.id)}</span> — {s.why}</li>
      ))}
      </ul>
      <p className="mt-3 text-xs text-[var(--muted)]">Gear traits: {b.gearTraits.join(' · ')}</p>
      </article>
    ))}
    </div>
  );
}
