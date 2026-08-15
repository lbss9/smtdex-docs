const ELEMENT_EN = {
  physical: 'Physical',
  fire: 'Fire',
  ice: 'Ice',
  lightning: 'Electric',
  force: 'Force',
  earth: 'Earth',
  water: 'Water',
  psico: 'Psy',
  holy: 'Light',
  dark: 'Dark',
  almighty: 'Almighty',
};

const ELEMENT_PT = {
  physical: 'Físico',
  fire: 'Fogo',
  ice: 'Gelo',
  lightning: 'Elec',
  force: 'Força',
  earth: 'Terra',
  water: 'Água',
  psico: 'Psico',
  holy: 'Luz',
  dark: 'Trevas',
  almighty: 'Almighty',
};

const AILMENT_EN = {
  Sleep: 'Sleep',
  Poison: 'Poison',
  Confuse: 'Confusion',
  Charm: 'Charm',
  Seal: 'Seal',
  Mirage: 'Mirage',
};

const AILMENT_PT = {
  Sleep: 'Sleep',
  Poison: 'Poison',
  Confuse: 'Confuse',
  Charm: 'Charm',
  Seal: 'Seal',
  Mirage: 'Mirage',
};

const NAMED = {
  'Omagatoki: Critical': [
    'All attacks, including magic, become Critical hits for all allies for 1 turn.',
    'Todos os ataques, inclusive mágicos, viram crítico para todos os aliados por 1 turno.',
  ],
  'Omagatoki: Pierce': [
    'All attacks from all allies pierce for 1 turn.',
    'Todos os ataques dos aliados perfuram (Pierce) por 1 turno.',
  ],
  'Omagatoki: Charge': [
    'Charge effects on all allies last until the next turn.',
    'Efeitos de Charge de todos os aliados duram até o próximo turno.',
  ],
  'Omagatoki: Hit': [
    'Greatly raises Accuracy and ailment efficacy for all allies for 1 turn.',
    'Aumenta muito a precisão e a eficácia de ailments de todos os aliados por 1 turno.',
  ],
  'Omagatoki: Dance': [
    'All multi-hit moves of all allies deal the maximum number of hits for 1 turn.',
    'Todos os golpes multi-hit dos aliados acertam o máximo de hits por 1 turno.',
  ],
  'Omagatoki: Free': [
    'All skills of all allies cost 1 MP for 1 turn.',
    'Todas as skills dos aliados custam 1 MP por 1 turno.',
  ],
  'Omagatoki: Savage': [
    'All skills of all allies cost double MP but deal double damage for 1 turn.',
    'Skills dos aliados custam o dobro de MP e dão o dobro de dano por 1 turno.',
  ],
  'Omagatoki: Potential': [
    'All skill potentials are maxed for all allies for 1 turn.',
    'Todos os potenciais dos aliados vão ao máximo por 1 turno.',
  ],
  'Omagatoki: Adversity': [
    'The lower all allies’ HP, the more damage and HP they recover through skills for 1 turn.',
    'Quanto menor o HP dos aliados, mais dano e cura por skills por 1 turno.',
  ],
  'Omagatoki: Doubler': [
    'Buffs and debuffs are twice as effective for all allies for 1 turn.',
    'Buffs e debuffs dos aliados rendem o dobro por 1 turno.',
  ],
  'Omagatoki: Exploit': [
    'Increases damage when striking a weakness for all allies for 1 turn.',
    'Aumenta o dano ao acertar fraqueza para todos os aliados por 1 turno.',
  ],
  'Omagatoki: Momentum': [
    'Adds 1 Press Turn icon for every defeated foe for 1 turn.',
    'Soma 1 Press Turn por inimigo derrotado por 1 turno.',
  ],
  'Omagatoki: Conserve': [
    'Press Turn icon conservation is halved for all allies for 1 turn.',
    'A conservação de Press Turn dos aliados cai pela metade por 1 turno.',
  ],
  'Omagatoki: Strategize': [
    'Switching or passing does not consume a Press Turn for 1 turn.',
    'Trocar ou passar não gasta Press Turn por 1 turno.',
  ],
  'Omagatoki: Luck': [
    'EXP and Macca earned are greatly increased if the battle ends this turn.',
    'EXP e Macca sobem muito se a luta acabar neste turno.',
  ],
  'Omagatoki: Bounty': [
    'Guarantees defeated enemies drop items for 1 turn.',
    'Inimigos derrotados dropam item com certeza por 1 turno.',
  ],
  'Omagatoki: Sincerity': [
    'Forgives up to 2 demon conversation failures for 1 turn.',
    'Perdoa até 2 falhas de conversa com demons por 1 turno.',
  ],
  'Shield of God': [
    'Greatly decreases damage to all allies until the next turn.',
    'Reduz muito o dano em todos os aliados até o próximo turno.',
  ],
  'Shield of God A': [
    'Greatly decreases damage to all allies until the next turn (boss variant).',
    'Reduz muito o dano em todos os aliados até o próximo turno (variante de chefe).',
  ],
  'Eternal Prayer': [
    'Full HP recovery plus ailment and death recovery for all allies, stock included.',
    'Cura HP cheio, ailments e mortos de todos os aliados, estoque incluso.',
  ],
  'Accursed Poison': [
    'Chance to inflict an ailment on all foes (stronger ailments first) and lowers all stats by 1 rank for 3 turns.',
    'Chance de ailment em todos os inimigos (prioriza os fortes) e baixa todos os stats em 1 por 3 turnos.',
  ],
  'Sea of Stars': [
    'Moderate MP recovery to all allies.',
    'Recupera MP moderado de todos os aliados.',
  ],
  "Impaler's Glory": [
    'Greatly increases the damage of the user’s next attack and adds Pierce.',
    'Aumenta muito o dano do próximo ataque do usuário e adiciona Pierce.',
  ],
  'Freikugel EX': [
    'Severe level-based Almighty attack to 1 foe.',
    'Ataque Almighty severo baseado em nível em 1 inimigo.',
  ],
  'Fairy Banquet': [
    'Raises all stats of all allies to the maximum for 3 turns.',
    'Sobe todos os stats de todos os aliados ao máximo por 3 turnos.',
  ],
  'Rasetsu Feast': [
    'Lowers all stats of all foes to the minimum for 3 turns.',
    'Baixa todos os stats de todos os inimigos ao mínimo por 3 turnos.',
  ],
  'Twilight Wave': [
    'Heavy Physical attack to all foes. Chance of inflicting Sleep.',
    'Ataque Físico pesado em todos os inimigos. Chance de Sleep.',
  ],
  'Expand: Piercing Aura': [
    'Increases the damage of all following attacks of all allies and adds Pierce.',
    'Aumenta o dano dos próximos ataques de todos os aliados e adiciona Pierce.',
  ],
  'Waters of Youth': [
    'Full HP and MP recovery to self.',
    'Recupera HP e MP cheios do usuário.',
  ],
  Dekajaon: [
    'Negates all buff effects on all foes.',
    'Remove todos os buffs de todos os inimigos.',
  ],
  'Expand: Critical Aura': [
    'Next Strength-based attack from all allies is 100% accurate and a guaranteed Critical.',
    'O próximo ataque de Força de todos os aliados acerta 100% e é crítico garantido.',
  ],
  'Soul Drain': [
    'Heavy level-based Almighty HP/MP drain attack to 1 foe.',
    'Dreno Almighty pesado baseado em nível de HP/MP em 1 inimigo.',
  ],
  'Big Bang': [
    'Severe level-based Almighty attack to all foes.',
    'Ataque Almighty severo baseado em nível em todos os inimigos.',
  ],
  'Omnipotent Succession': [
    'Lets the user perform the next attack 4 times. Counts as a charge skill.',
    'O usuário repete o próximo ataque 4 vezes. Conta como Charge.',
  ],
  'Waves of Order': [
    'Moderate HP recovery to all allies. Removes ailments and debuffs and adds 1 Press Turn to the next turn.',
    'Cura HP moderado da party, remove ailments/debuffs e soma 1 Press Turn no próximo turno.',
  ],
  'Rains of Order': [
    'Large MP recovery to 1 ally. Adds 1 Press Turn to the next turn.',
    'Cura muito MP de 1 aliado e soma 1 Press Turn no próximo turno.',
  ],
  'Wellspring of Order': [
    'Large recovery to self above max HP. Adds 1 Press Turn to the next turn.',
    'Cura grande no usuário acima do HP máx. e soma 1 Press Turn no próximo turno.',
  ],
  'Tides of Chaos': [
    '3–6 heavy level-based Almighty attacks to random foes. Removes 1 Press Turn from the foe’s next turn.',
    '3–6 ataques Almighty pesados em inimigos aleatórios. Remove 1 Press Turn do próximo turno inimigo.',
  ],
  'Torrent of Chaos': [
    'Severe level-based Almighty attack to 1 foe with a chance of instakill. Removes 1 Press Turn from the foe’s next turn.',
    'Almighty severo em 1 inimigo com chance de instakill. Remove 1 Press Turn do próximo turno inimigo.',
  ],
  'Fountain of Chaos': [
    'Severe level-based Almighty attack to all foes, strips buffs, and removes 1 Press Turn from the foe’s next turn.',
    'Almighty severo em todos, remove buffs e tira 1 Press Turn do próximo turno inimigo.',
  ],
  'Feline Fury': [
    'Severe level-based Physical attack with Pierce to all foes. Lowers Attack and Defense to the minimum for 3 turns.',
    'Físico severo com Pierce em todos. Ataque e Defesa dos inimigos vão ao mínimo por 3 turnos.',
  ],
  'Immolating Breath': [
    'Severe level-based Fire attack with Pierce to all foes. Lowers Attack and Defense to the minimum for 3 turns.',
    'Fogo severo com Pierce em todos. Ataque e Defesa dos inimigos vão ao mínimo por 3 turnos.',
  ],
  'Frost Storm': [
    'Severe level-based Ice attack with Pierce to all foes. Lowers Attack and Defense to the minimum for 3 turns.',
    'Gelo severo com Pierce em todos. Ataque e Defesa dos inimigos vão ao mínimo por 3 turnos.',
  ],
  'Calamitous Thunder': [
    'Severe level-based Electric attack with Pierce to all foes. Lowers Attack and Defense to the minimum for 3 turns.',
    'Elec severo com Pierce em todos. Ataque e Defesa dos inimigos vão ao mínimo por 3 turnos.',
  ],
  'Raging Whirlwind': [
    'Severe level-based Force attack with Pierce to all foes. Lowers Attack and Defense to the minimum for 3 turns.',
    'Força severa com Pierce em todos. Ataque e Defesa dos inimigos vão ao mínimo por 3 turnos.',
  ],
  'Holy Wrath': [
    'Severe level-based Light attack with Pierce to all foes. Lowers Attack and Defense to the minimum for 3 turns.',
    'Luz severa com Pierce em todos. Ataque e Defesa dos inimigos vão ao mínimo por 3 turnos.',
  ],
  'Diabolical Deluge': [
    'Severe level-based Dark attack with Pierce to all foes. Lowers Attack and Defense to the minimum for 3 turns.',
    'Trevas severas com Pierce em todos. Ataque e Defesa dos inimigos vão ao mínimo por 3 turnos.',
  ],
  'Harvest Festival': [
    'Greatly recovers all allies beyond max HP.',
    'Cura muito todos os aliados além do HP máximo.',
  ],
  'Oni Formation': [
    'Greatly increases the next Strength-based attack and maxes Attack for 3 turns for all allies.',
    'Aumenta muito o próximo ataque de Força e maxeia Ataque da party por 3 turnos.',
  ],
  'Four Heavenly Edicts': [
    'Greatly increases the next Magic-based attack and maxes Attack for 3 turns for all allies.',
    'Aumenta muito o próximo ataque Mágico e maxeia Ataque da party por 3 turnos.',
  ],
  "Fairies' Game": [
    'Recovers 1 ally beyond max HP. Maxes all stats and raises the chance of being targeted for 3 turns.',
    'Cura 1 aliado além do HP máx., maxeia stats e aumenta a chance de ser alvo por 3 turnos.',
  ],
  'Bouncy Body': [
    'Reflects a Physical attack once for all allies for 1 turn.',
    'Reflete 1 golpe Físico para todos os aliados por 1 turno.',
  ],
  'Guardian Angels': [
    'Reflects a Magic attack once for all allies for 1 turn.',
    'Reflete 1 golpe Mágico para todos os aliados por 1 turno.',
  ],
  'Qadištu Entropy': [
    '2 heavy level-based Almighty attacks to all foes. High chance of Charm. Large HP recovery to all allies.',
    '2 golpes Almighty pesados em todos. Alta chance de Charm. Cura grande de HP na party.',
  ],
  'Qadistu Entropy': [
    '2 heavy level-based Almighty attacks to all foes. High chance of Charm. Large HP recovery to all allies.',
    '2 golpes Almighty pesados em todos. Alta chance de Charm. Cura grande de HP na party.',
  ],
  'Qadistu Entropy B': [
    'Boss variant of Qadištu Entropy: heavy Almighty pressure plus Charm and party heal.',
    'Variante de chefe da Qadištu Entropy: Almighty pesado, Charm e cura na party.',
  ],
  'Blossoming Sakura': [
    'Moderate HP and MP recovery to all allies and maxes all stats for 3 turns.',
    'Cura HP e MP moderados da party e maxeia todos os stats por 3 turnos.',
  ],
  "Dana's Wisdom": [
    'Restores Press Turn icons to the state they were in at the start of the turn.',
    'Restaura os Press Turns ao estado do início do turno.',
  ],
  Trafuri: [
    'Escapes from a non-boss battle.',
    'Foge de uma luta que não seja de chefe.',
  ],
  'Trafuri A': [
    'Boss variant of Trafuri: attempts to flee the battle.',
    'Variante de chefe de Trafuri: tenta fugir da luta.',
  ],
  Escape: [
    'The user attempts to flee the battle.',
    'O usuário tenta fugir da luta.',
  ],
  'Do nothing': [
    'The user skips their action.',
    'O usuário passa a ação.',
  ],
  'Called an ally': [
    'Calls an additional ally into battle.',
    'Chama um aliado extra para a luta.',
  ],
  'Wait and see': [
    'The user waits and does not act this turn.',
    'O usuário espera e não age neste turno.',
  ],
  Electrify: [
    'Empowers allies with an Electric charge (boss exclusive).',
    'Carrega aliados com Elec (exclusivo de chefe).',
  ],
  'Electrify A': [
    'Empowers 1 ally with an Electric charge (boss exclusive).',
    'Carrega 1 aliado com Elec (exclusivo de chefe).',
  ],
  'Call Angel': [
    'Summons angelic allies into battle.',
    'Invoca aliados angélicos na luta.',
  ],
  'Call Soldiers': [
    'Summons soldier allies into battle.',
    'Invoca soldados aliados na luta.',
  ],
  'Call Souls': [
    'Summons soul allies into battle.',
    'Invoca almas aliadas na luta.',
  ],
  'Call Evil': [
    'Summons evil allies into battle.',
    'Invoca aliados malignos na luta.',
  ],
  'Call Allies': [
    'Summons additional allies into battle.',
    'Invoca aliados extras na luta.',
  ],
  'Contempt of God': [
    'Boss exclusive: adds extra Press Turns.',
    'Exclusivo de chefe: adiciona Press Turns extras.',
  ],
  'True Replication': [
    'Creates a true copy of the user (boss exclusive).',
    'Cria uma cópia verdadeira do usuário (chefe).',
  ],
  'False Replication': [
    'Creates a false copy of the user (boss exclusive).',
    'Cria uma cópia falsa do usuário (chefe).',
  ],
  'Magatsuhi Harvest': [
    'Harvests Magatsuhi to restore allies (boss exclusive).',
    'Colhe Magatsuhi para restaurar aliados (chefe).',
  ],
  'Magatsuhi Harvest A': [
    'Stronger Magatsuhi harvest that restores allies (boss exclusive).',
    'Colheita forte de Magatsuhi que restaura aliados (chefe).',
  ],
  'Magatsuhi Harvest B': [
    'Alternate Magatsuhi harvest that restores allies (boss exclusive).',
    'Colheita alternativa de Magatsuhi que restaura aliados (chefe).',
  ],
  'Lightning Pulse A': [
    'Boss variant of Lightning Pulse: Electric pulse that pressures the party.',
    'Variante de chefe de Lightning Pulse: pulso Elec contra a party.',
  ],
  'Bit Conversion': [
    'Converts the user’s form or resources mid-battle (boss exclusive).',
    'Converte a forma ou recursos do usuário no meio da luta (chefe).',
  ],
  'Cleansing Jolt': [
    'Purges statuses from the user with a jolt (boss exclusive).',
    'Purga status do usuário com um choque (chefe).',
  ],
  'Mitama Soul': [
    'Randomizes the user’s weakness at the start of battle.',
    'Randomiza a fraqueza do usuário no início da luta.',
  ],
  Musmahhu: [
    'When the user’s HP reaches 0, drains HP from Tiamat and revives with full HP.',
    'Se o HP chegar a 0, drena HP de Tiamat e revive com HP cheio.',
  ],
  'World Ingurgitation': [
    'At the start of the user’s turn, weaknesses struck last turn become Drain.',
    'No início do turno, fraquezas acertadas no turno anterior viram Drain.',
  ],
  'Magatsuhi Thriftiness': [
    'Slightly decreases Magatsuhi consumed when an ally uses a Magatsuhi Skill.',
    'Reduz um pouco o Magatsuhi gasto quando um aliado usa Magatsuhi.',
  ],
  'Magatsuhi Plunder': [
    'Instakill drain that steals Magatsuhi from the target (boss exclusive).',
    'Dreno com instakill que rouba Magatsuhi do alvo (chefe).',
  ],
  'Shadow Summoning': [
    'Summons shadow allies into battle (boss exclusive).',
    'Invoca aliados-sombra na luta (chefe).',
  ],
  'Primordial Parturition': [
    'Revives or births an ally mid-battle (boss exclusive).',
    'Revive ou gera um aliado no meio da luta (chefe).',
  ],
  'Annihilation Ray A': [
    'Boss setup for Annihilation Ray.',
    'Preparação de chefe para Annihilation Ray.',
  ],
  'Vinyl Bomb A': [
    'Boss variant of Vinyl Bomb: returns Pierce damage as Almighty.',
    'Variante de chefe de Vinyl Bomb: devolve dano Pierce como Almighty.',
  ],
  'Heavenly Counter': [
    'Chance to counter Strength-based attacks with a weak Dark attack that lowers Attack by 1 rank for 3 turns.',
    'Chance de contra-atacar golpes de Força com Trevas fracas e baixar Ataque em 1 por 3 turnos.',
  ],
  'Curse Siphon': [
    'Recover a little MP when afflicted with an ailment.',
    'Recupera um pouco de MP ao sofrer ailment.',
  ],
  'Great Curse Siphon': [
    'Recover more MP when afflicted with an ailment.',
    'Recupera mais MP ao sofrer ailment.',
  ],
  'Critical Zealot': [
    'Increases Critical damage but decreases normal attack damage.',
    'Aumenta o dano crítico e reduz o dano de ataques normais.',
  ],
  'Rooted Soul': [
    'Increases max HP and MP (boss exclusive).',
    'Aumenta HP e MP máximos (chefe).',
  ],
  'Elusive Eclipse': [
    'Grants Physical evasion or concealment (boss exclusive).',
    'Concede evasão Física ou ocultação (chefe).',
  ],
  Intercalation: [
    'Manipulates Press Turns (boss exclusive).',
    'Manipula Press Turns (chefe).',
  ],
  Restore: [
    'Recover a little MP after hitting a weakness or landing a Critical.',
    'Recupera um pouco de MP ao acertar fraqueza ou crítico.',
  ],
  'High Restore': [
    'Recover more MP after hitting a weakness or landing a Critical.',
    'Recupera mais MP ao acertar fraqueza ou crítico.',
  ],
  'Boon Boost': [
    'Extends -kaja and -nda effects by 1 extra turn.',
    'Estende efeitos -kaja e -nda por mais 1 turno.',
  ],
  'Boon Boost EX': [
    'Greatly extends -kaja and -nda effects.',
    'Estende muito os efeitos -kaja e -nda.',
  ],
  Safeguard: [
    'Evaded, Nulled, Drained, or Repelled hits do not cost a Press Turn.',
    'Golpes evadidos, anulados, drenados ou refletidos não gastam Press Turn.',
  ],
  'Inspiring Leader': [
    'If the demon’s level is lower than the Nahobino, EXP gained increases.',
    'Se o nível do demon for menor que o do Nahobino, o EXP sobe.',
  ],
  "Impaler's Revenge": [
    'Applies Impaler’s Animus after being hit (boss exclusive).',
    'Aplica Impaler’s Animus depois de ser atingido (chefe).',
  ],
  'Magatsuhi Spring': [
    'Slight MP recovery for all active allies when the Magatsuhi Gauge fills.',
    'Cura um pouco de MP da party ativa quando a barra de Magatsuhi enche.',
  ],
  Forager: [
    'Shortens the time before relics can be collected again.',
    'Encurta o tempo até relíquias poderem ser coletadas de novo.',
  ],
  'Demonic Mediation': [
    'If a demon’s mood sours mid-negotiation, they may forgive you.',
    'Se o humor azedar na negociação, o demon pode perdoar.',
  ],
  Allure: [
    'May step forward during negotiation and ensure lesser demands.',
    'Pode entrar na negociação e garantir exigências menores.',
  ],
  'Ironclad Defense': [
    'While in the active party, ally Lahmu cannot be targeted by attacks.',
    'Enquanto estiver na party, o Lahmu aliado não pode ser alvo.',
  ],
  'Alms of Uprising': [
    'Incapacitated allies in stock revive with 1 HP at the end of battle.',
    'Aliados incapacitados no estoque revivem com 1 HP no fim da luta.',
  ],
  'Fickle Personality': [
    'During Omagatoki, weakness hits with positive potential become Critical.',
    'Durante Omagatoki, acertos em fraqueza com potencial positivo viram crítico.',
  ],
  "King's Ascendancy": [
    'Returns the target to stock after landing a Critical hit.',
    'Devolve o alvo ao estoque depois de um crítico.',
  ],
  'Unwavering Faith': [
    'At the start of the user’s turn, removes stat debuffs from ally Abdiel.',
    'No início do turno, remove debuffs da Abdiel aliada.',
  ],
  "Mesektet's Path": [
    'For 1 turn, counters all attacks with weak Almighty damage and inflicts Shroud.',
    'Por 1 turno, contra-ataca tudo com Almighty fraco e aplica Shroud.',
  ],
  'Hellish Mask': [
    'Reduces the chance of instakill and being afflicted with ailments.',
    'Reduz a chance de instakill e de sofrer ailments.',
  ],
  'Abyssal Mask': [
    'Greatly reduces the chance of instakill and being afflicted with ailments.',
    'Reduz muito a chance de instakill e de sofrer ailments.',
  ],
  'Poison Adept': [
    'Increases the effect of Poison inflicted by the user.',
    'Aumenta o efeito do Poison aplicado pelo usuário.',
  ],
  'Poison Master': [
    'Greatly increases the effect of Poison inflicted by the user.',
    'Aumenta muito o efeito do Poison aplicado pelo usuário.',
  ],
  'Beast Eye': [
    'Increases the chance of attacks hitting.',
    'Aumenta a chance dos ataques acertarem.',
  ],
  'Dragon Eye': [
    'Greatly increases the chance of attacks hitting.',
    'Aumenta muito a chance dos ataques acertarem.',
  ],
  'Bloody Glee': [
    'Increases Critical rate.',
    'Aumenta a taxa de crítico.',
  ],
  'Murderous Glee': [
    'Greatly increases Critical rate.',
    'Aumenta muito a taxa de crítico.',
  ],
  Endure: [
    'Survive a lethal attack with 1 HP once per battle.',
    'Sobrevive a um golpe letal com 1 HP uma vez por luta.',
  ],
  'Enduring Soul': [
    'Survive a lethal attack with full HP once per battle.',
    'Sobrevive a um golpe letal com HP cheio uma vez por luta.',
  ],
  'Life Aid': [
    'Moderately restores HP after a battle.',
    'Recupera HP moderado depois da luta.',
  ],
  'Light Life Aid': [
    'Slightly restores HP after a battle.',
    'Recupera um pouco de HP depois da luta.',
  ],
  'Mana Aid': [
    'Moderately restores MP after a battle.',
    'Recupera MP moderado depois da luta.',
  ],
  'Light Mana Aid': [
    'Slightly restores MP after a battle.',
    'Recupera um pouco de MP depois da luta.',
  ],
  'Life Spring': [
    'Increases max HP.',
    'Aumenta o HP máximo.',
  ],
  'Great Life Spring': [
    'Greatly increases max HP.',
    'Aumenta muito o HP máximo.',
  ],
  'Mana Spring': [
    'Increases max MP.',
    'Aumenta o MP máximo.',
  ],
  'Great Mana Spring': [
    'Greatly increases max MP.',
    'Aumenta muito o MP máximo.',
  ],
  Counter: [
    'Chance to counter Physical attacks with a weak Physical hit.',
    'Chance de contra-atacar golpes Físicos com um golpe Físico fraco.',
  ],
  Retaliate: [
    'Chance to counter Physical attacks with a medium Physical hit.',
    'Chance de contra-atacar golpes Físicos com um golpe Físico médio.',
  ],
  Adversary: [
    'When the user receives an ailment, deal severe Almighty damage to the attacker.',
    'Ao sofrer ailment, causa Almighty severo no atacante.',
  ],
  'Affable Hospitality': [
    'Allies in battle gain the same support effects as the user.',
    'Aliados em luta ganham os mesmos efeitos de suporte do usuário.',
  ],
  'Ailed Resurgence': [
    'Increases damage for all allies that have ailments.',
    'Aumenta o dano de todos os aliados com ailment.',
  ],
  'Angelic Order': [
    'The Magatsuhi Gauge increases on the user’s action based on how many allies have Angelic Order.',
    'A barra de Magatsuhi sobe na ação do usuário conforme quantos têm Angelic Order.',
  ],
  'Auspicious Beast': [
    'Skill potentials improve among demons with Auspicious Beast based on how many are in the party.',
    'Potenciais sobem entre demons com Auspicious Beast conforme quantos estão na party.',
  ],
  Avenger: [
    'Increases damage based on the number of incapacitated allies in stock.',
    'Aumenta o dano conforme aliados incapacitados no estoque.',
  ],
  "Beginner's Luck": [
    'Increases damage when attacking a target that has an ailment.',
    'Aumenta o dano ao atacar um alvo com ailment.',
  ],
  'Best Friend': [
    'If an ally with Kept Waiting is active, the user’s debuffs lower stats by 2 ranks.',
    'Se um aliado com Kept Waiting estiver ativo, os debuffs do usuário baixam 2 ranks.',
  ],
  Biondetta: [
    'Debuffs lower stats by 2 ranks when no Herald, Megami, Femme, or Lady is in the party.',
    'Debuffs baixam 2 ranks se não houver Herald, Megami, Femme ou Lady na party.',
  ],
  'Blessings Abound': [
    'When the user is debuffed, slight HP recovery and ailment cure for all allies (once per turn).',
    'Ao ser debuffado, cura um pouco de HP e ailments da party (1× por turno).',
  ],
  'Boon of Sloth': [
    'Increases the user’s Dark damage based on hits dealt by allies this turn.',
    'Aumenta o dano de Trevas do usuário conforme hits dos aliados neste turno.',
  ],
  'Bountiful Earth': [
    'If an ally’s Defense is raised by 2 ranks, attacks that miss their weakness are weakened.',
    'Se a Defesa de um aliado subir 2 ranks, golpes que não acertam fraqueza enfraquecem.',
  ],
  'Breath of Abundance': [
    'All allies’ Force attacks may become Critical hits.',
    'Ataques de Força dos aliados podem virar crítico.',
  ],
  'Brewing Storm': [
    'When switching out, the incoming ally’s next Strength attack is 100% accurate and a Critical.',
    'Ao sair, o próximo ataque de Força de quem entra acerta 100% e é crítico.',
  ],
  'Burden of Talent': [
    'Allies with ailments take more damage, but ailment infliction chance rises.',
    'Aliados com ailment tomam mais dano, mas a chance de aplicar ailment sobe.',
  ],
  'Burning Aspiration': [
    'When the user Resists or Nulls an attack, chance to counter with medium Fire and instakill.',
    'Ao Resistir ou Anular, chance de contra-atacar com Fogo médio e instakill.',
  ],
  'Capricious Goddess': [
    'Greatly increases damage if the party has already taken 8 actions this turn.',
    'Aumenta muito o dano se a party já fez 8 ações neste turno.',
  ],
  'Carpet Bolting': [
    'Increases the user’s Electric damage based on hits dealt by allies this turn.',
    'Aumenta o dano Elec do usuário conforme hits dos aliados neste turno.',
  ],
  'Catastrophic Gales': [
    'Increases the user’s Force damage based on hits dealt by allies this turn.',
    'Aumenta o dano de Força do usuário conforme hits dos aliados neste turno.',
  ],
  'Ceaseless Crucifixion': [
    'Increases the user’s Almighty damage based on hits dealt by allies this turn.',
    'Aumenta o dano Almighty do usuário conforme hits dos aliados neste turno.',
  ],
  Chanchala: [
    'If an ally’s Attack is raised by 2 ranks, their attacks, including Magic, may become Critical.',
    'Se o Ataque de um aliado subir 2 ranks, os ataques (inclusive mágicos) podem critar.',
  ],
  'Compounded Calamity': [
    'Increases damage when striking weaknesses of foes that have ailments.',
    'Aumenta o dano ao acertar fraqueza de inimigos com ailment.',
  ],
  'Crime and Punishment': [
    'Adds flashing Press Turns next turn based on how often the user’s weakness or Critical was hit.',
    'Soma Press Turns piscantes no próximo turno conforme fraquezas/críticos sofridos.',
  ],
  'Crippling Blow': [
    'Chance of instakill when striking a weakness or landing a Critical.',
    'Chance de instakill ao acertar fraqueza ou crítico.',
  ],
  'Critical Melody': [
    'Increases Critical damage of Physical attacks for all allies.',
    'Aumenta o dano crítico Físico de todos os aliados.',
  ],
  'Curious Dance': [
    'When switching out, all buffs and debuffs on self pass to the incoming ally.',
    'Ao sair, passa buffs e debuffs para quem entra.',
  ],
  "Death's Door": [
    'When the user Resists or Nulls an attack, chance to counter with medium Dark and instakill.',
    'Ao Resistir ou Anular, chance de contra-atacar com Trevas médias e instakill.',
  ],
  'Deathly Affliction': [
    'Raises all allies’ Accuracy and Critical rate against foes that have ailments.',
    'Sobe precisão e crítico da party contra inimigos com ailment.',
  ],
  'Divine Benevolence': [
    'Reduces MP costs of support skills for all allies.',
    'Reduz o custo de MP das skills de suporte da party.',
  ],
  'Divine Decree': [
    'Allies’ attacks with positive skill potential, including Magic, may become Critical.',
    'Ataques da party com potencial positivo, inclusive mágicos, podem critar.',
  ],
  'Divine Dismantlement': [
    'All allies gain the same buffs as any ally that becomes incapacitated.',
    'A party herda os buffs de qualquer aliado que cair.',
  ],
  'Divined Fortune': [
    'If an ally’s Accuracy/Evasion is raised by 2 ranks, their Critical rate increases.',
    'Se Precisão/Evasão de um aliado subir 2 ranks, o crítico dele sobe.',
  ],
  "Dragon's Blood": [
    'Raises Accuracy and Critical rate when a Drake, Dragon, or Snake is in the party.',
    'Sobe precisão e crítico se houver Drake, Dragon ou Snake na party.',
  ],
  'Elephantine Ricochet': [
    'Increases damage dealt when Repelling based on how many weaknesses the user has.',
    'Aumenta o dano ao Refletir conforme quantas fraquezas o usuário tem.',
  ],
  'Eye of Horus': [
    'When switching out, the incoming ally’s next attack deals more damage and gains Pierce.',
    'Ao sair, o próximo ataque de quem entra dá mais dano e ganha Pierce.',
  ],
  'Eye of Ra': [
    'When switching out, greatly increases the incoming ally’s next Magic attack.',
    'Ao sair, aumenta muito o próximo ataque Mágico de quem entra.',
  ],
  'Fair Weather Prayer': [
    'All allies’ Electric attacks may become Critical hits.',
    'Ataques Elec dos aliados podem virar crítico.',
  ],
  "Fairy King's Melody": [
    'When summoned from stock, removes stat debuffs from all allies.',
    'Ao ser chamado do estoque, remove debuffs de todos os aliados.',
  ],
  'Faithful Companion': [
    'Increases damage for the ally that acts after the user when striking a weakness.',
    'Aumenta o dano de quem age depois do usuário ao acertar fraqueza.',
  ],
  'Fear of Death': [
    'During Omagatoki, the user’s positive-potential attacks deal more damage and may instakill.',
    'Durante Omagatoki, ataques com potencial positivo dão mais dano e podem instakillar.',
  ],
  'Figment of Darkness': [
    'When the user is incapacitated, maxes all allies’ stats for 3 turns (once per battle).',
    'Ao cair, maxeia os stats da party por 3 turnos (1× por luta).',
  ],
  'Firmament Restoration': [
    'If the user Resists or Nulls 2+ attacks, adds 1 Press Turn at the start of their next turn.',
    'Se Resistir ou Anular 2+ golpes, soma 1 Press Turn no próximo turno.',
  ],
  'Flame of 12,000 Angels': [
    'Increases damage when a Fury, Divine, or Herald ally strikes a weakness.',
    'Aumenta o dano quando um aliado Fury, Divine ou Herald acerta fraqueza.',
  ],
  'Focused Assault': [
    'Raises Accuracy and Critical rate when attacking the same single target as the previous ally.',
    'Sobe precisão e crítico ao atacar o mesmo alvo único do aliado anterior.',
  ],
  'Four Heavenly Kings': [
    'Raises all of the user’s stats by 2 ranks for 3 turns when another Four Heavenly Kings demon is summoned.',
    'Sobe todos os stats em 2 por 3 turnos quando outro Four Heavenly Kings é invocado.',
  ],
  'Four Horsemen': [
    'When switching to another Four Horsemen, all buffs and support effects pass to them.',
    'Ao trocar para outro Four Horsemen, passa buffs e suporte.',
  ],
  'Four Oni': [
    'Charge effects and Critical damage increase based on how many Four Oni are in the party.',
    'Charge e dano crítico sobem conforme quantos Four Oni estão na party.',
  ],
  'Frontline Adaptability': [
    'Allies afflicted with Confusion are more likely to perform the correct action.',
    'Aliados com Confuse tendem mais a agir certo.',
  ],
  "Give Me Your Soul!": [
    'When the user is debuffed, slight MP recovery to all allies (once per turn).',
    'Ao ser debuffado, cura um pouco de MP da party (1× por turno).',
  ],
  'Glorious Invocation': [
    'All allies’ Almighty attacks may become Critical hits.',
    'Ataques Almighty dos aliados podem virar crítico.',
  ],
  'Grace Unto Service': [
    'When the user receives a stat buff from an ally, that ally recovers a little MP.',
    'Quando um aliado buffa o usuário, esse aliado recupera um pouco de MP.',
  ],
  'Guardian Beast': [
    'When the user Resists or Nulls an attack, chance to counter with medium Electric and instakill.',
    'Ao Resistir ou Anular, chance de contra-atacar com Elec médio e instakill.',
  ],
  'Hammer of Judgment': [
    'When the user is debuffed, adds 1 Press Turn at the start of their next turn.',
    'Ao ser debuffado, soma 1 Press Turn no próximo turno.',
  ],
  "Hand You're Dealt": [
    'Increases Critical rate based on how many weaknesses the user and allies have.',
    'Sobe o crítico conforme as fraquezas do usuário e da party.',
  ],
  'Healing Hand': [
    'When restoring an ally’s HP, ailments may also be cured.',
    'Ao curar HP de um aliado, pode curar ailments também.',
  ],
  'Heart of Devotion': [
    'Slight MP recovery to all allies when the user becomes incapacitated.',
    'Cura um pouco de MP da party quando o usuário cai.',
  ],
  'Heavenly Reversal': [
    'When summoned from stock, reverses buffs and debuffs for all other allies.',
    'Ao ser chamado do estoque, inverte buffs e debuffs dos outros aliados.',
  ],
  Helmsman: [
    'Greatly raises Accuracy for the next ally and lowers miss chance if they have Mirage.',
    'Sobe muito a precisão de quem age depois e reduz erro se estiver com Mirage.',
  ],
  Herkeios: [
    'Raises Electric Accuracy and Critical rate based on able allies in stock.',
    'Sobe precisão e crítico Elec conforme aliados aptos no estoque.',
  ],
  'Honey Trap': [
    'When the user guards an attack, chance to counter with a severe Physical attack.',
    'Ao defender, chance de contra-atacar com Físico severo.',
  ],
  'Impenetrable Purity': [
    'When the user guards or has Defense raised by 2 ranks, Pierce is nullified.',
    'Ao defender ou com Defesa +2, anula Pierce.',
  ],
  'Incendiary Stoning': [
    'Increases the user’s Fire damage based on hits dealt by allies this turn.',
    'Aumenta o dano de Fogo do usuário conforme hits dos aliados neste turno.',
  ],
  'Kept Waiting': [
    'If an ally with Best Friend is active, slight HP and MP recovery on the user’s action.',
    'Se Best Friend estiver ativo, cura um pouco de HP e MP na ação do usuário.',
  ],
  'King of Conflagration': [
    'All allies’ Fire attacks may become Critical hits.',
    'Ataques de Fogo dos aliados podem virar crítico.',
  ],
  'Lighted Wheel': [
    'Increases the user’s Light damage based on hits dealt by allies this turn.',
    'Aumenta o dano de Luz do usuário conforme hits dos aliados neste turno.',
  ],
  'Lightning Speed': [
    'Increases Critical rate when Accuracy/Evasion is raised.',
    'Sobe o crítico quando Precisão/Evasão está elevada.',
  ],
  'Magic Harp': [
    'Allies with Omagatoki may apply Sleep and instakill with their attacks.',
    'Aliados com Omagatoki podem aplicar Sleep e instakill nos ataques.',
  ],
  Megalomania: [
    'Allies that attack with a Charge effect may retain the Charge.',
    'Aliados que atacam com Charge podem manter o Charge.',
  ],
  'Might of Dawn': [
    'When hit by Pierce, counters with a heavy Light Pierce attack that may inflict Mirage.',
    'Ao tomar Pierce, contra-ataca com Luz pesada com Pierce e chance de Mirage.',
  ],
  'Moirae Cutter': [
    'With Lachesis and Atropos in the party, MP costs for all allies are reduced.',
    'Com Lachesis e Atropos na party, o custo de MP de todos cai.',
  ],
  'Moirae Measurer': [
    'With Clotho and Atropos in the party, buff and debuff timers do not decrease.',
    'Com Clotho e Atropos na party, a duração de buffs/debuffs não cai.',
  ],
  'Moirae Spinner': [
    'With Clotho and Lachesis in the party, weakness hits may instakill.',
    'Com Clotho e Lachesis na party, acertos em fraqueza podem instakillar.',
  ],
  'Monstrous Offering': [
    'When switching to a Fury, all buffs and support effects pass to them.',
    'Ao trocar para um Fury, passa buffs e suporte.',
  ],
  'Mother of Ploys': [
    'When switching to a Deity, all buffs and support effects pass to them.',
    'Ao trocar para um Deity, passa buffs e suporte.',
  ],
  'Myopic Pressure': [
    'When summoned from stock, lowers Accuracy/Evasion of everyone else by 1 rank for 3 turns.',
    'Ao ser chamado, baixa Precisão/Evasão de todos os outros em 1 por 3 turnos.',
  ],
  'Naga-Loka': [
    'Increases damage when a Drake, Dragon, or Snake ally strikes a weakness.',
    'Aumenta o dano quando um aliado Drake, Dragon ou Snake acerta fraqueza.',
  ],
  'Nation Builder': [
    'When casting a stat buff on an ally, ailments may be cured.',
    'Ao buffar um aliado, pode curar ailments.',
  ],
  'Nation Founder': [
    'When healing an ally, a random stat may rise by 1 rank for 3 turns.',
    'Ao curar um aliado, um stat aleatório pode subir 1 por 3 turnos.',
  ],
  'Nine-Day Restoration': [
    'Increases weakness damage if the Magatsuhi Gauge is not full.',
    'Aumenta o dano em fraqueza se a barra de Magatsuhi não estiver cheia.',
  ],
  'Oath of Plenteousness': [
    'When all stats are raised, greatly increases HP and MP restored by the user’s heals.',
    'Com todos os stats altos, aumenta muito a cura de HP e MP do usuário.',
  ],
  "Okuninushi's Teachings": [
    'With a Kunitsu in the party, reduces MP cost of healing and support skills.',
    'Com um Kunitsu na party, reduz o MP de curas e suporte.',
  ],
  'One-Foot Hop': [
    'Reduces damage and raises Evasion for allies who draw enemy hostility.',
    'Reduz dano e sobe evasão de aliados que puxam aggro.',
  ],
  'Pandemonic Feast': [
    'Allies with Omagatoki gain Accuracy and max hits on multi-hit attacks.',
    'Aliados com Omagatoki ganham precisão e hits máximos em multi-hit.',
  ],
  'Paw-to-Paw Combat': [
    'Increases damage when another active demon also has Paw-to-Paw Combat.',
    'Aumenta o dano se outro demon ativo também tiver Paw-to-Paw Combat.',
  ],
  'Pernicious Venom': [
    'Allies’ attacks, including Magic, may become Critical against foes with ailments.',
    'Ataques da party, inclusive mágicos, podem critar em inimigos com ailment.',
  ],
  "Pine Tree's Rebirth": [
    'Slight HP recovery to all allies when the user becomes incapacitated.',
    'Cura um pouco de HP da party quando o usuário cai.',
  ],
  'Pinpoint Vitals': [
    'Raises Accuracy and Critical rate of the user’s Physical attacks.',
    'Sobe precisão e crítico dos ataques Físicos do usuário.',
  ],
  'Planck of Norn': [
    'Returning to stock on your own turn does not consume a Press Turn.',
    'Voltar ao estoque no próprio turno não gasta Press Turn.',
  ],
  'Power Menace': [
    'When summoned from stock, lowers Attack of everyone else by 1 rank for 3 turns.',
    'Ao ser chamado, baixa o Ataque de todos os outros em 1 por 3 turnos.',
  ],
  'Price of Prosperity': [
    'Slight HP recovery to all allies when an ally becomes incapacitated.',
    'Cura um pouco de HP da party quando um aliado cai.',
  ],
  'Purging Blade': [
    'Increases weakness damage when a Herald is present on either side.',
    'Aumenta o dano em fraqueza se houver Herald em qualquer lado.',
  ],
  'Qadistu Artifice': [
    'Attacks, including Magic, may become Critical for Qadištu allies.',
    'Ataques, inclusive mágicos, podem critar para aliados Qadištu.',
  ],
  'Qadistu Cohort': [
    'Grants Pierce against foes with ailments for the user and Qadištu allies.',
    'Concede Pierce contra inimigos com ailment para o usuário e Qadištu.',
  ],
  'Qadistu Deception': [
    'Raises Accuracy/Evasion for Qadištu allies.',
    'Sobe Precisão/Evasão dos aliados Qadištu.',
  ],
  'Qadistu Mandate': [
    'Reduces damage taken for Qadištu allies.',
    'Reduz o dano sofrido pelos aliados Qadištu.',
  ],
  'Qadistu Savagery': [
    'Increases Critical rate for Qadištu allies.',
    'Aumenta o crítico dos aliados Qadištu.',
  ],
  'Rallying Aid': [
    'When summoned from stock, raises all stats of all allies by 1 rank for 3 turns (once per battle).',
    'Ao ser chamado, sobe todos os stats da party em 1 por 3 turnos (1× por luta).',
  ],
  'Restorative Melody': [
    'Reduces MP costs of healing skills for all allies.',
    'Reduz o custo de MP das curas da party.',
  ],
  'Righteous Cross': [
    'When an ally is incapacitated, lowers all foes’ stats to the minimum for 3 turns (once per battle).',
    'Quando um aliado cai, baixa os stats inimigos ao mínimo por 3 turnos (1× por luta).',
  ],
  'Righteous Sentence': [
    'When the user Resists or Nulls an attack, chance to counter with medium Light and instakill.',
    'Ao Resistir ou Anular, chance de contra-atacar com Luz média e instakill.',
  ],
  'Roaring Mist': [
    'Increases the user’s Ice damage based on hits dealt by allies this turn.',
    'Aumenta o dano de Gelo do usuário conforme hits dos aliados neste turno.',
  ],
  'Ruler of Chaos': [
    'Foes’ innate skills do not trigger when the user attacks.',
    'Inatas inimigas não disparam quando o usuário ataca.',
  ],
  'Runes of Wisdom': [
    'When switching out, greatly increases the incoming ally’s next Strength attack.',
    'Ao sair, aumenta muito o próximo ataque de Força de quem entra.',
  ],
  'Sacrificial Proxy': [
    'When HP reaches 0, an ally in stock may be sacrificed to restore full HP.',
    'Se o HP chegar a 0, um aliado do estoque pode ser sacrificado para curar HP cheio.',
  ],
  "Saint's Prayer": [
    'Allies recover from ailments when returning to stock.',
    'Aliados se curam de ailments ao voltar ao estoque.',
  ],
  Sankosho: [
    'Increases the user’s Physical damage based on hits dealt by allies this turn.',
    'Aumenta o dano Físico do usuário conforme hits dos aliados neste turno.',
  ],
  'Scales of Dominion': [
    'All allies’ Light attacks may become Critical hits.',
    'Ataques de Luz dos aliados podem virar crítico.',
  ],
  'Scarlet Blade': [
    'Increases Critical rate and Critical damage based on how many effects are on the user.',
    'Sobe taxa e dano crítico conforme quantos efeitos o usuário tem.',
  ],
  'Servant of God': [
    'Slight MP recovery when allies with Omagatoki take action.',
    'Cura um pouco de MP quando aliados com Omagatoki agem.',
  ],
  'Seven-Headed Beast': [
    'Chance of slight MP recovery to all allies at the end of a turn where an ally was summoned.',
    'Chance de curar um pouco de MP da party no fim de um turno com invocação.',
  ],
  'Shining Dragon Scales': [
    'Allies with Omagatoki deal more damage with multi-hit attacks.',
    'Aliados com Omagatoki dão mais dano em multi-hit.',
  ],
  'Skyward Withdrawal': [
    'When switching to a Genma, all buffs and support effects pass to them.',
    'Ao trocar para um Genma, passa buffs e suporte.',
  ],
  'Speed Star': [
    'Attacks, including Magic, may become Critical against foes with lower Agility.',
    'Ataques, inclusive mágicos, podem critar em inimigos com menos Agilidade.',
  ],
  'Spirited Synergy': [
    'Allies who draw hostility may survive a fatal blow with 1 HP.',
    'Aliados que puxam aggro podem sobreviver a um golpe fatal com 1 HP.',
  ],
  'Summer Dream': [
    'When the Nahobino’s HP reaches 0, an ally in stock may be sacrificed to restore full HP.',
    'Se o HP do Nahobino chegar a 0, um aliado do estoque pode ser sacrificado para curar tudo.',
  ],
  'Surrogate Guard Hound': [
    'Critical hits deal more damage for the user and Avatar, Holy, Beast, and Wilder allies.',
    'Críticos dão mais dano para o usuário e aliados Avatar, Holy, Beast e Wilder.',
  ],
  'Tablet of Destinies': [
    'Chance to nullify Physical attacks, but cannot evade hits that strike weaknesses.',
    'Chance de anular Físico, mas não evade golpes em fraqueza.',
  ],
  Taboo: [
    'Ailment efficacy and instakill chance rise for all, and ailment recovery falls.',
    'Eficácia de ailment e instakill sobem para todos, e a cura de ailment cai.',
  ],
  Tempest: [
    'When the user Resists or Nulls an attack, chance to counter with medium Force and instakill.',
    'Ao Resistir ou Anular, chance de contra-atacar com Força média e instakill.',
  ],
  Thesmophoria: [
    'Magic attacks used by Lady, Megami, and Femme allies may become Critical.',
    'Ataques mágicos de Lady, Megami e Femme podem virar crítico.',
  ],
  Trickery: [
    'Increases the likelihood of all allies’ innate skills triggering.',
    'Aumenta a chance das inatas da party dispararem.',
  ],
  'Tripura Samhara': [
    'Reduces MP costs of skills for allies with an active Charge effect.',
    'Reduz o MP das skills de aliados com Charge ativo.',
  ],
  'Trumpets of Judgment': [
    'When summoned from stock, removes buffs and debuffs from everyone else.',
    'Ao ser chamado, remove buffs e debuffs de todos os outros.',
  ],
  'Unending Nightmare': [
    'Attacking a sleeping target does not remove Sleep.',
    'Atacar um alvo com Sleep não remove o Sleep.',
  ],
  'Universe Ring': [
    'When the user Resists or Nulls an attack, chance to counter with medium Physical and instakill.',
    'Ao Resistir ou Anular, chance de contra-atacar com Físico médio e instakill.',
  ],
  "Usurper's Ambition": [
    'Magic attacks may become Critical when a Tyrant or Snake is present on either side.',
    'Ataques mágicos podem critar se houver Tyrant ou Snake em qualquer lado.',
  ],
  'Vengeful Might': [
    'Increases Critical damage based on how many weaknesses the user and allies have.',
    'Aumenta o dano crítico conforme as fraquezas do usuário e da party.',
  ],
  'Vina Raga': [
    'All allies’ Ice attacks may become Critical hits.',
    'Ataques de Gelo dos aliados podem virar crítico.',
  ],
  'Vinyl Bomb': [
    'When hit by Pierce, deal equivalent Almighty damage to the attacker.',
    'Ao tomar Pierce, devolve o mesmo dano como Almighty no atacante.',
  ],
  'Virus Carrier': [
    'During Omagatoki, inflicting an ailment does not consume a Press Turn.',
    'Durante Omagatoki, aplicar ailment não gasta Press Turn.',
  ],
  'Wanton Rebel': [
    'When summoned from stock, lowers Defense of everyone else by 1 rank for 3 turns.',
    'Ao ser chamado, baixa a Defesa de todos os outros em 1 por 3 turnos.',
  ],
  'Ward Off Evil': [
    'Increases the chance of natural recovery from ailments for all allies.',
    'Aumenta a chance de cura natural de ailments da party.',
  ],
  'Warrior Trainer': [
    'If an ally with Surrogate Guard Hound is active, the user’s positive-potential attacks do not miss.',
    'Se Surrogate Guard Hound estiver ativo, ataques com potencial positivo não erram.',
  ],
  Willpower: [
    'Allies afflicted with Charm are more likely to perform the correct action.',
    'Aliados com Charm tendem mais a agir certo.',
  ],
  'Wisdom Unleashed': [
    'Slight MP recovery to all allies when the user uses a Magatsuhi Skill.',
    'Cura um pouco de MP da party quando o usuário usa Magatsuhi.',
  ],
  'Wrath of Oyamatsumi': [
    'When the user Resists or Nulls an attack, chance to counter with medium Ice and instakill.',
    'Ao Resistir ou Anular, chance de contra-atacar com Gelo médio e instakill.',
  ],
  'Yumi Nagashi': [
    'If the user’s action consumes more than 1 Press Turn, adds 1 Press Turn to the next turn.',
    'Se a ação gastar mais de 1 Press Turn, soma 1 Press Turn no próximo turno.',
  ],
  'Fire Star': [
    'While in the party, ally Lucifer becomes weak to Fire.',
    'Enquanto estiver na party, o Lúcifer aliado fica fraco a Fogo.',
  ],
  'Ice Star': [
    'While in the party, ally Lucifer becomes weak to Ice.',
    'Enquanto estiver na party, o Lúcifer aliado fica fraco a Gelo.',
  ],
  'Elemental Star': [
    'While in the party, changes ally Lucifer’s elemental weakness.',
    'Enquanto estiver na party, muda a fraqueza elemental do Lúcifer aliado.',
  ],
  'Dark Star': [
    'All allies’ Dark attacks may become Critical hits.',
    'Ataques de Trevas dos aliados podem virar crítico.',
  ],
  "Mother Goddess's Love": [
    'Increases healing skill effects based on how low the user’s HP is.',
    'Aumenta o efeito das curas quanto menor o HP do usuário.',
  ],
  'Star Fragment': [
    'If the user takes no damage on a turn, adds 1 Press Turn at the start of the next turn.',
    'Se não tomar dano no turno, soma 1 Press Turn no próximo turno.',
  ],
  "God's Aid": [
    'At the start of the user’s turn, slight HP recovery if Depraved Arm or Depraved Wing is present.',
    'No início do turno, cura um pouco de HP se Depraved Arm ou Wing estiver presente.',
  ],
  'True Aim': [
    'Greatly raises attack Accuracy.',
    'Aumenta muito a precisão dos ataques.',
  ],
  'Synergistic Replication': [
    'Increases damage based on the number of clones in the active party.',
    'Aumenta o dano conforme o número de clones na party.',
  ],
  'Dawn of Demise': [
    'Raises Critical rate for all allies (Miracle / unique).',
    'Aumenta o crítico de todos os aliados (Miracle / única).',
  ],
  'Bowl of Hygieia': [
    'Greatly increases the effect of the next healing skill used by the user.',
    'Aumenta muito o efeito da próxima cura do usuário.',
  ],
  Estoma: [
    'Prevents encounters with demons of a much lower level for a time.',
    'Evita encontros com demons de nível bem mais baixo por um tempo.',
  ],
  Luster: [
    'Raises all stats of all allies by 1 rank for 3 turns.',
    'Sobe todos os stats de todos os aliados em 1 por 3 turnos.',
  ],
  'Luster Candy': [
    'Raises all stats of all allies by 1 rank for 3 turns.',
    'Sobe todos os stats de todos os aliados em 1 por 3 turnos.',
  ],
  Debilitate: [
    'Lowers all stats of all foes by 1 rank for 3 turns.',
    'Baixa todos os stats de todos os inimigos em 1 por 3 turnos.',
  ],
  Dekaja: [
    'Negates all stat buffs on all foes.',
    'Remove todos os buffs de stats dos inimigos.',
  ],
  Dekunda: [
    'Negates all stat debuffs on all allies.',
    'Remove todos os debuffs de stats dos aliados.',
  ],
  Charge: [
    'Greatly increases the damage of the next Strength-based attack.',
    'Aumenta muito o dano do próximo ataque de Força.',
  ],
  Concentrate: [
    'Greatly increases the damage of the next Magic-based attack.',
    'Aumenta muito o dano do próximo ataque Mágico.',
  ],
  'Critical Aura': [
    'Guarantees a Critical on the next Strength-based attack and makes it 100% accurate.',
    'Garante crítico no próximo ataque de Força e acerto 100%.',
  ],
  "Impaler's Animus": [
    'Increases the damage of the next attack and adds Pierce.',
    'Aumenta o dano do próximo ataque e adiciona Pierce.',
  ],
  Tetrakarn: [
    'Reflects a Physical attack once for 1 ally.',
    'Reflete 1 golpe Físico de 1 aliado.',
  ],
  Makarakarn: [
    'Reflects a Magic attack once for 1 ally.',
    'Reflete 1 golpe Mágico de 1 aliado.',
  ],
  Tarukaja: [
    'Raises Attack of 1 ally by 1 rank for 3 turns.',
    'Sobe o Ataque de 1 aliado em 1 por 3 turnos.',
  ],
  Matarukaja: [
    'Raises Attack of all allies by 1 rank for 3 turns.',
    'Sobe o Ataque de todos os aliados em 1 por 3 turnos.',
  ],
  Rakukaja: [
    'Raises Defense of 1 ally by 1 rank for 3 turns.',
    'Sobe a Defesa de 1 aliado em 1 por 3 turnos.',
  ],
  Marakukaja: [
    'Raises Defense of all allies by 1 rank for 3 turns.',
    'Sobe a Defesa de todos os aliados em 1 por 3 turnos.',
  ],
  Sukukaja: [
    'Raises Accuracy/Evasion of 1 ally by 1 rank for 3 turns.',
    'Sobe Precisão/Evasão de 1 aliado em 1 por 3 turnos.',
  ],
  Masukukaja: [
    'Raises Accuracy/Evasion of all allies by 1 rank for 3 turns.',
    'Sobe Precisão/Evasão de todos os aliados em 1 por 3 turnos.',
  ],
  Tarunda: [
    'Lowers Attack of 1 foe by 1 rank for 3 turns.',
    'Baixa o Ataque de 1 inimigo em 1 por 3 turnos.',
  ],
  Matarunda: [
    'Lowers Attack of all foes by 1 rank for 3 turns.',
    'Baixa o Ataque de todos os inimigos em 1 por 3 turnos.',
  ],
  Rakunda: [
    'Lowers Defense of 1 foe by 1 rank for 3 turns.',
    'Baixa a Defesa de 1 inimigo em 1 por 3 turnos.',
  ],
  Marakunda: [
    'Lowers Defense of all foes by 1 rank for 3 turns.',
    'Baixa a Defesa de todos os inimigos em 1 por 3 turnos.',
  ],
  Sukunda: [
    'Lowers Accuracy/Evasion of 1 foe by 1 rank for 3 turns.',
    'Baixa Precisão/Evasão de 1 inimigo em 1 por 3 turnos.',
  ],
  Masukunda: [
    'Lowers Accuracy/Evasion of all foes by 1 rank for 3 turns.',
    'Baixa Precisão/Evasão de todos os inimigos em 1 por 3 turnos.',
  ],
};

