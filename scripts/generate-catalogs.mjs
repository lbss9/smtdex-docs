import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describeItem, describeSkill } from './skill-descriptions.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const bot = join(root, '..', 'smt-dex-bot', 'data', 'datastore');

const demons = JSON.parse(readFileSync(join(bot, 'demons.json'), 'utf8'));
const skills = JSON.parse(readFileSync(join(bot, 'skills.json'), 'utf8'));
const items = JSON.parse(readFileSync(join(bot, 'items.json'), 'utf8'));

const escape = (value) =>
  String(value ?? '')
    .replace(/\|/g, '\\|')
    .replace(/</g, '&lt;');

const namedMagatsuhi = {
  'Omagatoki: Luck': 1,
  'Omagatoki: Bounty': 1,
  'Omagatoki: Sincerity': 1,
  'Omagatoki: Strategize': 1,
  'Omagatoki: Hit': 2,
  'Omagatoki: Conserve': 2,
  Dekajaon: 2,
  'Omagatoki: Charge': 3,
  'Omagatoki: Free': 3,
  'Omagatoki: Dance': 3,
  'Omagatoki: Potential': 3,
  'Omagatoki: Doubler': 3,
  'Omagatoki: Exploit': 3,
  'Omagatoki: Momentum': 3,
  'Omagatoki: Adversity': 3,
  'Fairy Banquet': 3,
  'Rasetsu Feast': 3,
  'Expand: Piercing Aura': 3,
  'Expand: Critical Aura': 3,
  'Omagatoki: Critical': 4,
  'Omagatoki: Pierce': 4,
  'Omagatoki: Savage': 4,
  'Shield of God': 4,
  'Eternal Prayer': 4,
};

const jadeByRank = { 1: 3, 2: 4, 3: 6, 4: 8, 5: 12 };

const magatsuhiRank = (skill) => {
  if (namedMagatsuhi[skill.name]) return namedMagatsuhi[skill.name];
  const damage = skill.damage ?? 0;
  if (damage >= 600) return 5;
  if (damage >= 400) return 4;
  if (damage >= 200) return 3;
  if (damage >= 1) return 2;
  return 1;
};

const isMagatsuhi = (skill) =>
  skill.rank === 50 || skill.cost >= 1000 || skill.magatsuhi === true;

const resistShort = (resistance) => {
  const map = {
    physical: 'Phys',
    fire: 'Fire',
    ice: 'Ice',
    lightning: 'Elec',
    force: 'Force',
    earth: 'Earth',
    water: 'Water',
    psico: 'Psy',
    holy: 'Light',
    dark: 'Dark',
    almighty: 'Alm',
  };
  const tags = [];
  for (const [key, label] of Object.entries(map)) {
    const value = resistance?.[key];
    if (!value || value === 'neutral') continue;
    tags.push(`${label} ${value}`);
  }
  return tags.join(', ') || '—';
};

const byRace = new Map();
for (const demon of demons) {
  const race = demon.race || 'Unknown';
  if (!byRace.has(race)) byRace.set(race, []);
  byRace.get(race).push(demon);
}

const raceOrder = [...byRace.keys()].sort((a, b) => a.localeCompare(b, 'en'));

const demonTables = (locale) => {
  const headers =
    locale === 'pt'
      ? '| Nome | Nv | ★ | HP | MP | STR | MAG | VIT | AGI | LCK | Resistências |'
      : '| Name | Lv | ★ | HP | MP | STR | MAG | VIT | AGI | LCK | Resistances |';
  const parts = [];
  for (const race of raceOrder) {
    const rows = byRace
      .get(race)
      .slice()
      .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name, 'en'))
      .map(
        (demon) =>
          `| ${escape(demon.name)} | ${demon.level} | ${demon.rarity} | ${demon.hp} | ${demon.mp} | ${demon.strength} | ${demon.magic} | ${demon.vitality} | ${demon.agility} | ${demon.luck} | ${escape(resistShort(demon.resistance))} |`,
      );
    parts.push(`## ${escape(race)} (${rows.length})\n\n${headers}\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |\n${rows.join('\n')}\n`);
  }
  return parts.join('\n');
};

const skillGroups = new Map();
for (const skill of skills) {
  const type = skill.type || 'other';
  if (!skillGroups.has(type)) skillGroups.set(type, []);
  skillGroups.get(type).push(skill);
}

const skillTables = (locale) => {
  const headers =
    locale === 'pt'
      ? '| Nome | Elemento | Custo | Poder | Rank | Alvo | Efeito |'
      : '| Name | Element | Cost | Power | Rank | Target | Effect |';
  const typeLabel = {
    physical: locale === 'pt' ? 'Físico' : 'Physical',
    magical: locale === 'pt' ? 'Mágico' : 'Magical',
    buff: 'Buff',
    debuff: 'Debuff',
    heal: locale === 'pt' ? 'Cura' : 'Heal',
    ailment: locale === 'pt' ? 'Ailment' : 'Ailment',
    passive: locale === 'pt' ? 'Passiva' : 'Passive',
  };
  const parts = [];
  for (const type of [
    'physical',
    'magical',
    'heal',
    'buff',
    'debuff',
    'ailment',
    'passive',
  ]) {
    const list = skillGroups.get(type) ?? [];
    const rows = list
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name, 'en'))
      .map((skill) => {
        const mag = isMagatsuhi(skill) && skill.type !== 'passive';
        const extra = mag ? ` (MAG R${magatsuhiRank(skill)} · ${jadeByRank[magatsuhiRank(skill)]} Jade)` : '';
        return `| ${escape(skill.name)}${extra} | ${escape(skill.element ?? '—')} | ${skill.cost} | ${skill.damage} | ${skill.rank} | ${escape(skill.target)} | ${escape(describeSkill(skill, locale))} |`;
      });
    parts.push(
      `## ${typeLabel[type]} (${rows.length})\n\n${headers}\n| --- | --- | ---: | ---: | ---: | --- | --- |\n${rows.join('\n')}\n`,
    );
  }
  return parts.join('\n');
};

