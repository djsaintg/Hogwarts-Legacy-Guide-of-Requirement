import type { House } from '../types';

export interface HouseTheme {
    id: House; name: string; emoji: string; virtue: string;
    primary: string;   // deep house colour — panels/borders
    accent: string;    // highlight colour — active states, progress bars
    onAccent: string;  // text colour on accent surfaces
}

export const HOUSES: HouseTheme[] = [
    { id: 'gryffindor', name: 'Gryffindor',  emoji: '🦁', virtue: 'Daring',
        primary: '#740001', accent: '#D3A625', onAccent: '#1B1B1B' },
{ id: 'slytherin',  name: 'Slytherin',   emoji: '🐍', virtue: 'Ambition',
    primary: '#0D4F2B', accent: '#9FB4A5', onAccent: '#101410' },
{ id: 'ravenclaw',  name: 'Ravenclaw',   emoji: '🦅', virtue: 'Wit',
    primary: '#0E1A40', accent: '#9C6D30', onAccent: '#14100A' },
{ id: 'hufflepuff', name: 'Hufflepuff',  emoji: '🦡', virtue: 'Loyalty',
    primary: '#3D2E0A', accent: '#ECB939', onAccent: '#1B1B1B' },
];
// Base theme (pre-sorting / neutral): obsidian + faint gold candle-shimmer.