const ITEM_EN = {
  medicine: 'Restores 50 HP to 1 ally.',
  life_stone: 'Restores 25% HP to 1 ally.',
  ox_bezoar: 'Restores 150 HP to 1 ally.',
  ambrosia: 'Restores 400 HP to 1 ally.',
  bead: 'Fully restores HP to 1 ally.',
  bead_chain: 'Fully restores HP to all allies.',
  muscle_drink: 'Restores 200 HP, with a chance of Mirage.',
  medical_powder: 'Restores 100 HP to 1 ally.',
  chakra_drop: 'Restores 30 MP to 1 ally.',
  chakra_pot: 'Fully restores MP to 1 ally.',
  great_chakra: 'Fully restores MP to all allies.',
  soma_drop: 'Restores 50% HP and MP to 1 ally.',
  soma: 'Fully restores HP and MP to 1 ally.',
  bead_of_life: 'Fully restores HP and MP to all allies.',
  revival_bead: 'Revives 1 ally with 50% HP.',
  balm_of_life: 'Revives 1 ally with full HP.',
  balm_of_rising: 'Revives 1 ally with full HP.',
  whittled_goat: 'Auto-revives the user with full HP.',
  dis_poison: 'Cures ailments on 1 ally.',
  amrita_soda: 'Cures ailments on 1 ally.',
  amrita_shower: 'Cures ailments on all allies.',
  sacred_water: 'Cures ailments on the party.',
  dispel_charm: 'Removes debuffs from all allies.',
  phys_dampener: 'Nullifies 1 Physical hit on the party for 1 turn.',
  fire_dampener: 'Nullifies 1 Fire hit on the party for 1 turn.',
  ice_dampener: 'Nullifies 1 Ice hit on the party for 1 turn.',
  elec_dampener: 'Nullifies 1 Electric hit on the party for 1 turn.',
  force_dampener: 'Nullifies 1 Force hit on the party for 1 turn.',
  light_dampener: 'Nullifies 1 Light hit on the party for 1 turn.',
  dark_dampener: 'Nullifies 1 Dark hit on the party for 1 turn.',
  attack_mirror: 'Reflects 1 Physical attack for an ally.',
  magic_mirror: 'Reflects 1 Magic attack for an ally.',
  charge_gem: 'Grants Charge (next Physical).',
  concentrate_gem: 'Grants Concentrate (next Magic).',
  critical_gem: 'Guarantees a Critical on the next Physical.',
  agi_stone: 'Weak Fire attack to 1 foe.',
  bufu_rock: 'Weak Ice attack to 1 foe.',
  zio_stone: 'Weak Electric attack to 1 foe.',
  zan_rock: 'Weak Force attack to 1 foe.',
  maragi_rock: 'Fire attack to all foes.',
  mabufu_rock: 'Ice attack to all foes.',
  mazio_rock: 'Electric attack to all foes.',
  mazan_rock: 'Force attack to all foes.',
  megido_rock: 'Almighty attack to all foes.',
  homunculus: 'Revives 1 ally with 1 HP.',
  precious_egg: 'Restores 80% HP and MP to 1 ally.',
  magatsuhi_shard: 'Fills 40 Magatsuhi.',
  magatsuhi_crystal: 'Fills the Magatsuhi Gauge.',
  ruby: "Rag's Jewelry gem. Dropped by Flaemis and Dragons. Trades for Ara Mitama.",
  sapphire: "Rag's Jewelry gem. Dropped by Aquans. Trades for Saki Mitama.",
  diamond: 'Rare gem sold for Macca.',
  pearl: 'Pearl sold for Macca.',
  junk: 'Scrap. Sells for little, but it fills the bag.',
  amalgam: 'Solidified Magatsuhi residue.',
  atma_fragment: 'Atma shard. Hunters pay well.',
  atma_core: 'Atma core. Almost only Tyrants drop it.',
  macca_leaf: 'A leaf merchants will take as payment.',
  soul_drop: 'Soul droplets. Best sold.',
  od_extractor: 'Od extract. DDS sell item.',
  chakra_oil: 'Chakra oil. Sell it or restore 20 MP.',
  bead_shard: 'Bead fragment. Restores 40% HP.',
  death_gem: 'Tyrant gem. Only good for a high sell price.',
  masakado_crest: 'Extremely rare trophy. Collectors pay a fortune.',
  incense_st: 'War scent. Light Physical Charge. Extremely rare drop.',
  incense_ma: 'Mantra scent. Light Concentrate. Extremely rare drop.',
  life_stone_s: 'Restores 10% HP. Common Nocturne drop.',
  soma_droplet: 'Restores 30% HP and MP.',
  dis_stun: 'Cures ailments on 1 ally.',
  dis_charm: 'Cures Charm/Mirage on 1 ally.',
  dis_mute: 'Cures Seal on 1 ally.',
  dis_stone: 'Cures Stone on 1 ally.',
  agilao_stone: 'Medium Fire attack to 1 foe.',
  bufula_rock: 'Medium Ice attack to 1 foe.',
  zionga_stone: 'Medium Electric attack to 1 foe.',
  zanma_rock: 'Medium Force attack to 1 foe.',
  hama_stone: 'Light attack to 1 foe.',
  mudo_stone: 'Dark attack to 1 foe.',
  patra_gem: 'Cures ailments on 1 ally.',
  me_patra_gem: 'Cures ailments on the party.',
  revival_bead_p3: 'Revives with full HP.',
  bead_p3: 'Fully restores HP to 1 ally.',
  soul_bead: 'Restores 60% HP to the party.',
  hiranya: 'Restores 70 HP. Classic SMT item.',
  muscle_drink_dds: 'Restores 180 HP.',
  chakra_pot_dds: 'Restores 80 MP.',
  revival_gem: 'Revives with 40% HP.',
  fire_gem: 'Elemental gem sold for Macca.',
  ice_gem: 'Elemental gem sold for Macca.',
  elec_gem: 'Elemental gem sold for Macca.',
  force_gem: 'Elemental gem sold for Macca.',
  light_gem: 'Light gem sold for Macca.',
  dark_gem: 'Dark gem sold for Macca.',
  gold_bar: 'Gold bar. Sell only.',
  silver_bar: 'Silver bar.',
  bronze_bar: 'Bronze bar.',
  candelabrum_foundation: 'Menorah of Foundation. Trophy from Matador.',
  candelabrum_eternity: 'Menorah of Eternity. Trophy from Daisoujou.',
  candelabrum_dignity: 'Menorah of Dignity. Trophy from Hell Biker.',
  candelabrum_compassion: 'Menorah of Compassion. Trophy from White Rider.',
  candelabrum_insight: 'Menorah of Insight. Trophy from Red Rider.',
  candelabrum_wisdom: 'Menorah of Wisdom. Trophy from Black Rider.',
  candelabrum_majesty: 'Menorah of Majesty. Trophy from Pale Rider.',
  candelabrum_understanding: 'Menorah of Understanding. Trophy from Mother Harlot.',
  candelabrum_glory: 'Menorah of Glory. Trophy from Trumpeter.',
  jade: "Rag's Jewelry gem. Dropped by Elements. Trades for an Element or enters every Mitama recipe.",
  amethyst: "Rag's Jewelry gem. Trades for Nigi Mitama.",
  opal: "Rag's Jewelry gem. Trades for Kusi Mitama.",
};

