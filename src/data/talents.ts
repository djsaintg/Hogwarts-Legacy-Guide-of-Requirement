import type { Talent, TalentTree } from '../types';

const T = (tree: TalentTree) =>
(id: string, tier: Talent['tier'], name: string, description: string): Talent =>
({ id: `${tree}.${id}`, tree, tier, name, description });

const S = T('spells'), D = T('dark-arts'), C = T('core'), H = T('stealth'), R = T('ror');

export const TALENTS: Talent[] = [
    S('diffindo', 5, 'Diffindo Mastery', 'Diffindo slices through to extra targets.'),
    S('depulso', 5, 'Depulso Mastery', 'Extra blast around you.'),
    S('confringo', 5, 'Confringo Mastery', 'Seeking fiery bolts on impact.'),
    S('incendio', 5, 'Incendio Mastery', 'Ring of flame around you.'),
    S('accio', 5, 'Accio Mastery', 'Nearby enemies pulled with the target.'),
    S('levioso', 5, 'Levioso Mastery', 'Nearby enemies levitated too.'),
    S('bombarda', 16, 'Bombarda Mastery', 'Massive AoE blast.'),
    S('descendo', 16, 'Descendo Mastery', 'Shockwave around the slam.'),
    S('glacius', 16, 'Glacius Mastery', 'Frozen enemies spray damaging shards.'),
    S('transformation', 22, 'Transformation Mastery', 'Targets become explosive objects.'),

    D('disarming-curse', 5, 'Disarming Curse', 'Expelliarmus applies curse.'),
    D('knockback-curse', 5, 'Knockback Curse', 'Flipendo applies curse.'),
    D('stunning-curse', 5, 'Stunning Curse', 'Stupefy applies curse.'),
    D('blood-curse', 5, 'Blood Curse', 'Damage to one cursed target hits all cursed.'),
    D('crucio', 16, 'Crucio Mastery', 'Crucio spreads via projectile.'),
    D('imperio', 16, 'Imperio Mastery', 'Controlled enemy curses on hit.'),
    D('slowing-curse', 16, 'Slowing Curse', 'Arresto Momentum applies curse.'),
    D('enduring-curse', 16, 'Enduring Curse', 'Curses last longer.'),
    D('avada-kedavra', 22, 'Avada Kedavra Mastery', 'AK kills all cursed enemies.'),
    D('curse-sapper', 22, 'Curse Sapper', 'Killing a cursed enemy heals you.'),

    C('basic-cast-mastery', 5, 'Basic Cast Mastery', 'Basic Cast reduces cooldowns.'),
    C('protego-absorption', 5, 'Protego Absorption', 'Blocks fill Ancient Magic meter.'),
    C('swift', 5, 'Swift', 'Hold Dodge to vanish and reappear.'),
    C('spell-knowledge-1', 5, 'Spell Knowledge I', 'Extra spell set.'),
    C('wiggenweld-1', 5, 'Wiggenweld Potency I', 'Better healing.'),
    C('ancient-throw', 5, 'Ancient Magic Throw Expertise', 'Throw disarmed weapons.'),
    C('spell-knowledge-2', 5, 'Spell Knowledge II', 'Extra spell set.'),
    C('basic-cast-airborne', 16, 'Basic Cast Airborne Absorption', 'Airborne hits fill AM faster.'),
    C('protego-expertise', 16, 'Protego Expertise', 'Perfect Protego returns two projectiles.'),
    C('evasion-absorption', 16, 'Evasion Absorption', 'Dodge-unblockable fills AM.'),
    C('stupefy-mastery', 16, 'Stupefy Mastery', 'Longer stun.'),
    C('wiggenweld-2', 16, 'Wiggenweld Potency II', 'Better healing.'),
    C('revelio', 16, 'Revelio Mastery', 'Longer Revelio range.'),
    C('spell-knowledge-3', 16, 'Spell Knowledge III', 'Extra spell set.'),
    C('protego-mastery', 22, 'Protego Mastery', 'Perfect Protego blast breaks shields.'),
    C('stupefy-expertise', 22, 'Stupefy Expertise', 'Stupefy deals damage.'),

    H('secrecy-1', 5, 'Sense of Secrecy I', 'Harder to detect.'),
    H('human-demiguise', 5, 'Human Demiguise', 'Sprint while Disillusioned.'),
    H('secrecy-2', 16, 'Sense of Secrecy II', 'Harder to detect.'),
    H('petrificus', 22, 'Petrificus Totalus Mastery', 'AoE around the takedown.'),

    R('invisibility', 5, 'Invisibility Potion Potency', 'Longer invisibility.'),
    R('fertiliser', 5, 'Fertiliser', 'Free extra Chomping Cabbage.'),
    R('edurus', 5, 'Edurus Potion Potency', 'Invulnerable + reflect projectiles.'),
    R('maxima', 16, 'Maxima Potion Potency', 'More damage, breaks shields.'),
    R('headache', 16, 'Headache', 'Stronger Mandrakes.'),
    R('focus', 22, 'Focus Potion Potency', 'Casting extends Focus duration.'),
    R('noxious', 22, 'Noxious', 'Tentacula hits harder and break shields.'),
    R('thunderbrew', 22, 'Thunderbrew Potency', 'Bigger, harder Thunderbrew.'),
];

export const TREE_LABEL: Record<TalentTree, string> = {
    spells: 'Spells',
    'dark-arts': 'Dark Arts',
    core: 'Core',
    stealth: 'Stealth',
    ror: 'Room of Requirement',
};
