---
title: Command Reference
nav_order: 12
---

# Command Reference

All commands are Discord slash commands. Type `/` and the command name; most
options **autocomplete** as you type.

## Getting started

| Command | What it does |
| --- | --- |
| `/start demon:<name>` | Create your profile and pick a starter demon. |
| `/balance` | Show your Macca, collection size, top level, and passive bonus. |

## Your demons

| Command | What it does |
| --- | --- |
| `/collection [pagina] [raca]` | List the demons you own (paged, filterable). |
| `/info demon:<name> [jogo]` | Full compendium sheet for any demon; pick a game version. |

## Skills

| Command | What it does |
| --- | --- |
| `/skill list demon:<id>` | Show a demon's moveset. |
| `/skill learn demon:<id> skill:<name>` | Buy and teach a skill (costs Macca). |
| `/skill forget demon:<id> skill:<name>` | Remove a skill (free). |

## Fusion

| Command | What it does |
| --- | --- |
| `/fuse demon_a:<id> demon_b:<id>` | Fuse two demons into a new one. |

## Battle

| Command | What it does |
| --- | --- |
| `/battle [demon:<id>]` | Turn-based battle against an AI demon. |

## Trading

| Command | What it does |
| --- | --- |
| `/trade start usuario:@user` | Start a trade. |
| `/trade add demon:<id>` | Add a demon to your offer. |
| `/trade macca valor:<n>` | Offer Macca. |
| `/trade view` | View the current trade. |
| `/trade confirm` | Confirm the trade. |
| `/trade cancel` | Cancel the trade. |

> IDs are the **short IDs** (last 6 characters) shown in `/collection`.