const itemTables = (locale) => {
  const headers =
    locale === 'pt'
      ? '| Nome | Tipo | Rank | Compra | Venda | Loja | Drop | Stack | Efeito |'
      : '| Name | Kind | Rank | Buy | Sell | Shop | Drop | Stack | Effect |';
  const rows = items
    .slice()
    .sort((a, b) => a.kind.localeCompare(b.kind) || a.rank - b.rank || a.name.localeCompare(b.name, 'en'))
    .map(
      (item) =>
        `| ${escape(item.name)} | ${escape(item.kind)} | ${item.rank} | ${item.buy ?? 0} | ${item.sell ?? 0} | ${item.shop ? 'yes' : 'no'} | ${item.drop ? 'yes' : 'no'} | ${item.maxStack ?? 1} | ${escape(describeItem(item, locale))} |`,
    );
  return `${headers}\n| --- | --- | ---: | ---: | ---: | --- | --- | ---: | --- |\n${rows.join('\n')}\n`;
};

const magatsuhiTable = (locale) => {
  const headers =
    locale === 'pt'
      ? '| Skill | Rank loja | Jade | Tipo | Poder | Efeito |'
      : '| Skill | Shop rank | Jade | Type | Power | Effect |';
  const rows = skills
    .filter((skill) => isMagatsuhi(skill) && skill.type !== 'passive')
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, 'en'))
    .map((skill) => {
      const rank = magatsuhiRank(skill);
      return `| ${escape(skill.name)} | ${rank} | ${jadeByRank[rank]} | ${escape(skill.type)} | ${skill.damage} | ${escape(describeSkill(skill, locale))} |`;
    });
  return `${headers}\n| --- | ---: | ---: | --- | ---: | --- |\n${rows.join('\n')}\n`;
};

const write = (rel, body) => {
  const path = join(root, 'src', 'content', 'docs', rel);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, body);
  console.log('wrote', rel);
};

write(
  'catalog-demons.mdx',
  `---
title: Demon catalog
description: All ${demons.length} SMTDex species with base stats and resistances.
---

Complete compendium from the live datastore (**${demons.length}** species). Instance stars (1–5★) multiply these bases. Combat caps: stats **999**, HP/MP **9999**.

${demonTables('en')}
`,
);

write(
  'pt-br/catalog-demons.mdx',
  `---
title: Catálogo de demons
description: Todas as ${demons.length} espécies do SMTDex com stats e resistências.
---

Compêndio completo do datastore ao vivo (**${demons.length}** espécies). As estrelas da instância (1–5★) multiplicam essa base. Tetos: stats **999**, HP/MP **9999**.

${demonTables('pt')}
`,
);

write(
  'catalog-skills.mdx',
  `---
title: Skill catalog
description: All ${skills.length} SMTDex skills, including Magatsuhi shop ranks.
---

**${skills.length}** skills with effect text. Magatsuhi actives show shop rank and Jade cost at Rag's. Passives with rank 50 are unique miracles — they are **not** sold.

${skillTables('en')}

## Magatsuhi shop list

Active Magatsuhi only. Pay **Jade only** at \`/rags\` → Magatsuhi. Any demon can learn the card.

${magatsuhiTable('en')}
`,
);

write(
  'pt-br/catalog-skills.mdx',
  `---
title: Catálogo de skills
description: Todas as ${skills.length} skills do SMTDex, com rank Magatsuhi da Rag's.
---

**${skills.length}** skills com o efeito de cada uma. Magatsuhi ativas mostram o rank de loja e o custo em Jade. Passivas rank 50 são miracles únicas — **não** se vendem.

${skillTables('pt')}

## Lista Magatsuhi da Rag's

Só Magatsuhi ativas. Pague **só Jade** em \`/rags\` → Magatsuhi. Qualquer demon aprende o card.

${magatsuhiTable('pt')}
`,
);

write(
  'catalog-items.mdx',
  `---
title: Item catalog
description: All ${items.length} SMTDex items with shop and drop flags.
---

**${items.length}** items with effect text. Shop column is the item store (Renown-gated). Rag's gem trades are separate.

${itemTables('en')}
`,
);

write(
  'pt-br/catalog-items.mdx',
  `---
title: Catálogo de items
description: Todos os ${items.length} items do SMTDex com loja e drop.
---

**${items.length}** items com o efeito de cada um. A coluna Loja é a vitrine de items (por Renome). Trocas da Rag's são à parte.

${itemTables('pt')}
`,
);

console.log({
  demons: demons.length,
  skills: skills.length,
  items: items.length,
  magatsuhi: skills.filter((s) => isMagatsuhi(s) && s.type !== 'passive').length,
});
