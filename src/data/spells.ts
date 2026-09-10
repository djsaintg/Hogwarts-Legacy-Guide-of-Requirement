export interface SpellRow {
    spell: string;
    source: string;
    note: string;
    kind: 'story' | 'assignment';
}

export const SPELLS: SpellRow[] = [
    { spell: 'Accio', source: 'Charms Class', note: 'Your first pull.', kind: 'story' },
{ spell: 'Levioso', source: 'Defence Against the Dark Arts Class', note: 'Yellow-break + suspend.', kind: 'story' },
{ spell: 'Reparo', source: "Professor Ronen's Assignment", note: 'Fix the world.', kind: 'assignment' },
{ spell: 'Disillusionment', source: 'Secrets of the Restricted Section', note: "The Phantom's identity.", kind: 'story' },
{ spell: 'Incendio', source: "Professor Hecat's Assignment 1", note: 'Ring of flame with Mastery.', kind: 'assignment' },
{ spell: 'Expelliarmus', source: "Professor Hecat's Assignment 2", note: "Mandatory — gates Jackdaw's Rest.", kind: 'assignment' },
{ spell: 'Depulso', source: "Professor Sharp's Assignment 1", note: 'After Jackdaw’s Rest.', kind: 'assignment' },
{ spell: 'Diffindo', source: "Professor Sharp's Assignment 2", note: 'After Jackdaw’s Rest.', kind: 'assignment' },
{ spell: 'Confringo', source: 'In the Shadow of the Undercroft', note: "Sebastian's gift.", kind: 'story' },
{ spell: 'Wingardium Leviosa', source: "Professor Garlick's Assignment 1", note: 'After Room of Requirement.', kind: 'assignment' },
{ spell: 'Flipendo', source: "Professor Garlick's Assignment 2", note: 'After The Map Chamber.', kind: 'assignment' },
{ spell: 'Glacius', source: "Madam Kogawa's Assignment 1", note: 'After The Map Chamber.', kind: 'assignment' },
{ spell: 'Arresto Momentum', source: "Madam Kogawa's Assignment 2", note: 'After The Map Chamber.', kind: 'assignment' },
{ spell: 'Descendo', source: "Professor Onai's Assignment", note: "After Percival Rackham's Trial.", kind: 'assignment' },
{ spell: 'Alohomora I–III', source: "The Caretaker's Lunar Lament + moons", note: 'Rank 2 @ 9 moons; Rank 3 @ 13 more (22 cumulative).', kind: 'story' },
{ spell: 'Bombarda', source: "Professor Howin's Assignment", note: "After Charles Rookwood's Trial.", kind: 'assignment' },
{ spell: 'Transformation', source: "Professor Weasley's Assignment", note: 'After Fire and Vice — last assignment spell.', kind: 'assignment' },
];
