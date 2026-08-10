---
title: Battles
nav_order: 10
---

# Battles

Battles are **turn-based** and played with buttons right in Discord.

## Starting a battle

```
/battle demon: a1b2c3
```

You face a wild demon controlled by the AI, scaled to your demon's level. If you
don't specify a demon, the bot uses your selected demon (or your highest-level
one).

## Taking turns

Each turn you pick a skill from a menu, or press **Fugir** (Flee) to leave. The
battle embed shows both fighters' **HP bars** and a running log of what happened.

## Elements & the extra turn

Damage depends on the attacker's stats, the skill's power, and the level gap —
but **elements decide the flow**:

- Hit the opponent's **weakness** → **more damage** *and an extra turn*.
- Hit what they **resist** → reduced damage.

A demon's affinity comes from its primary element. The counters are:

| Element | Weak to |
| --- | --- |
| 🔥 Fire | ❄️ Ice |
| ❄️ Ice | 🔥 Fire |
| ⚡ Elec | 🌀 Force |
| 🌀 Force | ⚡ Elec |
| 🌟 Light | 🌑 Dark |
| 🌑 Dark | 🌟 Light |
| 🔮 Psy | ☢️ Nuke |
| ☢️ Nuke | 🔮 Psy |

Chaining weaknesses lets you take several actions before the opponent moves —
so build a moveset that covers what your demon is up against.

## Rewards

Win and your demon earns **Macca and XP**. Lose or flee and you walk away with
nothing lost but pride.
