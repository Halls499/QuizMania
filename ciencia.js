const perguntas = [
  {
  // pergunta 1(td junto)
  pergunta: "Qual gás é mais abundante na atmosfera terrestre?",
  opcoes: [
    "Oxigênio",
    "Gás carbônico",
    "Nitrogênio",
    "Hidrogênio"
  ],
  correta: 2
},
{
  // pergunta 2(td junto)
  pergunta: "Qual é o osso mais longo do corpo humano?",
  opcoes: [
    "Úmero",
    "Tíbia",
    "Fêmur",
    "Rádio"
  ],
  correta: 2
},
{
  // pergunta 3(td junto)
  pergunta: "Qual princípio físico explica a razão de os planetas manterem suas órbitas ao redor do Sol?",
  opcoes: [
    "A força eletromagnética",
    "A inércia combinada à força gravitacional",
    "A pressão atmosférica do espaço",
    "O campo magnético solar"
  ],
  correta: 1
},
{
  // pergunta 4(td junto)
  pergunta: "Qual partícula subatômica é responsável pela maior parte da massa do átomo?",
  opcoes: [
    "Elétron",
    "Próton",
    "Nêutron",
    "Quark"
  ],
  correta: 2
},
{
  // pergunta 5(td junto)
  pergunta: "Qual lei da termodinâmica afirma que a entropia de um sistema isolado tende a aumentar?",
  opcoes: [
    "Lei Zero",
    "Primeira Lei",
    "Segunda Lei",
    "Terceira Lei"
  ],
  correta: 2
},
{
  // pergunta 6(td junto)
  pergunta: "Qual cientista propôs o modelo atômico conhecido como 'pudim de passas'?",
  opcoes: [
    "Ernest Rutherford",
    "Niels Bohr",
    "John Dalton",
    "J. J. Thomson"
  ],
  correta: 3
},
{
  // pergunta 7(td junto)
  pergunta: "Qual fenômeno explica o desvio da luz das estrelas ao passar próximo a corpos muito massivos?",
  opcoes: [
    "Efeito Doppler",
    "Lente gravitacional",
    "Refração atmosférica",
    "Radiação Hawking"
  ],
  correta: 1
},
{
  // pergunta 8(td junto)
  pergunta: "Qual organela celular é responsável pela respiração celular?",
  opcoes: [
    "Ribossomo",
    "Lisossomo",
    "Mitocôndria",
    "Complexo de Golgi"
  ],
  correta: 2
},
{
  // pergunta 9(td junto)
  pergunta: "Qual é a unidade do Sistema Internacional usada para medir carga elétrica?",
  opcoes: [
    "Volt",
    "Ohm",
    "Watt",
    "Coulomb"
  ],
  correta: 3
},
{
  // pergunta 10(td junto)
  pergunta: "O que acontece com o tempo segundo a Teoria da Relatividade quando um corpo se aproxima da velocidade da luz?",
  opcoes: [
    "O tempo acelera",
    "O tempo se mantém constante",
    "O tempo desacelera",
    "O tempo deixa de existir"
  ],
  correta: 2
},
{
  // pergunta 11(td junto)
  pergunta: "Qual camada da Terra é responsável pelo campo magnético do planeta?",
  opcoes: [
    "Crosta terrestre",
    "Manto superior",
    "Núcleo externo",
    "Núcleo interno"
  ],
  correta: 2
},
{
  // pergunta 12(td junto)
  pergunta: "Qual tipo de radiação possui maior poder de penetração?",
  opcoes: [
    "Radiação alfa",
    "Radiação beta",
    "Radiação gama",
    "Radiação infravermelha"
  ],
  correta: 2
},
{
  // pergunta 13(td junto)
  pergunta: "Qual elemento químico possui o maior número atômico encontrado naturalmente na Terra?",
  opcoes: [
    "Tório",
    "Rádio",
    "Urânio",
    "Plutônio"
  ],
  correta: 2
},
{
  // pergunta 14(td junto)
  pergunta: "Qual é a principal função dos ribossomos nas células?",
  opcoes: [
    "Produção de energia",
    "Síntese de proteínas",
    "Digestão celular",
    "Armazenamento genético"
  ],
  correta: 1
},
{
  // pergunta 15(td junto)
  pergunta: "Qual constante física limita a velocidade máxima do universo?",
  opcoes: [
    "Constante gravitacional",
    "Constante de Planck",
    "Velocidade da luz no vácuo",
    "Constante de Boltzmann"
  ],
  correta: 2
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