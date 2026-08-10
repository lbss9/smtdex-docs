---
title: Privacy Policy
nav_order: 91
---

# Privacy Policy

_Last updated: August 10, 2026_

This policy explains what data SMTDex (the "Bot") processes and why. By using the
Bot, you consent to the practices described here.

## Data we process

**Discord identifiers.** We store your Discord **user ID**, and the **server
(guild) and channel IDs** where the Bot operates. We do **not** store your Discord
username, avatar, or email.

**Gameplay data.** We store the data needed to run the game: the demons you own,
their levels, XP, IVs, and movesets; your Macca balance and profile settings; and
your trades.

**Message content.** The Bot uses Discord's Message Content intent so it can:

- detect when a player types the correct name to capture a spawned demon, and
- count chat **activity** to award Macca and XP.

Message content is processed **transiently for these purposes only**. The Bot does
**not** store the text of your messages.

**Ephemeral data.** Short-lived values such as per-channel spawn counters and
command cooldowns are kept in an in-memory cache (Redis) and are not part of your
permanent record.

## How we use data

Solely to operate the game — spawning, capturing, progression, economy, trading,
and battles. We do **not** sell your data, use it for advertising, or share it
with third parties, except as required to run the service (e.g., our database and
hosting providers) or to comply with the law.

## Data retention & deletion

Gameplay data is kept while you use the Bot. You may request deletion of your data
at any time (see **Contact**); we will remove your player record and associated
demons. Some data may persist briefly in backups before being overwritten.

## Third-party services

The Bot runs on Discord and relies on standard hosting and database
infrastructure. Demon artwork is referenced from third-party wikis; opening those
images is subject to the hosts' own policies.

## Children

The Bot is intended for users who meet Discord's minimum age requirements. We do
not knowingly collect data from anyone below that age.

## Changes

We may update this policy. Material changes will be reflected by the "last
updated" date above.

## Contact

To ask a question or request data deletion, reach out through the project's
[GitHub repository](https://github.com/lbss9/smtdex-docs).

---

> This document is provided as a general template and does not constitute legal
> advice. Consider consulting a professional before operating the Bot publicly.