const pick = (pair, locale) => (locale === 'pt' ? pair[1] : pair[0]);

const elementLabel = (element, locale) => {
  if (!element) return locale === 'pt' ? 'Almighty' : 'Almighty';
  return (locale === 'pt' ? ELEMENT_PT : ELEMENT_EN)[element] ?? element;
};

const targetPhrase = (target, locale) => {
  const en = {
    enemy: '1 foe',
    all_enemies: 'all foes',
    ally: '1 ally',
    all_allies: 'all allies',
    self: 'self',
  };
  const pt = {
    enemy: '1 inimigo',
    all_enemies: 'todos os inimigos',
    ally: '1 aliado',
    all_allies: 'todos os aliados',
    self: 'a si',
  };
  return (locale === 'pt' ? pt : en)[target] ?? target;
};

const powerWord = (damage, locale) => {
  if (damage >= 240) return locale === 'pt' ? 'severo' : 'Severe';
  if (damage >= 190) return locale === 'pt' ? 'pesado' : 'Heavy';
  if (damage >= 140) return locale === 'pt' ? 'médio' : 'Medium';
  return locale === 'pt' ? 'fraco' : 'Weak';
};

const chancePct = (chance) => Math.round((chance ?? 0) * 100);

const ailmentList = (effects, locale) => {
  const names = (effects ?? [])
    .filter((effect) => effect.felling || effect.name)
    .map((effect) => {
      const key = effect.felling ?? effect.name;
      return (locale === 'pt' ? AILMENT_PT : AILMENT_EN)[key] ?? key;
    });
  return [...new Set(names)];
};

