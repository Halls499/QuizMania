const perguntas = [
  {
  // pergunta 1(td junto)
  pergunta: "Qual jogo de mundo aberto da Rockstar, lançado em 2013, se passa na cidade fictícia de Los Santos?",
  opcoes: [
    "Red Dead Redemption",
    "GTA V",
    "Watch Dogs",
    "Saints Row"
  ],
  correta: 1
},
{
  // pergunta 2(td junto)
  pergunta: "Qual console foi o primeiro da Nintendo a introduzir controles sensíveis ao movimento, lançado em 2006?",
  opcoes: [
    "GameCube",
    "Wii",
    "Switch",
    "NES"
  ],
  correta: 1
},
{
  // pergunta 3(td junto)
  pergunta: "Qual YouTuber brasileiro é famoso por vídeos de Minecraft e ficou conhecido como “Minecraft Mania”?",
  opcoes: [
    "Felipe Neto",
    "T3ddy",
    "AuthenticGames",
    "Alanzoka"
  ],
  correta: 2
},
{
  // pergunta 4(td junto)
  pergunta: "Qual foi o primeiro console de videogame doméstico a se tornar um sucesso mundial, lançado em 1977?",
  opcoes: [
    "Atari 2600",
    "NES",
    "Sega Master System",
    "Intellivision"
  ],
  correta: 0
},
{
  // pergunta 5(td junto)
  pergunta: "Qual foi o primeiro jogo a apresentar o personagem Mario, criado por Shigeru Miyamoto em 1981?",
  opcoes: [
    "Super Mario Bros",
    "Donkey Kong",
    "Mario Kart",
    "Mario Bros"
  ],
  correta: 1
},
{
  // pergunta 6(td junto)
  pergunta: "Quem é o imperador principal do Outworld, inimigo recorrente da Terra no universo Mortal Kombat?",
  opcoes: [
    "Shinnok",
    "Quan Chi",
    "Ermac",
    "Shao Khan"
  ],
  correta: 1
},
{
  // pergunta 7(td junto)
  pergunta: "Qual série da SEGA apresenta corridas com personagens icônicos como Sonic e Tails em pistas cheias de power-ups?",
  opcoes: [
    "Mario Kart",
    "Crash Team Racing",
    "Sonic & All-Stars Racing",
    "Need for Speed"
  ],
  correta: 2
},
{
  // pergunta 8(td junto)
  pergunta: "Qual jogo de celular popular envolve combinar doces de cores iguais em níveis progressivos?",
  opcoes: [
    "Toon Blast",
    "Gardenscapes",
    "Homescapes",
    "Candy Crush"
  ],
  correta: 3
},
{
  // pergunta 9(td junto)
  pergunta: "Qual jogo de corrida mobile apresenta carros tunados e corridas rápidas com upgrade de veículos?",
  opcoes: [
    "Real Racing 3",
    "Asphalt 9",
    "Hill Climb Racing",
    "Mario Kart Tour"
  ],
  correta: 1
},
{
  // pergunta 10(td junto)
  pergunta: "Qual tipo de alimento aumenta a barra de energia do Pou?",
  opcoes: [
    "Biscoitos",
    "Frutas",
    "Legumes",
    "Doces"
  ],
  correta: 1
},
{
  // pergunta 11(td junto)
  pergunta: "Qual foi o primeiro console da Microsoft a ser lançado com sucesso mundial, em 2001?",
  opcoes: [
    "Xbox Series X",
    "Xbox",
    "Xbox 360",
    "Xbox One"
  ],
  correta: 1
},
{
  // pergunta 12(td junto)
  pergunta: "Qual plataforma digital para PC é famosa por vender, distribuir e gerenciar jogos como Dota 2, Counter-Strike e Half-Life?",
  opcoes: [
    "Epic Games Store",
    "Steam",
    "Origin",
    "GOG"
  ],
  correta: 2
},
{
  // pergunta 13(td junto)
  pergunta: "Nos jogos de RPG, qual elemento é essencial para diferenciar esse gênero de outros tipos de videogame?",
  opcoes: [
    "A presença obrigatória de combates em tempo real",
    "A ausência de objetivos definidos",
    "A progressão do personagem por meio de escolhas narrativas e desenvolvimento de atributos",
    "O uso exclusivo de mundos abertos"
  ],
  correta: 2
},
{
  // pergunta 14(td junto)
  pergunta: "Na franquia Resident Evil, qual característica define o conceito clássico de survival horror?",
  opcoes: [
    "Exploração livre sem ameaça constante",
    "Narrativa secundária sem impacto na jogabilidade",
    "Ênfase em ação contínua e grande quantidade de munição",
    "Gestão limitada de recursos aliada à tensão psicológica"
  ],
  correta: 3
},
{
  // pergunta 15(td junto)
    pergunta: "Quantas cartas evoluídas existem no  Clash Royale?",
  opcoes: [
    "33 cartas",
    "32 cartas",
    "28 cartas",
    "27 cartas"
  ],
  correta: 0
}
];

