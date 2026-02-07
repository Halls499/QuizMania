const perguntas = [
  {
  // pergunta 1(td junto)
  pergunta: "Qual banda britânica lançou o álbum “Sgt. Pepper’s Lonely Hearts Club Band” em 1967?",
  opcoes: [
    "The Rolling Stones",
    "The Beatles",
    "Pink Floyd",
    "Queen"
  ],
  correta: 1
},
{
  // pergunta 2(td junto)
  pergunta: "Qual cantor é conhecido como “Rei do Pop”?",
  opcoes: [
    "Prince",
    "Michael Jackson",
    "Justin Timberlake",
    "Bruno Mars"
  ],
  correta: 2
},
{
  // pergunta 3(td junto)
  pergunta: "Qual instrumento de cordas é tocado dedilhando ou usando arco, e é comum em orquestras clássicas?",
  opcoes: [
    "Violino",
    "Piano",
    "Trompete",
    "Flauta"
  ],
  correta: 1
},
{
  // pergunta 4(td junto)
  pergunta: "Qual álbum da banda Queen é famoso pelo hit “Bohemian Rhapsody”?",
  opcoes: [
    "The Game",
    "A Night at the Opera",
    "News of the World",
    "Queen II"
  ],
  correta: 2
},
{
  // pergunta 5(td junto)
  pergunta: "Qual artista brasileiro já venceu Grammy Latino e é reconhecido internacionalmente, misturando MPB e pop?",
  opcoes: [
    "Caetano Veloso",
    "Roberto Carlos",
    "Anitta",
    "Gilberto Gil"
  ],
  correta: 0
},
{
  // pergunta 6(td junto)
  pergunta: "Quem foi a primeira artista a ganhar o Grammy de Álbum do Ano mais de uma vez na categoria solo feminina?",
  opcoes: [
    "Taylor Swift",
    "Adele",
    "Whitney Houston",
    "Beyoncé"
  ],
  correta: 0
},
{
  // pergunta 7(td junto)
  pergunta: "Em que ano a banda Charlie Brown Jr. encerrou suas atividades oficialmente, após a morte de Chorão?",
  opcoes: [
    "2010",
    "2017",
    "2015",
    "2013"
  ],
  correta: 3
},
{
  // pergunta 8(td junto)
  pergunta: "Por que o cantor brasileiro Baco Exu do Blues nomeou seu álbum como HASOS?",
  opcoes: [
    "O nome HASOS foi escolhido porque é uma expressão popular brasileira que representa força e resistência, refletindo o cotidiano urbano e os desafios enfrentados pelo artista",
    "O título do álbum foi influenciado por uma pintura de Caravaggio, na qual ele viu gravado em uma espada, em latim, a frase “a humildade vence o orgulho”. Assim como a obra de Caravaggio, o álbum de Baco retrata a dor, os conflitos internos e as reflexões sobre orgulho e humildade presentes na vida do cantor",
    "HASOS é, na verdade, um acrônimo formado pelas iniciais dos nomes de vários colaboradores e músicos que participaram da produção do álbum, representando a união de talentos que contribuíram para a obra",
    "O álbum recebeu esse nome em homenagem a uma cidade brasileira que foi importante na infância do cantor, simbolizando raízes culturais e memórias afetivas que inspiraram as músicas"
  ],
  correta: 1
},
{
  // pergunta 9(td junto)
  pergunta: "O que significa a sigla MPB, gênero musical brasileiro que mistura influências da bossa nova, samba e jazz?",
  opcoes: [
    "Música Pop Brasileira",
    "Movimento Popular Brasileiro",
    "Música Para Baile",
    "Música Popular Brasileira"
  ],
  correta: 3
},
{
  // pergunta 10(td junto)
  pergunta: "Qual década é considerada o auge do rock clássico, com bandas como Led Zeppelin, Queen e Pink Floyd?",
  opcoes: [
    "1950",
    "1960",
    "1970",
    "1980"
  ],
  correta: 1
},
{
  // pergunta 11(td junto)
  pergunta: "Quais os principais artistas da mpb que tiveram maior impacto no período da ditadura militar, utilizando denúncias ao regime de forma oculta em suas músicas?",
  opcoes: [
    "Chico Buarque, Caetano Veloso, Raul Seixas, Rita Lee e Gilberto Gil.",
    "Nara Leão, Chico Buarque, Maria Bethania e Bebet",
    "Angela Roro, Rita Lee, Legião Urbana, Ana Carolina e Gal Costa",
    "Milton Nascimento, Djavan, Alceu Valença, Zeca Baleiro e Ney Matogrosso"
  ],
  correta: 0
},
{
  // pergunta 12(td junto)
  pergunta: "Considerando apenas os gêneros musicais (sem incluir subgêneros), quantos estilos musicais foram criados no Brasil?",
  opcoes: [
    "Aproximadamente 5, incluindo samba e MPB",
    "Aproximadamente 10, abrangendo gêneros como samba e forró",
    "Aproximadamente 20, incluindo gêneros regionais e urbanos consolidados ao longo do século XX",
    "Mais de 40, considerando todas as manifestações musicais tradicionais e populares do país"
  ],
  correta: 1
},
{
  // pergunta 13(td junto)
  pergunta: "Durante o período da escravidão no Brasil, qual foi a principal função social da música produzida pelos africanos escravizados?",
  opcoes: [
    "Entretenimento exclusivo das elites coloniais",
    "Expressão artística desvinculada de contexto social",
    "Instrumento de catequização imposto pelos senhores",
    "Forma de resistência cultural, comunicação e preservação identitária"
  ],
  correta: 3
},
{
  // pergunta 14(td junto)
  pergunta: "Qual é o nome verdadeiro do MC Livinho?",
  opcoes: [
    "Felipe Silva",
    "Otávio Augusto",
    "Lucas Oliveira",
    "João Lucas"
  ],
  correta: 1
},
{
  // pergunta 15(td junto)
  pergunta: "Qual rapper norte-americano lançou o álbum The Marshall Mathers LP?",
  opcoes: [
    "Jay-Z",
    "Eminem",
    "Drake",
    "Kanye West"
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