const namedFromPattern = (name, locale) => {
  const melody = /^(Phys|Fire|Ice|Elec|Force|Light|Dark|Blessed|Twilit|Frigid|Thunderous|Gusting|Fiery|Restorative) Melody$/.exec(
    name,
  );
  if (melody && !['Restorative Melody', 'Critical Melody'].includes(name)) {
    const elem = melody[1];
    const map = {
      Phys: ['Physical', 'Físico'],
      Fire: ['Fire', 'Fogo'],
      Fiery: ['Fire', 'Fogo'],
      Ice: ['Ice', 'Gelo'],
      Frigid: ['Ice', 'Gelo'],
      Elec: ['Electric', 'Elec'],
      Thunderous: ['Electric', 'Elec'],
      Force: ['Force', 'Força'],
      Gusting: ['Force', 'Força'],
      Light: ['Light', 'Luz'],
      Blessed: ['Light', 'Luz'],
      Dark: ['Dark', 'Trevas'],
      Twilit: ['Dark', 'Trevas'],
    };
    const label = map[elem];
    if (label) {
      return locale === 'pt'
        ? `Na party ativa, aumenta o dano ao acertar fraqueza de ${label[1]} para todos os aliados.`
        : `While in the active party, increases damage when striking a ${label[0]} weakness for all allies.`;
    }
  }
  const gestalt = /^(Phys|Fire|Ice|Elec|Force|Light|Dark) Gestalt$/.exec(name);
  if (gestalt) {
    const label = elementLabel(
      {
        Phys: 'physical',
        Fire: 'fire',
        Ice: 'ice',
        Elec: 'lightning',
        Force: 'force',
        Light: 'holy',
        Dark: 'dark',
      }[gestalt[1]],
      locale,
    );
    return locale === 'pt'
      ? `Aumenta o dano de ${label} do usuário conforme o potencial de ${label} dos aliados na party.`
      : `Increases the damage of the user’s ${label} attacks based on allies’ ${label} skill potentials.`;
  }
  const enhancer = /^(Phys|Fire|Ice|Elec|Force|Light|Dark) Enhancer$/.exec(name);
  if (enhancer) {
    const label = elementLabel(
      {
        Phys: 'physical',
        Fire: 'fire',
        Ice: 'ice',
        Elec: 'lightning',
        Force: 'force',
        Light: 'holy',
        Dark: 'dark',
      }[enhancer[1]],
      locale,
    );
    return locale === 'pt'
      ? `Na party ativa, aliados com potencial de ${label} menor que o do usuário sobem até o mesmo rank.`
      : `While in the active party, allies with a lower ${label} potential than the user are raised to the same rank.`;
  }
  const resist = /^(Resist|Null|Drain|Repel) (Phys|Fire|Ice|Elec|Force|Light|Dark|Almighty)$/.exec(
    name,
  );
  if (resist) {
    const verb = {
      Resist: [
        'Strengthens resistance to',
        'Fortalece a resistência a',
      ],
      Null: ['Nullifies', 'Anula'],
      Drain: ['Absorbs', 'Absorve'],
      Repel: ['Repels', 'Reflete'],
    }[resist[1]];
    const label = elementLabel(
      {
        Phys: 'physical',
        Fire: 'fire',
        Ice: 'ice',
        Elec: 'lightning',
        Force: 'force',
        Light: 'holy',
        Dark: 'dark',
        Almighty: 'almighty',
      }[resist[2]],
      locale,
    );
    return locale === 'pt'
      ? `${verb[1]} ataques de ${label}.`
      : `${verb[0]} ${label} attacks.`;
  }
  const pleroma = /^(High )?(Phys|Fire|Ice|Elec|Force|Light|Dark|Almighty|Heal) Pleroma$/.exec(
    name,
  );
  if (pleroma) {
    const high = Boolean(pleroma[1]);
    if (pleroma[2] === 'Heal') {
      return locale === 'pt'
        ? high
          ? 'Aumenta muito a cura das skills de Heal.'
          : 'Aumenta a cura das skills de Heal.'
        : high
          ? 'Greatly increases the healing of Heal skills.'
          : 'Increases the healing of Heal skills.';
    }
    const label = elementLabel(
      {
        Phys: 'physical',
        Fire: 'fire',
        Ice: 'ice',
        Elec: 'lightning',
        Force: 'force',
        Light: 'holy',
        Dark: 'dark',
        Almighty: 'almighty',
      }[pleroma[2]],
      locale,
    );
    return locale === 'pt'
      ? high
        ? `Aumenta muito o dano de ataques de ${label}.`
        : `Aumenta o dano de ataques de ${label}.`
      : high
        ? `Greatly increases ${label} attack damage.`
        : `Increases ${label} attack damage.`;
  }
  return null;
};

