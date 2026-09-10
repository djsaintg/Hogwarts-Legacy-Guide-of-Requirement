# Changelog

All notable changes to this project are documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).  
Versioning: [SemVer](https://semver.org/).

## [Unreleased]

### Planned
- See `ROADMAP.md`

## [0.1.0] — 2026-03-28

First playable companion: offline single-file app, four house profiles, six tabs.

### Added
- Sorting Hat first-run gate with house cards, live palette preview, and wizarding name generator (archaic firsts × compound surnames, ~30% alliteration bias; canon-free pools)
- Four profile slots (localStorage `guide-of-requirement.v1`), house-tied theming, per-profile level (1–40)
- Ancient-magic / candle shimmer theme; Cinzel + Inter when font files are present
- **Roadmap** — six phases, push / detour / explore verdicts, unlock notes, breakpoint banners (broom · RoR · Loom), Hecat 2 → Jackdaw’s Rest chain called out, checkboxes synced with Quests
- **Quests** — mains, assignments, relationship lines, critical sides; search, type filters, hide-completed, house-quest filter, Fandom wiki links
- **Talents** — all 48 talents (5 / 16 / 22), live 36-point budget, overspend warning, load/clear presets
- **Builds** — Battle-Mage, Phantom, Ambusher (must-haves, situational, strategy)
- **Checklists** — Merlin Trial counter + claim-trap + slot milestones (2 / 6 / 10 / 14 / 20), Demiguise moon counter (Alohomora II @ 9, III @ 22 cumulative), Do now / Save for later
- **Spells** — story + assignment unlock list with the Expelliarmus gate highlighted
- `launch.sh` (`--serve`, `--rebuild`, `--help`), Vite 7 + React 19 + Tailwind v4 + `vite-plugin-singlefile`

### Known limitations
- Side-quest availability is coarse (zone buckets); per-quest gates in v1.0.2
- Spell Knowledge II kept at wiki tier 5
- Fonts are optional; missing woff2s fall back to system typefaces
- Gear trait names on builds are descriptive, not a full trait database
