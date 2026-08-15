import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describeSkill } from './skill-descriptions.mjs';

const bot = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'smt-dex-bot');
const skillsPath = join(bot, 'data', 'datastore', 'skills.json');
const lorePath = join(bot, 'data', 'datastore', 'skill-lore.json');

const skills = JSON.parse(readFileSync(skillsPath, 'utf8'));
const lore = {};

for (const skill of skills) {
  const en = describeSkill(skill, 'en');
  const pt = describeSkill(skill, 'pt');
  skill.description = pt;
  lore[skill.name] = { en, pt };
}

writeFileSync(skillsPath, `${JSON.stringify(skills, null, 2)}\n`);
writeFileSync(lorePath, `${JSON.stringify(lore, null, 2)}\n`);
console.log(`updated ${skills.length} skill descriptions`);