const describePassiveMeta = (skill, locale) => {
  const meta = skill.meta ?? {};
  const element = elementLabel(meta.passiveElement ?? skill.element, locale);
  switch (meta.passiveKind) {
    case 'resist_elem':
      return locale === 'pt'
        ? `Fortalece a resistência a ${element}.`
        : `Strengthens resistance to ${element}.`;
    case 'null_elem':
      return locale === 'pt' ? `Anula ataques de ${element}.` : `Nullifies ${element} attacks.`;
    case 'drain_elem':
      return locale === 'pt' ? `Absorve ataques de ${element}.` : `Absorbs ${element} attacks.`;
    case 'repel_elem':
      return locale === 'pt' ? `Reflete ataques de ${element}.` : `Repels ${element} attacks.`;
    case 'pleroma':
      return locale === 'pt'
        ? `Aumenta o dano de ataques de ${element}.`
        : `Increases ${element} attack damage.`;
    case 'high_pleroma':
      return locale === 'pt'
        ? `Aumenta muito o dano de ataques de ${element}.`
        : `Greatly increases ${element} attack damage.`;
    case 'heal_pleroma':
      return locale === 'pt'
        ? 'Aumenta a cura das skills de Heal.'
        : 'Increases the healing of Heal skills.';
    case 'endure':
      return pick(NAMED.Endure, locale);
    case 'enduring_soul':
      return pick(NAMED['Enduring Soul'], locale);
    case 'life_aid':
      return locale === 'pt'
        ? 'Recupera HP depois da luta.'
        : 'Restores HP after a battle.';
    case 'mana_aid':
      return locale === 'pt'
        ? 'Recupera MP depois da luta.'
        : 'Restores MP after a battle.';
    case 'life_spring':
      return locale === 'pt' ? 'Aumenta o HP máximo.' : 'Increases max HP.';
    case 'mana_spring':
      return locale === 'pt' ? 'Aumenta o MP máximo.' : 'Increases max MP.';
    case 'counter':
      return locale === 'pt'
        ? 'Chance de contra-atacar golpes Físicos.'
        : 'Chance to counter Physical attacks.';
    case 'crit_boost':
      return locale === 'pt' ? 'Aumenta a taxa de crítico.' : 'Increases Critical rate.';
    case 'accuracy':
      return locale === 'pt'
        ? 'Aumenta a chance dos ataques acertarem.'
        : 'Increases the chance of attacks hitting.';
    case 'ailment_resist':
      return locale === 'pt'
        ? 'Reduz a chance de sofrer ailments e instakill.'
        : 'Reduces the chance of ailments and instakill.';
    default:
      return null;
  }
};

