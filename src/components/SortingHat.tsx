import { useState } from 'react';
import { clsx } from 'clsx';
import { HOUSES } from '../data/houses';
import { generateName } from '../data/names';
import type { House } from '../types';

interface Props {
    claimed: Partial<Record<House, string>>;
    canAdd: boolean;
    onCreate: (name: string, house: House) => void;
    onCancel?: () => void;
}

export default function SortingHat({ claimed, canAdd, onCreate, onCancel }: Props) {
    const [name, setName] = useState('');
    const [placeholder] = useState(generateName);   // lazy — one fresh suggestion per visit
    const [house, setHouse] = useState<House | null>(null);

    return (
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-4 py-12">
        <header className="text-center">
        <div className="text-5xl">🎩</div>
        <h2 className="font-display mt-4 text-3xl tracking-wide">The Sorting Hat Awaits</h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
        Name your witch or wizard and choose their house — the guide will wear their colours.
        </p>
        </header>

        <div className="w-full max-w-sm">
        <div className="flex gap-2">
        <input value={name} maxLength={24} placeholder={placeholder}
        onChange={e => setName(e.target.value)}
        className="w-full rounded-lg border border-[var(--panel-edge)] bg-[var(--panel)] px-4 py-3 text-center text-lg outline-none focus:border-[var(--house-accent)]" />
        <button type="button" title="Suggest a name" aria-label="Suggest a name"
        onClick={() => setName(generateName())}
        className="shrink-0 rounded-lg border border-[var(--panel-edge)] bg-[var(--panel)] px-3 text-xl transition hover:border-[var(--house-accent)]">
        🎲
        </button>
        </div>
        <p className="mt-1 text-center text-xs text-[var(--muted)]">
        Roll the dice — or leave it blank and let the Hat choose for you.
        </p>
        </div>

        {/* data-house on each card = live palette preview, free of charge */}
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
        {HOUSES.map(h => {
            const owner = claimed[h.id];
            return (
                <button key={h.id} data-house={h.id} onClick={() => setHouse(h.id)}
                className={clsx('rounded-xl border p-4 text-center transition',
                    house === h.id ? 'border-[var(--house-accent)]' : 'border-[var(--panel-edge)] hover:border-[var(--house-accent)]')}
                    style={house === h.id
                        ? { background: 'color-mix(in srgb, var(--house-primary) 35%, var(--panel))' }
                        : undefined}>
                        <div className="text-3xl">{h.emoji}</div>
                        <div className="font-display mt-2 text-sm text-[var(--house-accent)]">{h.name}</div>
                        <div className="mt-1 text-xs text-[var(--muted)]">{h.virtue}</div>
                        {owner && <div className="mt-2 text-[10px] text-[var(--muted)]">claimed by {owner}</div>}
                        </button>
            );
        })}
        </div>

        <div className="flex items-center gap-5">
        {onCancel && (
            <button onClick={onCancel} className="text-sm text-[var(--muted)] underline">back</button>
        )}
        <button disabled={!house || !canAdd}
        onClick={() => house && onCreate(name.trim() || placeholder, house)}
        className="font-display rounded-lg px-6 py-3 text-sm tracking-wide transition disabled:cursor-not-allowed disabled:opacity-40"
        style={{ background: 'var(--house-accent)', color: 'var(--house-on-accent)' }}>
        {canAdd ? 'Begin the Journey' : 'All Four Houses Are Full'}
        </button>
        </div>
        {!canAdd && (
            <p className="text-xs text-[var(--muted)]">Dismiss a profile from the header to make room.</p>
        )}
        </div>
    );
}
