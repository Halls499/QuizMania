const perguntas = [
  {
  // pergunta 1(td junto)
  pergunta: "Quem foram as primeiras programadoras do ENIAC, o primeiro computador eletrônico programável?",
  opcoes: [
    "Ada Lovelace, Grace Hopper, Hedy Lamarr, Katherine Johnson, Radia Perlman, Margaret Hamilton",
    "Mary Shelley, Rosalind Franklin, Lise Meitner, Dorothy Hodgkin, Chien-Shiung Wu, Emmy Noether",
    "Joan Clarke, Barbara Liskov, Shafi Goldwasser, Annie Easley, Elizabeth Feinler, Karen Spärck Jones",
    "Jean Bartik, Frances Holberton, Marlyn Wescoff, Ruth Lichterman, Kathleen McNulty e Frances Bilas Spence"
  ],
  correta: 3
},
{
  // pergunta 2(td junto)
  pergunta: "Qual empresa lançou o primeiro smartphone com tela sensível ao toque moderna em 2007?",
  opcoes: [
    "Samsung",
    "Apple",
    "Nokia",
    "BlackBerry"
  ],
  correta: 1
},
{
  // pergunta 3(td junto)
  pergunta: "O que significa a sigla “HTML”, utilizada na criação de páginas da web?",
  opcoes: [
    "HyperText Markup Language",
    "Hyper Transfer Machine Language",
    "High-Tech Markup Link",
    "HyperText Machine Link"
  ],
  correta: 0
},
{
  // pergunta 4(td junto)
  pergunta: "Qual tecnologia permite que computadores diferentes se comuniquem entre si através de protocolos padronizados na internet?",
  opcoes: [
    "Wi-Fi",
    "Blockchain",
    "TCP/IP",
    "Bluetooth"
  ],
  correta: 2
},
{
  // pergunta 5(td junto)
  pergunta: "Qual foi a primeira rede social a atingir 1 bilhão de usuários ativos em todo o mundo?",
  opcoes: [
    "Twitter",
    "Instagram",
    "Facebook",
    "TikTok"
  ],
  correta: 2
},
{
  // pergunta 6(td junto)
  pergunta: "Qual empresa desenvolveu o sistema operacional Windows, lançado pela primeira vez em 1985?",
  opcoes: [
    "Apple",
    "Microsoft",
    "IBM",
    "Google"
  ],
  correta: 1
},
{
  // pergunta 7(td junto)
  pergunta: "Qual empresa criou o assistente virtual chamado “Alexa”, que funciona por comando de voz?",
  opcoes: [
    "Google",
    "Microsoft",
    "Amazon",
    "Apple"
  ],
  correta: 2
},
{
  // pergunta 8(td junto)
  pergunta: "Qual é a principal característica do TikTok que o tornou popular globalmente?",
  opcoes: [
    "Transmissões ao vivo exclusivas",
    "Gravação de vlogs",
    "Enquetes interativas",
    "Vídeos curtos e virais"
  ],
  correta: 3
},
{
  // pergunta 9(td junto)
  pergunta: "Qual empresa criou o motor de busca mais usado no mundo, lançado em 1998?",
  opcoes: [
    "Microsoft",
    "Apple",
    "Yahoo",
    "Google"
  ],
  correta: 0
},
{
  // pergunta 10(td junto)
  pergunta: "Qual componente do computador é considerado o “cérebro” da máquina, responsável por processar instruções?",
  opcoes: [
    "HD",
    "Placa mãe",
    "CPU",
    "Memória RAM"
  ],
  correta: 1
},
{
  // pergunta 11(td junto)
  pergunta: "Qual invenção revolucionou a televisão permitindo imagens em cores em escala massiva nos anos 1950?",
  opcoes: [
    "CRT preto e branco",
    "Transmissão via cabo",
    "Televisão em cores",
    "Televisão digital"
  ],
  correta: 2
},
{
  // pergunta 12(td junto)
  pergunta: "Qual é o principal objetivo da realidade virtual (VR) em jogos e simulações?",
  opcoes: [
    "Exibir imagens em 3D sem interação",
    "Criar uma experiência imersiva em um ambiente digital",
    "Melhorar a qualidade de som do ambiente",
    "Substituir completamente computadores e celulares"
  ],
  correta: 1
},
{
  // pergunta 13(td junto)
  pergunta: "Qual é o ano de lançamento do YouTube?",
  opcoes: [
    "2003",
    "2005",
    "2007",
    "2009"
  ],
  correta: 1
},
{
  // pergunta 14(td junto)
  pergunta: "Qual é o vídeo mais longo já postado no YouTube, conhecido por durar milhares de horas?",
  opcoes: [
    "“Longest Video on YouTube” – 1.000 horas",
    "“Longest Video on YouTube” – 10.000 horas",
    "“Ultimate Video” – 500 horas",
    "“Endless Stream” – 2.000 horas"
  ],
  correta: 1
},
{
  // pergunta 15(td junto)
  pergunta: "Qual tecnologia é usada para criar sistemas que conseguem aprender e tomar decisões baseadas em dados?",
  opcoes: [
    "Blockchain",
    "Inteligência Artificial",
    "Realidade Aumentada",
    "Computação em nuvem"
  ],
  correta: 1
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