const describeSupport = (skill, locale) => {
  const kind = skill.meta?.supportKind;
  const target = targetPhrase(skill.target, locale);
  const map = {
    kaja_atk: [
      `Raises Attack of ${target} by 1 rank for 3 turns.`,
      `Sobe o Ataque de ${target} em 1 por 3 turnos.`,
    ],
    kaja_mag: [
      `Raises Magic of ${target} by 1 rank for 3 turns.`,
      `Sobe a Magia de ${target} em 1 por 3 turnos.`,
    ],
    kaja_def: [
      `Raises Defense of ${target} by 1 rank for 3 turns.`,
      `Sobe a Defesa de ${target} em 1 por 3 turnos.`,
    ],
    kaja_mdef: [
      `Raises Magic Defense of ${target} by 1 rank for 3 turns.`,
      `Sobe a Defesa Mágica de ${target} em 1 por 3 turnos.`,
    ],
    kaja_agi: [
      `Raises Accuracy/Evasion of ${target} by 1 rank for 3 turns.`,
      `Sobe Precisão/Evasão de ${target} em 1 por 3 turnos.`,
    ],
    kunda_atk: [
      `Lowers Attack of ${target} by 1 rank for 3 turns.`,
      `Baixa o Ataque de ${target} em 1 por 3 turnos.`,
    ],
    kunda_mag: [
      `Lowers Magic of ${target} by 1 rank for 3 turns.`,
      `Baixa a Magia de ${target} em 1 por 3 turnos.`,
    ],
    kunda_def: [
      `Lowers Defense of ${target} by 1 rank for 3 turns.`,
      `Baixa a Defesa de ${target} em 1 por 3 turnos.`,
    ],
    kunda_mdef: [
      `Lowers Magic Defense of ${target} by 1 rank for 3 turns.`,
      `Baixa a Defesa Mágica de ${target} em 1 por 3 turnos.`,
    ],
    kunda_agi: [
      `Lowers Accuracy/Evasion of ${target} by 1 rank for 3 turns.`,
      `Baixa Precisão/Evasão de ${target} em 1 por 3 turnos.`,
    ],
    luster: [
      `Raises all stats of ${target} by 1 rank for 3 turns.`,
      `Sobe todos os stats de ${target} em 1 por 3 turnos.`,
    ],
    debilitate: [
      `Lowers all stats of ${target} by 1 rank for 3 turns.`,
      `Baixa todos os stats de ${target} em 1 por 3 turnos.`,
    ],
    charge: [
      'Greatly increases the damage of the next Strength-based attack.',
      'Aumenta muito o dano do próximo ataque de Força.',
    ],
    concentrate: [
      'Greatly increases the damage of the next Magic-based attack.',
      'Aumenta muito o dano do próximo ataque Mágico.',
    ],
    donum_st: [
      'Greatly increases the next Strength-based attack for an ally.',
      'Aumenta muito o próximo ataque de Força de um aliado.',
    ],
    donum_ma: [
      'Greatly increases the next Magic-based attack for an ally.',
      'Aumenta muito o próximo ataque Mágico de um aliado.',
    ],
    critical_aura: [
      'Guarantees a Critical on the next Strength-based attack.',
      'Garante crítico no próximo ataque de Força.',
    ],
    impalers: [
      'Increases the damage of the next attack and adds Pierce.',
      'Aumenta o dano do próximo ataque e adiciona Pierce.',
    ],
    impalers_glory: [
      'Greatly increases the damage of the next attack and adds Pierce.',
      'Aumenta muito o dano do próximo ataque e adiciona Pierce.',
    ],
    dekaja: [
      `Negates all stat buffs on ${target}.`,
      `Remove todos os buffs de stats de ${target}.`,
    ],
    dekunda: [
      `Negates all stat debuffs on ${target}.`,
      `Remove todos os debuffs de stats de ${target}.`,
    ],
    cure_ailment: [
      `Cures ailments on ${target}.`,
      `Cura ailments de ${target}.`,
    ],
    barrier_phys: [
      `Reflects a Physical attack once for ${target}.`,
      `Reflete 1 golpe Físico de ${target}.`,
    ],
    barrier_magic: [
      `Reflects a Magic attack once for ${target}.`,
      `Reflete 1 golpe Mágico de ${target}.`,
    ],
    block_elem: [
      `Nullifies 1 ${elementLabel(skill.meta?.blockElement, locale)} hit for ${target}.`,
      `Anula 1 golpe de ${elementLabel(skill.meta?.blockElement, locale)} em ${target}.`,
    ],
    heavenly_edicts: [
      'Greatly increases the next Magic-based attack and maxes Attack for 3 turns.',
      'Aumenta muito o próximo ataque Mágico e maxeia Ataque por 3 turnos.',
    ],
    oni_formation: [
      'Greatly increases the next Strength-based attack and maxes Attack for 3 turns.',
      'Aumenta muito o próximo ataque de Força e maxeia Ataque por 3 turnos.',
    ],
  };
  if (kind && map[kind]) return pick(map[kind], locale);
  return locale === 'pt'
    ? `Efeito de suporte em ${target}.`
    : `Support effect on ${target}.`;
};

