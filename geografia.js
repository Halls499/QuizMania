const perguntas = [
  {
  // pergunta 1(td junto)
  pergunta: "Qual é o menor país do mundo em área territorial?",
  opcoes: [
    "Mônaco, um microestado europeu localizado na Riviera Francesa, famoso por seu cassino e eventos de Fórmula 1",
    "Vaticano, a sede da Igreja Católica, localizado dentro de Roma, na Itália, com área de apenas 0,44 km²",
    "Nauru, uma pequena ilha da Oceania, conhecida por suas reservas de fosfato e população limitada",
    "San Marino, um microestado italiano cercado por território da Itália, com séculos de história e governo próprio"
  ],
  correta: 1
},
{
  // pergunta 2(td junto)
  pergunta: "Qual é o oceano mais profundo do planeta, contendo a Fossa das Marianas?",
  opcoes: [
    "Oceano Atlântico",
    "Oceano Pacífico",
    "Oceano Índico",
    "Oceano Antártico"
  ],
  correta: 1
},
{
  // pergunta 3(td junto)
  pergunta: "Qual é o maior lago de água doce em volume do mundo?",
  opcoes: [
    "Lago Tanganica, na África",
    "Lago Baikal, na Rússia,",
    "Lago Superior, nos EUA e Canadá",
    "Lago Vitória, na África"
  ],
  correta: 2
},
{
  // pergunta 4(td junto)
  pergunta: "Qual ilha é considerada a maior do mundo?",
  opcoes: [
    "Madagascar, localizada na costa leste da África",
    "Groenlândia, pertencente à Dinamarca",
    "Nova Guiné, dividida entre Indonésia e Papua Nova Guiné",
    "Bornéu, conhecida por sua biodiversidade tropical"
  ],
  correta: 1
},
{
  // pergunta 5(td junto)
  pergunta: "Qual é o tipo de clima predominante na região do deserto do Saara?",
  opcoes: [
    "Temperado, com estações bem definidas e precipitação moderada",
    "Mediterrâneo, com verões quentes e secos e invernos amenos e úmidos",
    "Tropical úmido, com chuvas abundantes e temperaturas elevadas",
    "Árido, caracterizado por temperaturas muito altas durante o dia, baixa umidade e chuvas extremamente escassas"
  ],
  correta: 3
},
{
  // pergunta 6(td junto)
  pergunta: "Qual país possui mais de 200 línguas oficiais ou reconhecidas, tornando-se um dos mais diversos linguisticamente?",
  opcoes: [
    "Brasil",
    "Estados Unidos",
    "Índia",
    "China"
  ],
  correta: 2
},
{
  // pergunta 7(td junto)
  pergunta: "Qual país é o maior do mundo em extensão territorial na América do Sul?",
  opcoes: [
    "Brasil",
    "Chile",
    "Argentina",
    "Peru"
  ],
  correta: 2
},
{
  // pergunta 8(td junto)
  pergunta: "Quantos países fazem fronteira terrestre com o Brasil?",
  opcoes: [
    "9",
    "10",
    "11",
    "12"
  ],
  correta: 2
},
{
  // pergunta 9(td junto)
  pergunta: "Qual cidade brasileira é conhecida como a “Cidade Maravilhosa” e está localizada entre o mar e o planalto costeiro?",
  opcoes: [
    "Recife",
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
  ],
  correta: 3
},
{
  // pergunta 10(td junto)
  pergunta: "Qual é o ponto mais alto do Brasil?",
  opcoes: [
    "Pedra da Mina",
    "Pico do Cristal",
    "Pico da Bandeira",
    "Pico da Neblina"
  ],
  correta: 3
},
{
  // pergunta 11(td junto)
  pergunta: "Qual é a capital do Egito?",
  opcoes: [
    "Cairo",
    "Luxor",
    "Alexandria",
    "Aswan"
  ],
  correta: 0
},
{
  // pergunta 12(td junto)
  pergunta: "Qual país asiático é conhecido como “a fábrica do mundo”, por concentrar grande parte da produção industrial global?",
  opcoes: [
    "Índia",
    "Coreia do Sul",
    "China",
    "Japão"
  ],
  correta: 2
},
{
  // pergunta 13(td junto)
  pergunta: "Qual fator geográfico foi mais determinante para a histórica fragmentação política da Europa?",
  opcoes: [
    "A predominância de climas extremos",
    "A homogeneidade cultural entre os povos europeus",
    "A grande diversidade de relevos e barreiras naturais",
    "A escassez de recursos hídricos"
  ],
  correta: 1
},
{
  // pergunta 14(td junto)
  pergunta: "Qual é a principal função da Linha do Equador na cartografia e na climatologia?",
  opcoes: [
    "Separar as zonas polares das zonas temperadas",
    "Dividir a Terra em Ocidente e Oriente e servir de referência para a longitue",
    "Delimitar as áreas de maior altitude do globo",
    "Dividir a Terra em Hemisfério Norte e Hemisfério Sul e servir de referência para a latitude"
  ],
  correta: 2
},
{
  // pergunta 15(td junto)
  pergunta: "Qual região da Ásia é caracterizada por invernos extremamente frios, verões curtos e clima subártico?",
  opcoes: [
    "Índia",
    "Sibéria",
    "Sudeste Asiático",
    "Península Arábica"
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