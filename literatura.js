const perguntas = [
  {
  // pergunta 1(td junto)
  pergunta: "Quem escreveu Dom Quixote, considerado um dos maiores romances da literatura mundial?",
  opcoes: [
    "Lope de Vega",
    "Dante Alighieri",
    "Miguel de Cervantes",
    "William Shakespeare"
  ],
  correta: 2
},
{
  // pergunta 2(td junto)
  pergunta: "Qual obra é considerada o marco inicial do romantismo na literatura brasileira?",
  opcoes: [
    "O Guarani, de José de Alencar",
    "Iracema, de José de Alencar",
    "Senhora, de José de Alencar",
    "Dom Casmurro, Machado de Assis"
  ],
  correta: 0
},
{
  // pergunta 3(td junto)
  pergunta: "Quem é o autor do poema O Navio Negreiro, considerado um marco do romantismo brasileiro e da crítica à escravidão?",
  opcoes: [
    "Carlos Drummond de Andrade",
    "Gonçalves Dias",
    "Olavo Bilac",
    "Castro Alves"
  ],
  correta: 3
},
{
  // pergunta 4(td junto)
  pergunta: "Quem é o autor de O Pequeno Príncipe?",
  opcoes: [
    "Jules Verne",
    "Lewis Carroll",
    "Antoine de Saint-Exupéry",
    "Roald Dahl"
  ],
  correta: 2
},
{
  // pergunta 5(td junto)
  pergunta: "Quem é o autor de Capitães da Areia, romance que retrata a vida de crianças de rua em Salvador?",
  opcoes: [
    "Jorge Amado",
    "Graciliano Ramos",
    "José Lins do Rego",
    "Machado de Assis"
  ],
  correta: 0
},
{
  // pergunta 6(td junto)
  pergunta: "Quem é o autor do personagem Sherlock Holmes?",
  opcoes: [
    "Edgar Allan Poe",
    "Arthur Conan Doyle",
    "Agatha Christie",
    "Dan Brown"
  ],
  correta: 3
},
{
  // pergunta 7(td junto)
  pergunta: "Quem escreveu Guerra e Paz, romance épico sobre a Rússia napoleônica?",
  opcoes: [
    "Fiódor Dostoiévski",
    "Leon Tolstói",
    "Aleksandr Púchkin",
    "Ivan Turguêniev"
  ],
  correta: 1
},
{
  // pergunta 8(td junto)
  pergunta: "Quem é o autor da saga O Senhor dos Anéis?",
  opcoes: [
    "Robert E. Howard",
    "George R. R. Martin",
    "J. K. Rowling",
    "J. R. R. Tolkien"
  ],
  correta: 3
},
{
  // pergunta 9(td junto)
  pergunta: "Qual característica é mais marcante na escrita de Machado de Assis?",
  opcoes: [
    "Uso do realismo psicológico e ironia sutil",
    "Aventuras fantásticas e heróis épicos",
    "Narrativa modernista experimental",
    "Regionalismo nordestino"
  ],
  correta: 0
},
{
  // pergunta 10(td junto)
  pergunta: "Qual contribuição de Monteiro Lobato para a literatura brasileira foi pioneira?",
  opcoes: [
    "Literatura modernista",
    "Crítica social profunda",
    "Literatura infantil nacionalizada",
    "Escrita de romances históricos"
  ],
  correta: 2
},
{
  // pergunta 11(td junto)
  pergunta: "Qual obra de Machado de Assis é narrada por um personagem falecido que observa e comenta a sociedade brasileira?",
  opcoes: [
    "Esaú e Jacó",
    "Quincas Borba",
    "Dom Casmurro",
    "Memórias Póstumas de Brás Cubas"
  ],
  correta: 3
},
{
  // pergunta 12(td junto)
  pergunta: "No universo de Harry Potter, qual é o significado narrativo dos Horcruxes?",
  opcoes: [
    "Simbolizam a fragmentação da alma como consequência extrema da busca pela imortalidade",
    "São objetos criados apenas para ampliar o poder mágico de um bruxo",
    "Representam uma prática comum e aceita na magia das trevas",
    "Funcionam como armas mágicas criadas para derrotar inimigos específicos"
  ],
  correta: 0
},
{
  // pergunta 13(td junto)
  pergunta: "Shakespeare é também famoso por escrever sonetos. Quantos sonetos ele publicou?",
  opcoes: [
    "91",
    "105",
    "154",
    "183"
  ],
  correta: 2
},
{
  // pergunta 14(td junto)
  pergunta: "No romance A Escrava Isaura, qual crítica social é central à construção da narrativa?",
  opcoes: [
    "A decadência econômica da elite rural brasileira",
    "A violência e a desumanização provocadas pelo sistema escravocrata",
    "O conflito político entre monarquia e república",
    "A industrialização acelerada do Brasil oitocentista"
  ],
  correta: 1
},
{
  // pergunta 15(td junto)
  pergunta: "Na Odisseia, qual é o principal traço que define o herói Odisseu ao longo da narrativa?",
  opcoes: [
    "A força física superior aos demais guerreiros",
    "A submissão ao destino sem tentativa de mudança",
    "A fidelidade irrestrita aos deuses do Olimpo",
    "A astúcia e a inteligência como meios de sobrevivência e retorno a Ítaca"
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