const describeHeal = (skill, locale) => {
  const kind = skill.meta?.healKind;
  const target = targetPhrase(skill.target, locale);
  const percent = skill.meta?.healPercent;
  const patra =
    skill.meta?.healAlsoPatra
      ? locale === 'pt'
        ? ' Também cura ailments.'
        : ' Also cures ailments.'
      : '';
  if (kind === 'cure_ailment') {
    return locale === 'pt' ? `Cura ailments de ${target}.` : `Cures ailments on ${target}.`;
  }
  if (kind === 'revive') {
    const hp = percent === 100 ? (locale === 'pt' ? 'HP cheio' : 'full HP') : `${percent ?? 50}% HP`;
    return locale === 'pt' ? `Revive ${target} com ${hp}.` : `Revives ${target} with ${hp}.`;
  }
  if (kind === 'hp_full') {
    return locale === 'pt'
      ? `Cura 100% do HP de ${target}.${patra}`
      : `Fully restores HP to ${target}.${patra}`;
  }
  if (kind === 'mp_full') {
    return locale === 'pt'
      ? `Cura 100% do MP de ${target}.${patra}`
      : `Fully restores MP to ${target}.${patra}`;
  }
  if (kind === 'hp_mp_full') {
    return locale === 'pt'
      ? `Cura 100% de HP e MP de ${target}.${patra}`
      : `Fully restores HP and MP to ${target}.${patra}`;
  }
  if (kind === 'mp_percent') {
    return locale === 'pt'
      ? `Recupera ${percent ?? 15}% do MP de ${target}.${patra}`
      : `Restores ${percent ?? 15}% MP to ${target}.${patra}`;
  }
  if (kind === 'party_restore') {
    return locale === 'pt'
      ? 'Cura HP cheio, ailments e mortos de todos os aliados, estoque incluso.'
      : 'Full HP, ailment, and death recovery for all allies, stock included.';
  }
  const amount = percent ? `${percent}%` : locale === 'pt' ? 'moderado' : 'moderate';
  return locale === 'pt'
    ? `Cura ${amount} do HP de ${target}.${patra}`
    : `Restores ${amount} HP to ${target}.${patra}`;
};

