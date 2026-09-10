import type { Build } from '../types';

export const BUILDS: Build[] = [
    {
        id: 'battle-mage',
        name: 'Battle-Mage',
        tagline: 'Meet every problem with overwhelming spellpower.',
        core: [
            'core.basic-cast-mastery', 'core.protego-absorption', 'core.swift', 'core.spell-knowledge-1',
            'core.wiggenweld-1', 'core.ancient-throw', 'core.spell-knowledge-2', 'core.basic-cast-airborne',
            'core.protego-expertise', 'core.evasion-absorption', 'core.stupefy-mastery', 'core.wiggenweld-2',
            'core.spell-knowledge-3', 'core.protego-mastery', 'core.stupefy-expertise',
            'spells.incendio', 'spells.confringo', 'spells.diffindo', 'spells.descendo',
            'spells.glacius', 'spells.bombarda', 'spells.transformation',
            'dark-arts.disarming-curse', 'dark-arts.knockback-curse', 'dark-arts.stunning-curse',
            'dark-arts.blood-curse', 'dark-arts.enduring-curse', 'dark-arts.curse-sapper', 'dark-arts.avada-kedavra',
        ],
        situational: [
            { id: 'spells.accio', why: 'Grouping tech if you skip Avada.' },
            { id: 'core.revelio', why: 'QoL if you have leftover points.' },
            { id: 'dark-arts.crucio', why: 'If Sebastian’s line is already giving you Crucio.' },
        ],
        gearTraits: ['Concentration / spell damage', 'Ancient Magic damage'],
        strategy:
        'Stack curses, group, delete. Avada Kedavra Mastery is wasted until Sebastian’s late line grants AK — plan it for the 22-tier, not before.',
    },
{
    id: 'phantom',
    name: 'Phantom',
    tagline: 'They cannot fight what they never see.',
    core: [
        'stealth.secrecy-1', 'stealth.human-demiguise', 'stealth.secrecy-2', 'stealth.petrificus',
        'core.swift', 'core.revelio', 'core.evasion-absorption', 'core.wiggenweld-1', 'core.wiggenweld-2',
        'core.protego-absorption', 'core.basic-cast-mastery', 'core.spell-knowledge-1', 'core.stupefy-mastery',
        'ror.invisibility', 'ror.edurus', 'ror.maxima', 'ror.focus',
        'spells.levioso', 'spells.glacius', 'spells.descendo',
    ],
    situational: [
        { id: 'core.ancient-throw', why: 'Panic button with disarmed weapons.' },
        { id: 'ror.thunderbrew', why: 'Exit fireworks when stealth fails.' },
        { id: 'dark-arts.slowing-curse', why: 'Control with a curse tag.' },
    ],
    gearTraits: ['Potion efficacy', 'Ancient Magic damage'],
    strategy:
    'Disillusion in, Petrificus loners (AoE at 22), Invisibility when spotted. Stealth is only 4 talents — spend the flex on whatever your runs keep tripping over.',
},
{
    id: 'ambusher',
    name: 'Ambusher',
    tagline: 'Thin the herd quietly, finish the rest loudly.',
    core: [
        'stealth.secrecy-1', 'stealth.human-demiguise', 'stealth.secrecy-2', 'stealth.petrificus',
        'core.stupefy-expertise', 'core.ancient-throw', 'core.protego-absorption', 'core.basic-cast-mastery',
        'core.swift', 'core.spell-knowledge-1', 'core.spell-knowledge-2', 'core.evasion-absorption',
        'spells.accio', 'spells.levioso', 'spells.glacius', 'spells.descendo', 'spells.bombarda',
        'ror.fertiliser', 'ror.noxious', 'ror.thunderbrew',
    ],
    situational: [
        { id: 'ror.invisibility', why: 'Insurance when the opener goes loud.' },
        { id: 'spells.confringo', why: 'Homing bolts for stragglers.' },
        { id: 'core.protego-expertise', why: 'You will be shot at in phase two.' },
    ],
    gearTraits: ['Plant / potion damage', 'Ancient Magic damage'],
    strategy:
    'Best first playthrough: open from Disillusionment, Petrificus the edges, Accio + Bombarda the rest with plants on tap.',
},
];