//Variaveis a serem usadas
let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;
let tempo = 45;
let intervaloTempo = null;

function mostrarPergunta() {
  const perguntaBox = document.querySelector(".pergunta");
  const perguntaEl = document.getElementById("pergunta");
  const botoes = document.querySelectorAll(".btn_resposta");
  const botao = document.querySelector(".prox");
  const progress = document.getElementById("progresso");
  document.querySelector(".cbc").style.display = "block";

  // Liberar o clique nas respostas
  respondeu = false;

  // Garante que respostas apareçam somente após começar
  document.querySelector(".pai").style.display = "grid";

  botao.style.display = "block";
  botao.disabled = true;

  // Animação nas perguntas
  perguntaBox.classList.add("saindo");

  setTimeout(() => {
    perguntaEl.textContent = perguntas[perguntaAtual].pergunta;

    botoes.forEach((btn, index) => {
      btn.textContent = perguntas[perguntaAtual].opcoes[index];

      // Não permite clique duplo
      btn.onclick = () => {
        if (!respondeu) {
          Verificar(index);
        }
      };

      // Garante que o botão volte clicável
      btn.disabled = false;
      btn.style.backgroundColor = "";
      btn.style.color = "";
      btn.classList.remove("escolhida");
    });

    progress.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    perguntaBox.classList.remove("saindo");
    perguntaBox.classList.add("entrando");

    setTimeout(() => {
      perguntaBox.classList.remove("entrando");
    }, 300);

  }, 300);

  // Animação dos botões
  botoes.forEach(btn => btn.classList.add("saindo"));

  setTimeout(() => {
    botoes.forEach(btn => {
      btn.classList.remove("saindo");
      btn.classList.add("entrando");
    });
  }, 300);

  setTimeout(() => {
    botoes.forEach(btn => btn.classList.remove("entrando"));
  }, 600);

  botoes.forEach(botao => botao.disabled = false);

  iniciarTimer(); 
}

function Verificar(indiceResposta) {
  if (respondeu) return;
  respondeu = true;

  const botoes = document.querySelectorAll(".btn_resposta");
  const correta = perguntas[perguntaAtual].correta;

  //Parar o timer qnd o jogador responder
   clearInterval(intervaloTempo);

  // Resposta do jogador
  botoes[indiceResposta].classList.add("escolhida");

  // 1️⃣ Atualiza pontuação somente se o usuário clicou na correta
  if (indiceResposta === correta) {
    pontuacao++;
  }

  // 2️⃣ Percorre todos os botões para pintar verde/vermelho
  botoes.forEach((btn, index) => {
    if (index === correta) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
    } else {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
    }

    //Desabilita botão
    btn.disabled = true;
  });

  //Mostrar botão  
  const botao = document.querySelector(".prox");
  botao.style.display = "block";

  //Habilita botão
  botao.disabled = false;
}

