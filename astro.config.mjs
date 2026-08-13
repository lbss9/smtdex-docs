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
              label: 'Party & battles',
              translations: { 'pt-BR': 'Party e batalhas' },
              slug: 'battles',
            },
            {
              label: 'Fusion',
              translations: { 'pt-BR': 'Fusão' },
              slug: 'fusion',
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
              label: 'Macca & XP',
              translations: { 'pt-BR': 'Macca e XP' },
              slug: 'macca-xp',
            },
            {
              label: 'Commands',
              translations: { 'pt-BR': 'Comandos' },
              slug: 'commands',
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
