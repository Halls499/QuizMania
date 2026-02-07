const perguntas = [
  {
  // pergunta 1(td junto)(futebol)
  pergunta: "Em que ano foi criado o futebol moderno?",
  opcoes: [
    "1850",
    "1863",
    "1870",
    "1885"
  ],
  correta: 1
},
{
  // pergunta 2(td junto)(futebol)
  pergunta: "Quantos árbitros atuam em campo durante uma partida de futebol?",
  opcoes: [
    "2",
    "3",
    "4",
    "5"
  ],
  correta: 2
},
{
  // pergunta 3(td junto)(futebol)
  pergunta: "Qual foi o país anfitrião da primeira Copa do Mundo de Futebol, em 1930?",
  opcoes: [
    "Brasil",
    "Uruguai",
    "Itália",
    "Argentina"
  ],
  correta: 1
},
{
  // pergunta 4(td junto)(volei)
  pergunta: "O líbero pode realizar ataques durante uma partida de vôlei?",
  opcoes: [
    "Sim, de qualquer posição",
    "Sim, apenas do fundo da quadra",
    "Sim, apenas do chão",
    "Não, nunca pode atacar"
  ],
  correta: 2
},
{
  // pergunta 5(td junto)(volei)
  pergunta: "Qual é a altura oficial da rede em partidas de vôlei para categorias masculinas e femininas?",
  opcoes: [
    "Masculino: 2,43 m / Feminino: 2,24 m",
    "Masculino: 2,50 m / Feminino: 2,30 m",
    "Masculino: 2,40 m / Feminino: 2,20 m",
    "Masculino: 2,45 m / Feminino: 2,25 m"
  ],
  correta: 0
},
{
  // pergunta 6(td junto)(volei)
  pergunta: "Qual país é conhecido como uma das maiores potências do vôlei mundial?",
  opcoes: [
    "Canadá",
    "Brasil",
    "Portugal",
    "México"
  ],
  correta: 1
},
{
  // pergunta 7(td junto)(basquete)
  pergunta: "Qual é a altura oficial da cesta em partidas de basquete?",
  opcoes: [
    "2,80",
    "3,00",
    "3,08",
    "3,05"
  ],
  correta: 3
},
{
  // pergunta 8(td junto)(basquete)
  pergunta: "Qual jogador detém o recorde de maior número de pontos marcados em uma única partida da NBA?",
  opcoes: [
    "Michael Jordan",
    "Wilt Chamberlain",
    "Kobe Bryant",
    "LeBron James"
  ],
  correta: 1
},
{
  // pergunta 9(td junto)(basquete)
  pergunta: "Em uma partida oficial de basquete, qual é o tempo de posse máxima permitido para cada equipe antes de arremessar a bola ao cesto?",
  opcoes: [
    "18 segundos",
    "24 segundos",
    "30 segundos",
    "20 segundos"
  ],
  correta: 1
},
{
  // pergunta 10(td junto)(tenis)
  pergunta: "Qual é a altura da rede oficial no tênis, medida no centro da quadra?",
  opcoes: [
    "0,85m",
    "0,91m",
    "1,00m",
    "1,05m"
  ],
  correta: 1
},
{
  // pergunta 11(td junto)(tenis)
  pergunta: "Qual é o tamanho oficial de uma quadra de tênis para partidas de simples?",
  opcoes: [
    "23,77 mX8,23 m",
    "22,00 mX9,00 m",
    "24,00 mX10,00 m",
    "23,77 mX10,97 m"
  ],
  correta: 0
},
{
  // pergunta 12(td junto)(tenis)
  pergunta: "Quantos sets são disputados em uma partida oficial de tênis?",
  opcoes: [
    "1 set",
    "3 sets",
    "5 sets",
    "7 sets"
  ],
  correta: 2
},
{
  // pergunta 13(td junto)(boxe)
  pergunta: "Quantos rounds oficiais existem em uma luta de boxe profissional pelo título mundial, tanto masculino quanto feminino?",
  opcoes: [
    "10 rounds",
    "15 rounds",
    "12 rounds",
    "8 rounds"
  ],
  correta: 2
},
{
  // pergunta 14(td junto)(boxe)
  pergunta: "O que significa um nocaute técnico (TKO) em uma luta de boxe?",
  opcoes: [
    "Quando o árbitro interrompe a luta por superioridade de um lutador",
    "Quando um lutador cai no ringue, mas se levanta antes de 10 segundos",
    "Quando um lutador vence por pontos",
    "Quando ambos os lutadores estão empatados"
  ],
  correta: 0
},
{
  // pergunta 15(td junto)(boxe)
  pergunta: "Qual é a duração oficial de cada round em lutas profissionais de boxe, tanto masculinas quanto femininas?",
  opcoes: [
    "2 minutos",
    "3 minutos",
    "4 minutos",
    "5 minutos"
  ],
  correta: 3
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

    // Mostrar botão FINAL apenas no fim
    const botaoFinal = document.getElementById("botaoFinal");
    botaoFinal.style.display = "block";

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

// Voltar pro menu no final
function voltarMenu(){
  window.location.href = "index.html"; // redireciona para a página index.html
}

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