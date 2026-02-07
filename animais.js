const perguntas = [
{
  // pergunta 1(td junto)
  pergunta: "Qual animal possui o maior cérebro em relação ao tamanho do corpo?",
  opcoes: [
    "Elefante",
    "Golfinho",
    "Polvo",
    "Humano"
  ],
  correta: 2
},
{
  // pergunta 2(td junto)
  pergunta: "Qual mamífero australiano é conhecido por ter bico semelhante ao de um pato e por botar ovos?",
  opcoes: [
    "Ornitorrinco",
    "Diabo-da-Tasmânia",
    "Canguru",
    "Koala"
  ],
  correta: 0
},
{
  // pergunta 3(td junto)
  pergunta: "Qual animal é capaz de regenerar partes do próprio corpo, como braços ou cauda?",
  opcoes: [
    "Tubarão",
    "Lagartixa",
    "Águia",
    "Golfinho"
  ],
  correta: 1
},
{
  // pergunta 4(td junto)
  pergunta: "Qual é o animal terrestre mais rápido do mundo?",
  opcoes: [
    "Leão",
    "Antílope",
    "Guepardo",
    "Cavalo"
  ],
  correta: 2
},
{
  // pergunta 5(td junto)
  pergunta: "Qual grupo de animais é conhecido como os únicos mamíferos capazes de voar?",
  opcoes: [
    "Aves",
    "Morcegos",
    "Esquilos-voadores",
    "Insetos"
  ],
  correta: 1
},
{
  // pergunta 6(td junto)
  pergunta: "Qual animal é conhecido por ter a mordida mais forte do reino animal?",
  opcoes: [
    "Leão",
    "Tubarão-branco",
    "Crocodilo",
    "Hiena"
  ],
  correta: 2
},
{
  // pergunta 7(td junto)
  pergunta: "Qual animal consegue sobreviver por mais tempo sem água?",
  opcoes: [
    "Camelo",
    "Canguru-rato",
    "Escorpião",
    "Tartaruga"
  ],
  correta: 1
},
{
  // pergunta 8(td junto)
  pergunta: "Qual animal possui três corações?",
  opcoes: [
    "Golfinho",
    "Polvo",
    "Tubarão",
    "Baleia"
  ],
  correta: 1
},
{
  // pergunta 9(td junto)
  pergunta: "Qual é o maior animal que já existiu na Terra?",
  opcoes: [
    "Dinossauro Argentinosaurus",
    "Elefante-africano",
    "Baleia-azul",
    "Megalodon"
  ],
  correta: 2
},
{
  // pergunta 10(td junto)
  pergunta: "Qual animal é capaz de mudar de cor para se camuflar no ambiente?",
  opcoes: [
    "Camaleão",
    "Polvo",
    "Lula",
    "Todas as alternativas"
  ],
  correta: 3
},
{
  // pergunta 11(td junto)
  pergunta: "Qual ave é conhecida por conseguir voar para trás?",
  opcoes: [
    "Águia",
    "Beija-flor",
    "Falcão",
    "Coruja"
  ],
  correta: 1
},
{
  // pergunta 12(td junto)
  pergunta: "Qual animal é considerado o mais venenoso do mundo?",
  opcoes: [
    "Cobra-real",
    "Aranha-armadeira",
    "Sapo-dourado",
    "Água-viva-caixa"
  ],
  correta: 3
},
{
  // pergunta 13(td junto)
  pergunta: "Qual mamífero passa a maior parte do tempo dormindo?",
  opcoes: [
    "Leão",
    "Preguiça",
    "Coala",
    "Urso"
  ],
  correta: 2
},
{
  // pergunta 14(td junto)
  pergunta: "Qual animal marinho é conhecido por produzir eletricidade?",
  opcoes: [
    "Raia-elétrica",
    "Enguia-elétrica",
    "Tubarão-martelo",
    "Peixe-palhaço"
  ],
  correta: 1
},
{
  // pergunta 15(td junto)
  pergunta: "Qual animal possui a maior expectativa de vida conhecida?",
  opcoes: [
    "Elefante",
    "Tartaruga-gigante",
    "Baleia-da-Groenlândia",
    "Papagaio"
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