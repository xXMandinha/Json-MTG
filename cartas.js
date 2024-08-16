const cartas = [
  {
      "nome": "Swap",
      "cor": "Preto",
      "tipo": "Terreno Básico",
      "quantidade": "8",
      "custoDeMana": null, 
      "Poder/Resistência:": null, 
      "habilidades": [
          "Adiciona mana preta",
      ],
      "imagem": "swap.jpg"
  },
  {
      "nome": "florest",
      "cor": "Verde",
      "tipo": "Terreno Básico",
      "quantidade": "8",
      "custoDeMana": null, 
      "Poder/Resistência:": null, 
      "habilidades": [
          "Adiciona mana verde",
      ],
      "imagem": "florest.jpg"
  },
  {
      "nome": "Bushwhack",
      "cor": "Verde",
      "tipo": "Feitiço",
      "custoDeMana": "{G}", 
      "Poder/Resistência:": null, 
      "habilidades": [
          "Procura no teu grimório por um terreno básico, revela-o, coloca-o na tua mão e depois baralha o teu grimório",
          "A criatura alvo que controlas luta contra a criatura alvo que não controlas",
      ],
      "imagem": "bushwhack.jpg"
  },
  {
      "nome": "Shoot Down",
      "cor": "Verde",
      "tipo": "Feitiço",
      "custoDeMana": "3{G}", 
      "Poder/Resistência:": null, 
      "habilidades": [
          "Exila uma criatura alvo com voar, ou um artefato, ou um encantamento.",
      ],
      "imagem": "shoot_down.jpg"
  },
  {
      "nome": "Awaken the Woods",
      "cor": "Verde",
      "tipo": "Feitiço",
      "custoDeMana": "X{G}{G}", 
      "Poder/Resistência:": null, 
      "habilidades": [
          "Cria X fichas de criatura 1/1 verde Dryad, que também são terrenos.",
      ],
      "imagem": "awaken_the_woods.jpg"
  },
  {
      "nome": "Gruesome Realization",
      "cor": "Preto",
      "tipo": "Feitiço",
      "custoDeMana": "1{B}{B}", 
      "Poder/Resistência:": null, 
      "habilidades": [
          "Todas as criaturas que o teu oponente controla recebem -1/-1 até ao final do turno.",
          "Compra duas cartas e perdes 2 pontos de vida.",
      ],
      "imagem": "gruesome_realization.jpg"
  },
  {
      "nome": "Overwhelming Remorse",
      "cor": "Preto",
      "tipo": "Instantâneo",
      "custoDeMana": "4{B}",
      "Poder/Resistência:": null, 
      "habilidades": [
          "Este feitiço custa 1 a menos para ser jogado para cada criatura no teu cemitério. Exila a criatura ou planeswalker alvo.",
      ],
      "imagem": "overwhelming_remorse.jpg"
  },
  {
      "nome": "Gaea`s Gift",
      "cor": "Verde",
      "tipo": "Instantâneo",
      "custoDeMana": "1{G}",
      "Poder/Resistência:": null, 
      "habilidades": [
          "Coloca um marcador +1/+1 na criatura alvo. Essa criatura ganha vigilância, alcance, indestrutível e atrelamento até ao final do turno",
      ],
      "imagem": "gaeas_gift.jpg"
  },
  {
      "nome": "Giant Growth",
      "cor": "Verde",
      "tipo": "Instantâneo",
      "custoDeMana": "{G}",
      "Poder/Resistência:": null, 
      "habilidades": [
          "A criatura alvo recebe +3/+3 até ao final do turno.",
      ],
      "imagem": "giant_growth.jpg"
  },
  {
      "nome": "Dredging Claw",
      "cor": "Preto",
      "tipo": "Artefato — Equipamento",
      "custoDeMana": "2",
      "Poder/Resistência:": null, 
      "habilidades": [
          "A criatura equipada recebe +1/+0 e tem atrelamento.",
      ],
      "imagem": "dredging_claw.jpg"
  },
  {
      "nome": "Transmogrant Altar",
      "cor": "Preto",
      "tipo": "Artefato",
      "custoDeMana": "2",
      "Poder/Resistência:": null, 
      "habilidades": [
          "Sacrifica uma criatura",
          "Sacrifica uma criatura: Cria uma ficha de criatura artefato 3/3 zumbi."
      ],
      "imagem": "transmogrant_altar.jpg"
  },
  {
      "nome": "Painful Quandary",
      "cor": "Preto",
      "tipo": "Encantamento",
      "custoDeMana": "3{B}{B}",
      "Poder/Resistência:": null, 
      "habilidades": [
          "Sempre que um oponente conjurar um feitiço, esse jogador perde 5 pontos de vida, a menos que descarte uma carta."
      ],
      "imagem": "painful_quandary.jpg"
  },
  {
      "nome": "Ashnod`s Harvester",
      "cor": "Preto",
      "tipo": "Artefato — Criatura Artefato",
      "custoDeMana": "2",
      "Poder/Resistência:": "3/1",
      "habilidades": [
          "Sempre que Ashnod`s Harvester ataca, exila até uma carta alvo de um cemitério.",
      ],
      "imagem": "ashnods_harvester.jpg"
  },
  {
      "nome": "Cradle Clearcutter",
      "cor": "Preto",
      "tipo": "Artefato — Criatura Artefato",
      "custoDeMana": "6",
      "Poder/Resistência:": "3/6",
      "habilidades": [
          "Alcance. Sempre que uma ou mais criaturas que controlas morrem, cada oponente sacrifica uma criatura.",
      ],
      "imagem": "cradle_clearcutter.jpg"
  },
  {
      "nome": "Terror Ballista",
      "cor": "Preto",
      "tipo": "Artefato — Criatura Artefato",
      "custoDeMana": "7",
      "Poder/Resistência:": "5/3",
      "habilidades": [
          "Quando Ravenous Gigamole entra em jogo, explora. (Revela a primeira carta do teu grimório, coloca-a na tua mão se for uma carta de terreno. Se não, coloca-a no teu cemitério e esta criatura ganha um marcador +1/+1).",
      ],
      "imagem": "terror_ballista.jpg"
  },
  {
      "nome": "Scrapwork Rager",
      "cor": "Preto",
      "tipo": "Artefato — Criatura Artefato",
      "custoDeMana": "4",
      "Poder/Resistência:": "2/2",
      "habilidades": [
          "Quando Scrapwork Rager entra em jogo, compras uma carta e perdes 1 ponto de vida.",
      ],
      "imagem": "scrapwork_rager.jpg"
  },
  {
      "nome": "Iron-Craw Crusher",
      "cor": "Preto",
      "tipo": "Artefato — Criatura Artefato",
      "custoDeMana": "7",
      "Poder/Resistência:": "6/6",
      "habilidades": [
          "Sempre que Iron-Craw Crusher ataca, as criaturas que controlas recebem +2/+0 até ao final do turno.",
      ],
      "imagem": "iron_craw_crusher.jpg"
  },
  {
      "nome": "Woodcaller Automaton",
      "cor": "Preto",
      "tipo": "Artefato — Criatura Artefato",
      "custoDeMana": "10",
      "Poder/Resistência:": "8/8",
      "habilidades": [
          "Quando Woodcaller Automaton entra em jogo, se for utilizado mana verde, endireita a Floresta alvo que controlas; ela transforma-se numa criatura 8/8 com vigilância e indestrutível.",
      ],
      "imagem": "woodcaller_automaton.jpg"
  },
  {
      "nome": "Rust Goliath",
      "cor": "Preto",
      "tipo": "Artefato — Criatura Artefato",
      "custoDeMana": "10",
      "Poder/Resistência:": "10/10", 
      "habilidades": [
          "Alcance, atropela e transfigurara",
      ],
      "imagem": "rust_goliath.jpg"
  },
  {
      "nome": "Thraxodemon",
      "cor": "Preto",
      "tipo": "Criatura — Demonio",
      "custoDeMana": "2{B}",
      "Poder/Resistência:": "2/2",
      "habilidades": [
          "Sacrifica outro artefato ou criatura: Compra uma carta.",
      ],
      "imagem": "thraxodemon.jpg"
  },
  {
      "nome": "Sarinth Steelseeker",
      "cor": "Verde",
      "tipo": "Criatura — Humano Artífice",
      "custoDeMana": "1{G}",
      "Poder/Resistência:": "1/2",
      "habilidades": [
          "Sacrifica outro artefato ou criatura: Compra uma carta.",
      ],
      "imagem": "sarinth_steelseeker.jpg"
  },
  {
      "nome": "Argothian Opportunist",
      "cor": "Verde",
      "tipo": "Artefato — Humano Artífice ",
      "custoDeMana": "2{G}",
      "Poder/Resistência:": "3/2",
      "habilidades": [
          "Quando Argothian Opportunist entra em jogo, cria uma ficha de criatura artefato 1/1 incolor, que também é um Tesouro com a habilidade: Sacrifica este artefato, adiciona uma mana de qualquer cor",
      ],
      "imagem": "argothian_opportunist.jpg"
  },
  {
      "nome": "Gnawing Vermin",
      "cor": "Preto",
      "tipo": "Criatura — Rato",
      "custoDeMana": "{B}",
      "Poder/Resistência:": "1/1",
      "habilidades": [
          "Quando Gnawing Vermin entra em jogo, o jogador alvo coloca as primeiras duas cartas do seu grimório no cemitério. Quando Gnawing Vermin morre, a criatura alvo que oponente controla recebe -1/-1 até ao final do turno.",
      ],
      "imagem": "gnawing_vermin.jpg"
  },
  {
      "nome": "Gixian Skullflayer",
      "cor": "Preto",
      "tipo": "Criatura — Humano Assassino",
      "custoDeMana": "2{B}",
      "Poder/Resistência:": "2/3",
      "habilidades": [
          "No início do teu fim de turno, se houver três ou mais cartas de criatura no teu cemitério, Gixian Skullflayer recebe +1/+1.",
      ],
      "imagem": "gixian_skullflayer.jpg"
  },
  {
      "nome": "Ravenous Gigamole",
      "cor": "Preto",
      "tipo": "Criatura — Touro",
      "custoDeMana": "3{B}",
      "Poder/Resistência:": "2/3",
      "habilidades": [
          "Quando Ravenous Gigamole entra em jogo, explora. (Revela a primeira carta do teu grimório, coloca-a na tua mão se for uma carta de terreno. Se não, coloca-a no teu cemitério e esta criatura ganha um marcador +1/+1).",
      ],
      "imagem": "ravenous_gigamole.jpg"
  },
  {
      "nome": "Blackwood Prowler",
      "cor": "verde",
      "tipo": "Criatura — Elemental",
      "custoDeMana": "1{G}",
      "Poder/Resistência:": "1/1", 
      "habilidades": [
          "Explorar",
      ],
      "imagem": "blackwood_prowler.jpg"
  },
];

function exibirdados() {
  console.clear();
  console.log("// Mostra todas as cartas em JSON");
  console.log(cartas);

  cartas.forEach(carta => {
      console.log(`Nome: ${carta.nome}`);
      console.log(`Cor: ${carta.cor}`);
      console.log(`Tipo: ${carta.tipo}`);
      console.log(`Quantidade: ${carta.quantidade}`);
      console.log(`Custo de Mana: ${carta.custoDeMana}`);
      console.log(`Poder/Resistência: ${carta['Poder/Resistência:']}`);
      console.log(`Habilidades: ${carta.habilidades.join(', ')}`);
      console.log(`Imagem: ${carta.imagem}`);
      console.log('---');
  });
}

exibirdados();
