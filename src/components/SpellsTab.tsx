import { SPELLS } from '../data/spells';

export default function SpellsTab() {
  return (
    <div className="space-y-4">
    <p className="text-sm text-[var(--muted)]">
    Assignments are not optional flavour — Hecat 2 (Expelliarmus) gates Jackdaw’s Rest and the talent system.
    </p>
    <ul className="divide-y divide-[var(--panel-edge)] rounded-xl border border-[var(--panel-edge)] bg-[var(--panel)]">
    {SPELLS.map(s => (
      <li key={s.spell} className="px-4 py-3">
      <div className="flex flex-wrap items-baseline gap-2">
      <span className="font-display text-sm">{s.spell}</span>
      <span className="text-[10px] uppercase text-[var(--muted)]">{s.kind}</span>
      </div>
      <p className="text-xs text-[var(--house-accent)]">{s.source}</p>
      <p className="text-xs text-[var(--muted)]">{s.note}</p>
      </li>
    ))}
    </ul>
    </div>
  );
}
