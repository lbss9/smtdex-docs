// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://lbss9.github.io',
  base: '/smtdex-docs',
  integrations: [
    starlight({
      title: 'SMTDex',
      description:
        'Unofficial Shin Megami Tensei Discord bot — capture, fuse, and battle demons.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        'pt-br': { label: 'Português', lang: 'pt-BR' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/lbss9/smtdex-docs',
        },
      ],
      customCss: ['./src/styles/theme.css'],
      editLink: {
        baseUrl: 'https://github.com/lbss9/smtdex-docs/edit/main/',
      },
      sidebar: [
        {
          label: 'Play',
          translations: { 'pt-BR': 'Jogar' },
          items: [
            {
              label: 'Getting started',
              translations: { 'pt-BR': 'Primeiros passos' },
              slug: 'getting-started',
            },
            {
              label: 'Where to farm',
              translations: { 'pt-BR': 'Onde farmar' },
              slug: 'farm',
            },
            {
              label: 'Commands',
              translations: { 'pt-BR': 'Comandos' },
              slug: 'commands',
            },
            {
              label: 'Spawns',
              translations: { 'pt-BR': 'Spawns' },
              slug: 'spawns',
            },
            {
              label: 'Demons',
              translations: { 'pt-BR': 'Demons' },
              slug: 'demons',
            },
            {
              label: 'Skills',
              translations: { 'pt-BR': 'Skills' },
              slug: 'skills',
            },
            {
              label: 'Skill Cards',
              translations: { 'pt-BR': 'Skill Cards' },
              slug: 'skill-cards',
            },
            {
              label: 'Inventory',
              translations: { 'pt-BR': 'Inventário' },
              slug: 'inventory',
            },
            {
              label: 'Party & battles',
              translations: { 'pt-BR': 'Party e batalhas' },
              slug: 'battles',
            },
            {
              label: 'Exploration',
              translations: { 'pt-BR': 'Exploração' },
              slug: 'exploration',
            },
            {
              label: 'Expedition',
              translations: { 'pt-BR': 'Expedição' },
              slug: 'expedition',
            },
            {
              label: 'Infernal Hall',
              translations: { 'pt-BR': 'Salão Infernal' },
              slug: 'infernal-hall',
            },
            {
              label: 'Fusion & Mitama',
              translations: { 'pt-BR': 'Fusão e Mitama' },
              slug: 'fusion',
            },
            {
              label: 'Items & gems',
              translations: { 'pt-BR': 'Items e gemas' },
              slug: 'items',
            },
            {
              label: 'Magatsuhi',
              translations: { 'pt-BR': 'Magatsuhi' },
              slug: 'magatsuhi',
            },
            {
              label: 'Mail',
              translations: { 'pt-BR': 'Mail' },
              slug: 'mail',
            },
            {
              label: 'Shop',
              translations: { 'pt-BR': 'Loja' },
              slug: 'shop',
            },
            {
              label: 'Macca, XP & Renown',
              translations: { 'pt-BR': 'Macca, XP e Renome' },
              slug: 'macca-xp',
            },
            {
              label: 'Changelog',
              translations: { 'pt-BR': 'Changelog' },
              slug: 'changelog',
            },
          ],
        },
        {
          label: 'Catalogs',
          translations: { 'pt-BR': 'Catálogos' },
          items: [
            {
              label: 'All demons',
              translations: { 'pt-BR': 'Todos os demons' },
              slug: 'catalog-demons',
            },
            {
              label: 'All skills',
              translations: { 'pt-BR': 'Todas as skills' },
              slug: 'catalog-skills',
            },
            {
              label: 'All items',
              translations: { 'pt-BR': 'Todos os items' },
              slug: 'catalog-items',
            },
          ],
        },
        {
          label: 'Legal',
          translations: { 'pt-BR': 'Legal' },
          items: [
            {
              label: 'Terms of use',
              translations: { 'pt-BR': 'Termos de uso' },
              slug: 'terms',
            },
            {
              label: 'Privacy',
              translations: { 'pt-BR': 'Privacidade' },
              slug: 'privacy',
            },
          ],
        },
      ],
    }),
  ],
});
