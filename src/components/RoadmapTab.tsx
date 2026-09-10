import { clsx } from 'clsx';
import { useProfile } from '../App';
import { MAINS, ASSIGNMENTS, CRITICAL_SIDES } from '../data/quests';
import type { Phase, Quest } from '../types';

const PHASES: { n: Phase; title: string; blurb: string }[] = [
  { n: 1, title: 'Story Lock', blurb: 'Tutorial treadmill. Stay on the path.' },
{ n: 2, title: 'First Taste of Freedom', blurb: 'Castle + Hogsmeade only. No countryside.' },
{ n: 3, title: 'Detour Zone', blurb: 'Never pass a Merlin Trial. Claim slots in Challenges.' },
{ n: 4, title: 'Wheels', blurb: 'Broom online. Light roam is now efficient.' },
{ n: 5, title: 'Home Base', blurb: 'RoR → moons → Loom. Pause, then full roam.' },
{ n: 6, title: 'The World Is Yours', blurb: 'Story at your leisure.' },
];

const BREAKPOINT: Record<string, { label: string; tone: string }> = {
  light: { label: 'Light free roam', tone: 'Once you have a 600g broom, light travel is worth it.' },
  pause: { label: 'Pause & prepare', tone: 'Room of Requirement — brew, grow, stock.' },
  full:  { label: 'Full free roam', tone: 'Nab-Sack & Loom — training wheels off.' },
};

export default function RoadmapTab() {
  const { profile, patchProgress } = useProfile();
  const done = profile.progress.quests;

  const mains = MAINS.filter(q => !q.onlyHouse || q.onlyHouse === profile.house);

  const toggle = (id: string) =>
  patchProgress({ quests: { ...done, [id]: !done[id] } });

  const visibleFor = (phase: Phase) => {
    const m = mains.filter(q => q.phase === phase);
    const extra = [...ASSIGNMENTS, ...CRITICAL_SIDES].filter(q => q.phase === phase);
    return { m, extra };
  };

  return (
    <div className="space-y-8">
    <aside className="rounded-xl border border-[var(--panel-edge)] bg-[var(--panel)] p-5">
    <p className="font-display text-sm tracking-wide text-[var(--house-accent)]">The short answer</p>
    <p className="mt-2 text-sm leading-relaxed">
    Push story until <strong>Flying Class</strong> for wheels, until the
    {' '}<strong>Room of Requirement</strong> for self-sufficiency, until
    {' '}<strong>The Elf, the Nab-Sack, and the Loom</strong> for the full kit.
    From <strong>Trials of Merlin</strong> onward: never pass a trial without clearing it.
    </p>
    <p className="mt-3 text-xs text-[var(--muted)]">
    Critical chain: Hecat’s Assignment 2 (Expelliarmus) gates Jackdaw’s Rest,
          which gates the talent system and the Map Chamber path.
          </p>
          </aside>

          {PHASES.map(ph => {
            const { m, extra } = visibleFor(ph.n);
            const ids = m.map(q => q.id);
            const nDone = ids.filter(id => done[id]).length;
            const pct = ids.length ? Math.round((nDone / ids.length) * 100) : 0;

            return (
              <section key={ph.n} className="rounded-xl border border-[var(--panel-edge)] bg-[var(--panel)] p-5">
              <header className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
              <h2 className="font-display text-lg tracking-wide">
              Phase {ph.n} — {ph.title}
              </h2>
              <p className="text-xs text-[var(--muted)]">{ph.blurb}</p>
              </div>
              <div className="text-right text-xs text-[var(--muted)]">
              {nDone}/{ids.length} main
              <div className="mt-1 h-1.5 w-28 overflow-hidden rounded-full bg-black/40">
              <div className="h-full rounded-full bg-[var(--house-accent)]" style={{ width: `${pct}%` }} />
              </div>
              </div>
              </header>

              <ol className="space-y-2">
              {m.map(q => (
                <QuestRow key={q.id} q={q} checked={!!done[q.id]} onToggle={() => toggle(q.id)} />
              ))}
              </ol>

              {extra.length > 0 && (
                <div className="mt-4 border-t border-[var(--panel-edge)] pt-3">
                <p className="mb-2 text-[10px] uppercase tracking-widest text-[var(--muted)]">Do when it appears</p>
                <ul className="space-y-2">
                {extra.map(q => (
                  <QuestRow key={q.id} q={q} checked={!!done[q.id]} onToggle={() => toggle(q.id)} compact />
                ))}
                </ul>
                </div>
              )}
              </section>
            );
          })}
          </div>
  );
}

function QuestRow({ q, checked, onToggle, compact }: {
  q: Quest; checked: boolean; onToggle: () => void; compact?: boolean;
}) {
  const bp = q.breakpoint ? BREAKPOINT[q.breakpoint] : null;
  return (
    <li className={clsx('rounded-lg p-3', checked && 'opacity-60')}>
    <label className="flex cursor-pointer items-start gap-3">
    <input type="checkbox" checked={checked} onChange={onToggle}
    className="mt-1 accent-[var(--house-accent)]" />
    <div className="min-w-0 flex-1">
    <div className="flex flex-wrap items-baseline gap-2">
    <span className={clsx('font-display text-sm', compact && 'text-xs')}>{q.name}</span>
    <Verdict v={q.verdict} />
    {q.walkthrough && (
      <a href={q.walkthrough} target="_blank" rel="noreferrer"
      className="text-[10px] text-[var(--house-accent)] underline">guide ↗</a>
    )}
    </div>
    <p className="mt-0.5 text-xs text-[var(--muted)]">{q.note}</p>
    {q.unlocks.length > 0 && (
      <p className="mt-1 text-[11px] text-[var(--text)]/80">{q.unlocks.join(' · ')}</p>
    )}
    {q.prereq && (
      <p className="mt-1 text-[10px] text-amber-400/90">Requires: {q.prereq}</p>
    )}
    {bp && (
      <p className="mt-2 rounded border border-[var(--house-accent)]/40 px-2 py-1 text-xs text-[var(--house-accent)]">
      {bp.label} — {bp.tone}
      </p>
    )}
    </div>
    </label>
    </li>
  );
}

function Verdict({ v }: { v: Quest['verdict'] }) {
  const label = v === 'story' ? 'PUSH' : v === 'detour' ? 'DETOUR' : 'EXPLORE';
  return (
    <span className="rounded px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-[var(--muted)] ring-1 ring-[var(--panel-edge)]">
    {label}
    </span>
  );
}
