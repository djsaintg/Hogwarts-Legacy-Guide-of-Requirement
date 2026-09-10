// Wizarding name generator — archaic British firsts × evocative compound
// surnames, with a light alliteration bias (the Rowling signature).
// Pools avoid HP/Hogwarts Legacy canon names. Max length ≤ 24 chars
// (the Sorting Hat input's maxLength).

const FIRSTS_M = [
    'Alaric', 'Ambrose', 'Anselm', 'Bartholomew', 'Bertram', 'Cassius', 'Cyprian',
'Digby', 'Edmund', 'Emrys', 'Erasmus', 'Ezra', 'Fabian', 'Felix', 'Ignatius',
'Jasper', 'Leopold', 'Lucian', 'Magnus', 'Marcus', 'Montgomery', 'Mortimer',
'Osric', 'Peregrine', 'Quentin', 'Silas', 'Thaddeus', 'Tobias', 'Wilfred',
];

const FIRSTS_F = [
    'Agatha', 'Arabella', 'Beatrix', 'Celestine', 'Cordelia', 'Cressida',
'Dorothea', 'Elspeth', 'Euphemia', 'Florence', 'Genevieve', 'Guinevere',
'Henrietta', 'Honoria', 'Iris', 'Isolde', 'Juniper', 'Juno', 'Leonora',
'Letitia', 'Marigold', 'Marguerite', 'Odette', 'Octavia', 'Ophelia',
'Perpetua', 'Prudence', 'Rosalind', 'Rosamund', 'Seraphina', 'Tabitha',
'Verity', 'Winifred',
];

const FIRST_NAMES = [...FIRSTS_M, ...FIRSTS_F];

const SURNAMES = [
    'Ashdown', 'Ashgrove', 'Ashworth', 'Avory', 'Beecham', 'Blackfeather',
'Blackmoor', 'Bramblewick', 'Coldwater', 'Dagworth', 'Dunmore', 'Eldermoor',
'Fairholme', 'Featherstone', 'Fenwick', 'Fennimore', 'Goldcrest', 'Grimshaw',
'Hallowell', 'Hartfield', 'Havelock', 'Hawthorne', 'Hollowbrook', 'Keswick',
'Larkspur', 'Loxley', 'Marlowe', 'Mowbray', 'Nesbitt', 'Nightingale',
'Ollerton', 'Pargeter', 'Pemberton', 'Quillfeather', 'Ravenscroft', 'Redfern',
'Silverton', 'Talbot', 'Thistledown', 'Thornbury', 'Vexmoor', 'Whitmore',
'Winterbourne', 'Wycliffe',
];

const pick = <T,>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)];

export function generateName(): string {
    const surname = pick(SURNAMES);
    // Alliteration bias ~30% of rolls, when a matching initial exists.
    const sameInitial = FIRST_NAMES.filter(f => f[0] === surname[0]);
    const first = sameInitial.length && Math.random() < 0.3
    ? pick(sameInitial)
    : pick(FIRST_NAMES);
    return `${first} ${surname}`;
}
