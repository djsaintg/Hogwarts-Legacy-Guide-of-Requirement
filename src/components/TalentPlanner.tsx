import { clsx } from 'clsx';
import { useProfile } from '../App';
import { TALENTS, TREE_LABEL } from '../data/talents';
import { BUILDS } from '../data/builds';
import { talentPointsFor, type Talent, type TalentTree } from '../types';

const TREES: TalentTree[] = ['core', 'spells', 'dark-arts', 'stealth', 'ror'];

export default function TalentPlanner() {
  const { profile, patchProgress } = useProfile();
  const selected = profile.progress.talents;
  const cap = talentPointsFor(profile.level);
  const used = selected.length;
  const over = used > cap;

  const toggle = (id: string) => {
    const next = selected.includes(id)
    ? selected.filter(x => x !== id)
    : [...selected, id];
    patchProgress({ talents: next });
  };

  const applyBuild = (ids: string[]) => patchProgress({ talents: [...ids] });
  const clear = () => patchProgress({ talents: [] });

  return (
    <div className="space-y-6">
    <div className="flex flex-wrap items-end justify-between gap-4 rounded-xl border border-[var(--panel-edge)] bg-[var(--panel)] p-5">
    <div>
    <p className="font-display text-sm text-[var(--house-accent)]">Talent budget</p>
    <p className="mt-1 text-2xl font-display">
    <span className={over ? 'text-red-400' : ''}>{used}</span>
    <span className="text-[var(--muted)]"> / {cap}</span>
    </p>
    <p className="text-xs text-[var(--muted)]">
    1 point per level from 5 · 36 at 40 · unlocked after Jackdaw’s Rest
    </p>
    {over && <p className="mt-1 text-xs text-red-400">Over budget — deselect {used - cap} talent{used - cap === 1 ? '' : 's'}.</p>}
    </div>
    <div className="flex flex-wrap gap-2">
    {BUILDS.map(b => (
      <button key={b.id} onClick={() => applyBuild(b.core)}
      className="rounded-lg border border-[var(--panel-edge)] px-3 py-1.5 text-xs hover:border-[var(--house-accent)]">
      Load {b.name}
      </button>
    ))}
    <button onClick={clear} className="rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] underline">Clear</button>
    </div>
    </div>

    <div className="grid gap-4 lg:grid-cols-2">
    {TREES.map(tree => (
      <section key={tree} className="rounded-xl border border-[var(--panel-edge)] bg-[var(--panel)] p-4">
      <h3 className="font-display mb-3 text-sm tracking-wide">{TREE_LABEL[tree]}</h3>
      <ul className="space-y-2">
      {TALENTS.filter(t => t.tree === tree).map(t => (
        <TalentRow key={t.id} t={t} on={selected.includes(t.id)} locked={profile.level < t.tier}
        onToggle={() => toggle(t.id)} />
      ))}
      </ul>
      </section>
    ))}
    </div>
    </div>
  );
}

function TalentRow({ t, on, locked, onToggle }: {
  t: Talent; on: boolean; locked: boolean; onToggle: () => void;
}) {
  return (
    <li>
    <label className={clsx('flex cursor-pointer gap-3 rounded-lg p-2', locked && 'opacity-40')}>
    <input type="checkbox" checked={on} disabled={locked} onChange={onToggle}
    className="mt-1 accent-[var(--house-accent)]" />
    <div>
    <div className="flex items-baseline gap-2">
    <span className="text-sm">{t.name}</span>
    <span className="text-[10px] text-[var(--muted)]">Lv {t.tier}</span>
    </div>
    <p className="text-xs text-[var(--muted)]">{t.description}</p>
    </div>
    </label>
    </li>
  );
}
