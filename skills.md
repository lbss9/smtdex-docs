---
title: Skills & Movesets
nav_order: 8
---

# Skills & Movesets

Every demon has a **moveset** — the skills it currently knows, up to **8** at a
time. When you capture a demon, it starts with its innate skills. You can then
buy new skills or forget ones you don't want.

## Viewing a moveset

```
/skill list demon: a1b2c3
```

Shows the demon's current skills with their element and MP/HP cost.

## Learning a skill

```
/skill learn demon: a1b2c3 skill: Bufula
```

- Costs **Macca** (the price shows in the autocomplete as you pick a skill).
- The skill is added if there's room (max 8).
- Skills come from across the compendium — attack skills, healing, support, and
  the **[Fortuna passives](passives.html)**.

## Forgetting a skill

```
/skill forget demon: a1b2c3 skill: Bufula
```

Removing a skill is free and frees up a moveset slot.

## Elements

Each skill has an element, shown with an emoji: 🔥 fire, ❄️ ice, ⚡ elec, 🌀
force, ⚔️ physical, 🔫 gun, 🌟 light, 🌑 dark, 💫 almighty, 💚 recovery, 🛡️
support, and more. Elements matter in **[battle](battles.html)** — hitting a
weakness deals more damage and grants an extra turn.
