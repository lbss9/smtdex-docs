---
title: Your Demons
nav_order: 4
---

# Your Demons

## Viewing your collection

Use **`/collection`** to list the demons you own. Each entry shows a **short ID**
(the last 6 characters, like `` `a1b2c3` ``), name, level, IV%, category, and
game. You use that short ID in commands like `/fuse`, `/trade`, `/skill`, and
`/battle`.

```
/collection pagina: 1 raca: Fairy
```

- `pagina` — page number.
- `raca` — filter by race.

## Demon details

**`/info`** shows the full compendium sheet for any demon: category, level,
rarity, base stats, its skills (with element and cost), artwork, and which other
games the demon appears in.

```
/info demon: Pixie jogo: Persona 5
```

Both fields **autocomplete** as you type. The `jogo` (game) field only suggests
games where that demon actually exists, so you can look up a specific version.

## IVs

Each captured demon rolls hidden **Individual Values** (IVs) for its stats when
caught. `/collection` shows the overall IV percentage — higher is better. IVs are
fixed at capture and never change.

## Levels

Demons gain **XP** as you stay active in chat and by winning **[battles](battles.html)**.
Their level rises along a curve up to level 99. See **[Leveling & XP](leveling.html)**.
