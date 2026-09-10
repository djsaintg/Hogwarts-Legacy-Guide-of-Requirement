# 🪄 Hogwarts Legacy — Guide of Requirement

An offline-first, single-file companion for *Hogwarts Legacy*. Track the story-to-free-roam roadmap, plan all 36 talent points across three playstyles, and keep quests, spells, Merlin Trials and Demiguise Moons on schedule — no servers, no accounts, no signal.

**v0.1.0** · 100% offline after build · MIT licensed

License: MIT · Hogwarts Legacy · Built with React

💖 Support this Project — [Sponsor](https://github.com/sponsors/djsaintg)

## Why this exists

Push the main story until you have the tools that make exploration actually pay off — then roam. The three breakpoints:

1. **Flying Class** — wheels (any 600g broom)
2. **Room of Requirement** — potions, plants, a real home base
3. **The Elf, the Nab-Sack, and the Loom** — gear upgrades + beast capture; full free roam

From **Trials of Merlin** onward: never pass a trial. Claim inventory rewards in Exploration Challenges.

Talents unlock only after **Jackdaw’s Rest**, which is gated by **Professor Hecat’s Assignment 2 (Expelliarmus)**. One point per level from 5; **36 points at level 40** vs 48 talents — you cannot take everything.

## Features

### 🎩 Four profiles, four houses
Sorting Hat on first launch. Up to four characters. The whole UI re-themes to the active house. Manual level drives talent math.

### 🗺️ Roadmap
Six phases with a push / detour / explore verdict on every main beat, prerequisite chains, and progress that syncs with the quest ledger.

### 📜 Quest ledger
Mains, assignments, relationship lines and critical sides. Search, filters, Fandom wiki links (open in a browser when you have signal; the app never needs one).

### ✨ Talent planner
All 48 talents across five trees. Live budget, overspend warning, one-click load of a preset.

### ⚔️ Builds
**Battle-Mage** · **Phantom** · **Ambusher** — must-haves, flex picks, how to play them.

### ✅ Checklists
Merlin milestones (and the “go claim it” trap), moon ranks, do-now vs save-for-later.

### 🪄 Spells
Where each spell comes from — assignments called out as story-critical, not optional homework.

## Quick start

```bash
chmod +x launch.sh
./launch.sh

Command	What it does
./launch.sh	Build if needed, then open dist/index.html
./launch.sh --serve	Serve at http://localhost:4173 and open
./launch.sh --rebuild	Force a fresh build, then open
./launch.sh --help	Usage

Plain tools: npm install then npm run dev / npm run build / npm run preview.

After a build, dist/index.html is the whole app. Open it anywhere. Progress lives in localStorage (guide-of-requirement.v1) — same browser, same machine.
Fonts (optional)

Drop SIL-licensed Cinzel and Inter variable woff2 files into src/assets/fonts/ as Cinzel-Variable.woff2 and Inter-Variable.woff2. Without them, the UI falls back to system serif/sans.
Project structure


guide-of-requirement/
├── launch.sh
├── CHANGELOG.md
├── ROADMAP.md
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── types.ts
│   ├── services/profileService.ts
│   ├── data/          # houses, names, quests, talents, builds, spells, checklists
│   └── components/    # SortingHat, tabs, ProfileSwitcher
└── dist/index.html    # after one build

Data sources & credits

Unofficial fan tool. Not affiliated with Warner Bros. Games, Portkey Games, or Avalanche Software.

    Hogwarts Legacy © Warner Bros. Games — developed by Avalanche Software
    Hogwarts Legacy Fandom Wiki (CC BY-NC-SA) — talent, quest and unlock data, cross-checked in-game
    No game assets are bundled — icons are emoji
    Concerns from rights holders: open an issue

Authors

Concept & creative direction — djsaintg
Roadmap thesis, playstyle builds, house-theming, name generator.

Application development — Claude (Anthropic)
Code, data compilation, components, docs.
License

MIT for source code only. Grants no rights to game content, names, or lore, which remain the property of Warner Bros. Games and related rights holders.