function resetarBotoes() {
  const botoes = document.querySelectorAll(".btn_resposta");

  //Reinicia botão
  botoes.forEach(btn => {
    btn.style.backgroundColor = "";
    btn.style.color = "";
    btn.classList.remove("escolhida");
    btn.disabled = false;
  });
}

function Avancar() {
  perguntaAtual = perguntaAtual + 1;

  atualizarBarra();

  //Verifica pergunta e mostra a proxima ou mostra pontuação
  if (perguntaAtual < perguntas.length) {
    resetarBotoes();
    mostrarPergunta();
  } else {
    document.querySelector(".pergunta").style.display = "none";
    document.querySelector(".pai").style.display = "none";
    document.querySelector(".prox").style.display = "none";
    document.querySelector(".fim").style.display = "flex";
    document.querySelector(".cbc").style.display ="none";

    const pont = document.getElementById("pontuacao");
    pont.style.display = "block";
    pont.textContent = `Voce acertou ${pontuacao} de ${perguntas.length} perguntas!!!`;

    //Soltar confete se acertar mais de 7
    if (pontuacao >= 7) {
      soltarConfete();
    }
  }
}

// Inicia o quiz
document.addEventListener("DOMContentLoaded", () => {
  const botaoComecar = document.getElementById("comecar");

  botaoComecar.onclick = function () {
    document.querySelector(".pai").style.display = "grid";
    document.querySelector(".pergunta").style.display = "block";

    mostrarPergunta();

    botaoComecar.style.display = "none";
  };
});



//Animar tela de pontuação
function soltarConfete() {
  for (let i = 0; i < 80; i++) {
    const confete = document.createElement("div");
    confete.classList.add("confete");

    confete.style.left = Math.random() * 100 + "vw";
    confete.style.backgroundColor =
      ["#FFD700", "#FF5733", "#33FF57", "#3399FF", "#FF33A8"]
      [Math.floor(Math.random() * 5)];

    confete.style.animationDuration =
      Math.random() * 2 + 2 + "s";

    document.body.appendChild(confete);

    setTimeout(() => {
      confete.remove();
    }, 3000);
  }
}

document.getElementById("recomecar").onclick = function () {
  document.getElementById("progresso").style.display = "block";
  document.getElementById("timer").style.display = "block";


  // Reset nas variaveis
  perguntaAtual = 0;
  pontuacao = 0;
  respondeu = false;

  // Esconde pontuação
  document.querySelector(".fim").style.display = "none";

  // Mostrar quiz
  document.querySelector(".pergunta").style.display = "block";
  document.querySelector(".pai").style.display = "grid";

  // Reinicia visualmente
  resetarBotoes();

  // Reinicia a barra de progresso
    const barra = document.querySelector(".barra");
    barra.style.width = "0%";

  // Reinicio
  mostrarPergunta();
};

function bloquearRespostas() {
  const botoes = document.querySelectorAll(".btn_resposta"); // precisa declarar aqui também
  botoes.forEach(botao => botao.disabled = true);
}

function iniciarTimer() {
  clearInterval(intervaloTempo);
  tempo = 45;

  const timerEl = document.getElementById("timer");
  timerEl.textContent = `⏱️ ${tempo}s`;

  intervaloTempo = setInterval(() => {
    tempo--;
    timerEl.textContent = `⏱️ ${tempo}s`;

    if (tempo <= 0) {
      clearInterval(intervaloTempo);
      bloquearRespostas();
      Avancar(); // aqui era irParaProximaPergunta(), mas você já tem Avancar()
    }
  }, 1000);
}

// Atualiza barra de progresso do quiz
function atualizarBarra() {
    const barra = document.querySelector(".barra");
    const total = perguntas.length;
    const perc = ((perguntaAtual) / total) * 100; // % completado
    barra.style.width = perc + "%";
}