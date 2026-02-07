const perguntas = [
  {
  // pergunta 1(td junto)
  pergunta: "Quem foi o imperador romano que tornou o cristianismo uma religião legalizada no Império Romano?",
  opcoes: [
    "Júlio César",
    "Constantino I",
    "Nero",
    "Marco Aurélio"
  ],
  correta: 1
},
{
  // pergunta 2(td junto)
  pergunta: "Qual civilização da América Central desenvolveu um  calendário próiro?",
  opcoes: [
    "Maias",
    "Astecas",
    "Incas",
    "Olmecas"
  ],
  correta: 0
},
{
  // pergunta 3(td junto)
  pergunta: "Durante qual revolução ocorreu a queda da Bastilha em 1789?",
  opcoes: [
    "Revolução Industrial",
    "Revolução Francesa",
    "Revolução Russa",
    "Revolução Americana"
  ],
  correta: 1
},
{
  // pergunta 4(td junto)
  pergunta: "Qual foi o primeiro país a abolir oficialmente a escravidão no século XIX?",
  opcoes: [
    "Brasil",
    "Estados Unidos",
    "Reino Unido",
    "Haiti"
  ],
  correta: 3
},
{
  // pergunta 5(td junto)
  pergunta: "Em qual ano ocorreu a Revolução Russa que resultou na criação da União Soviética?",
  opcoes: [
    "1905",
    "1917",
    "1922",
    "1939"
  ],
  correta: 1
},
{
  // pergunta 6(td junto)
  pergunta: "Qual civilização da Mesopotâmia é conhecida por criar o primeiro código de leis escrito, o Código de Hamurabi?",
  opcoes: [
    "Sumérios",
    "Babilônios",
    "Assírios",
    "Persas"
  ],
  correta: 1
},
{
  // pergunta 7(td junto)
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
  // pergunta 8(td junto)
  pergunta: "Qual tratado, assinado em 1648, marcou o fim da Guerra dos Trinta Anos e consolidou o conceito de soberania estatal na Europa?",
  opcoes: [
    "Tratado de Versalhes",
    "Paz de Vestfália",
    "Tratado de Tordesilhas",
    "Tratado de Utrecht"
  ],
  correta: 1
},
{
  // pergunta 9(td junto)
  pergunta: "Em que ano o Muro de Berlim caiu?",
  opcoes: [
    "1889",
    "1888",
    "1861",
    "1865"
  ],
  correta: 0
},
{
  // pergunta 10(td junto)
  pergunta: "Durante a Idade Média, qual instituição tinha maior poder político e social na Europa?",
  opcoes: [
    "Monarquia",
    "Igreja Católica",
    "Cidades-estado",
    "Guildas comerciais"
  ],
  correta: 1
},
{
  // pergunta 11(td junto)
  pergunta: "Quem foi o líder militar que conquistou grande parte da Ásia e da Europa no século IV a.C., criando um império que se estendia da Grécia até a Índia?",
  opcoes: [
    "Júlio César",
    "Alexandre, o Grande",
    "Ciro, o Grande",
    "Aníbal"
  ],
  correta: 1
},
{
  // pergunta 12(td junto)
  pergunta: "Quem foi o famoso explorador português que contornou o Cabo da Boa Esperança e abriu a rota marítima para a Índia em 1498?",
  opcoes: [
    "Cristóvão Colombo",
    "Vasco da Gama",
    "Pedro Álvares Cabral",
    "Fernão de Magalhães"
  ],
  correta: 1
},
{
  // pergunta 13(td junto)
  pergunta: "Qual movimento intelectual europeu do século XVIII defendia a razão, a ciência e os direitos individuais, influenciando revoluções como a Francesa e a Americana?",
  opcoes: [
    "Renascimento",
    "Iluminismo",
    "Barroco",
    "Humanismo"
  ],
  correta: 2
},
{
  // pergunta 14(td junto)
  pergunta: "Qual evento marcou simbolicamente o início da Revolução Francesa em 14 de julho de 1789?",
  opcoes: [
    "Queda do Palácio de Versalhes",
    "Tomada da Bastilha",
    "Fuga do rei Luís XVI",
    "Execução de Robespierre"
  ],
  correta: 1
},
{
  // pergunta 15(td junto)
  pergunta: "Qual período da Pré-História é caracterizado pelo uso de ferramentas de pedra polida, desenvolvimento da agricultura e surgimento dos primeiros aldeamentos?",
  opcoes: [
    "Paleolítico",
    "Mesolítico",
    "Neolítico",
    "Idade da Pedra"
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