const describeAilment = (skill, locale) => {
  const names = ailmentList(skill.effects, locale);
  const target = targetPhrase(skill.target, locale);
  const chance = chancePct(skill.effects?.[0]?.chance);
  const list = names.join(locale === 'pt' ? ' e ' : ' and ') || (locale === 'pt' ? 'ailment' : 'an ailment');
  const chanceText = chance ? ` (${chance}%)` : '';
  return locale === 'pt'
    ? `Chance${chanceText} de infligir ${list} em ${target}.`
    : `Chance${chanceText} of inflicting ${list} on ${target}.`;
};

const describeOffense = (skill, locale) => {
  const element = elementLabel(skill.element, locale);
  const target = targetPhrase(skill.target, locale);
  const power = powerWord(skill.damage ?? 0, locale);
  const meta = skill.meta ?? {};
  const hitsMin = meta.hitsMin ?? 1;
  const hitsMax = meta.hitsMax ?? hitsMin;
  const multi = hitsMax > 1;
  const hits =
    hitsMin === hitsMax
      ? `${hitsMin}`
      : `${hitsMin}–${hitsMax}`;
  const pierce = meta.pierce
    ? locale === 'pt'
      ? ' com Pierce'
      : ' with Pierce'
    : '';
  const stat =
    meta.damageStat === 'strength'
      ? locale === 'pt'
        ? ' baseado em Força'
        : ' Strength-based'
      : meta.damageStat === 'magic'
        ? locale === 'pt'
          ? ' baseado em Magia'
          : ' Magic-based'
        : '';
  let core;
  if (multi) {
    core =
      locale === 'pt'
        ? `${hits} ataques de ${element} ${power}s${stat}${pierce} em ${target === 'todos os inimigos' ? 'inimigos aleatórios' : target}`
        : `${hits} ${power.toLowerCase()} ${element} attacks${stat}${pierce} to ${target === 'all foes' ? 'random foes' : target}`;
  } else {
    core =
      locale === 'pt'
        ? `Ataque de ${element} ${power}${stat}${pierce} em ${target}`
        : `${power} ${element} attack${stat}${pierce} to ${target}`;
  }
  const extras = [];
  if (meta.drainKind === 'hp_mp') {
    extras.push(locale === 'pt' ? 'Drena HP e MP' : 'Drains HP and MP');
  } else if (meta.drainKind === 'mp') {
    extras.push(locale === 'pt' ? 'Drena MP' : 'Drains MP');
  } else if (meta.drainKind === 'hp') {
    extras.push(locale === 'pt' ? 'Drena HP' : 'Drains HP');
  }
  if (meta.instakillChance) {
    extras.push(
      locale === 'pt'
        ? meta.instakillOnWeakOnly
          ? 'Chance de instakill em fraqueza'
          : 'Chance de instakill'
        : meta.instakillOnWeakOnly
          ? 'Chance of instakill on weakness'
          : 'Chance of instakill',
    );
  }
  if (meta.embeddedStage) {
    const stage = { atk: ['Attack', 'Ataque'], def: ['Defense', 'Defesa'], agi: ['Accuracy/Evasion', 'Precisão/Evasão'] }[
      meta.embeddedStage
    ];
    extras.push(
      locale === 'pt'
        ? `Baixa ${stage[1]} em 1 por 3 turnos`
        : `Lowers ${stage[0]} by 1 rank for 3 turns`,
    );
  }
  if (meta.powerAgainstFelling) {
    extras.push(
      locale === 'pt'
        ? `Mais forte contra ${AILMENT_PT[meta.powerAgainstFelling] ?? meta.powerAgainstFelling}`
        : `Stronger against ${AILMENT_EN[meta.powerAgainstFelling] ?? meta.powerAgainstFelling}`,
    );
  }
  const ailments = ailmentList(skill.effects, locale);
  if (ailments.length) {
    extras.push(
      locale === 'pt'
        ? `Chance de ${ailments.join(' e ')}`
        : `Chance of ${ailments.join(' and ')}`,
    );
  }
  if (meta.stripKaja) {
    extras.push(locale === 'pt' ? 'Remove buffs' : 'Removes buffs');
  }
  return extras.length ? `${core}. ${extras.join('. ')}.` : `${core}.`;
};

export const describeSkill = (skill, locale = 'en') => {
  const named = NAMED[skill.name];
  if (named) return pick(named, locale);
  const patterned = namedFromPattern(skill.name, locale);
  if (patterned) return patterned;
  if (skill.type === 'heal') return describeHeal(skill, locale);
  if (skill.type === 'buff' || skill.type === 'debuff') return describeSupport(skill, locale);
  if (skill.type === 'ailment') return describeAilment(skill, locale);
  if (skill.type === 'physical' || skill.type === 'magical') {
    return describeOffense(skill, locale);
  }
  const fromMeta = describePassiveMeta(skill, locale);
  if (fromMeta) return fromMeta;
  if (skill.description && !/^Poder /.test(skill.description) && skill.description.length > 12) {
    return skill.description;
  }
  return locale === 'pt'
    ? 'Passiva única. Efeito permanente enquanto estiver equipada.'
    : 'Unique passive. Permanent effect while equipped.';
};

export const describeItem = (item, locale = 'en') => {
  if (locale === 'pt') return item.description || 'Item.';
  return ITEM_EN[item.key] ?? item.description ?? 'Item.';
};
