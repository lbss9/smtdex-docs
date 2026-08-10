---
title: Fusion
nav_order: 9
---

# Fusion

Fusion combines **two** demons you own into a **new** one. The two ingredients
are consumed and a new demon takes their place.

## How to fuse

```
/fuse demon_a: a1b2c3 demon_b: d4e5f6
```

Use the **short IDs** from `/collection`. The result embed shows the new demon,
its game, rarity, and new short ID.

## How the result is decided

- The **resulting category** comes from a fusion chart. Demons from *Shin Megami
  Tensei* games fuse by **Race**; demons from *Persona* games fuse by **Arcana**.
- The new demon's **base level** is roughly the average of the two ingredients,
  plus one.
- From the resulting category, the game picks the demon whose level is the next
  one at or above that base level.

## Cross-game fusion

You can fuse demons from **different games**. Races and Arcanas don't overlap, so
the chart handles both, and the resulting demon can come from **any** game in the
compendium — not just the games your ingredients came from.

## Good to know

- Fusion is **irreversible** — the two ingredients are gone.
- The new demon starts at its own base level with its innate moveset.
