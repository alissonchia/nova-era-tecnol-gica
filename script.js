const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está caminhando por uma cidade futurista quando se depara com uma loja de tecnologias inovadoras. Em uma vitrine, você vê um dispositivo que promete mudar o futuro da humanidade. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Estou maravilhado! Quero saber tudo sobre isso.",
                afirmacao: "Isso parece arriscado. Melhor não me envolver. "
            },
            {
                texto: "Isso parece arriscado. Melhor não me envolver!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você decide explorar mais e encontra o dispositivo ativado, mostrando um futuro onde a tecnologia resolve problemas globais. Qual desses avanços você considera mais empolgante?",
        alternativas: [
            {
                texto: "A erradicação de doenças e a melhoria na qualidade de vida.",
                afirmacao: "A erradicação de doenças e a melhoria na qualidade de vida."
            },
            {
                texto: "A criação de uma rede global de cidades sustentáveis e ecológicas.",
                afirmacao: "A criação de uma rede global de cidades sustentáveis e ecológicas."
            }
        ]
    },
    {
        enunciado: "O dispositivo também pode alterar eventos passados. Você vê como isso poderia corrigir grandes injustiças. Qual é sua opinião sobre esse poder?",
        alternativas: [
            {
                texto: "Pode ser uma chance para corrigir erros históricos e promover a justiça.",
                afirmacao: "Pode ser uma chance para corrigir erros históricos e promover a justiça."
            },
            {
                texto: "Isso pode gerar muita confusão e instabilidade, causando mais problemas do que soluções.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você agora tem a oportunidade de usar o dispositivo para fazer uma escolha que impactará sua vida. O que você escolheria?",
        alternativas: [
            {
                texto: "Focar em melhorar minha vida pessoal e relacionamentos.",
                afirmacao: ""
            },
            {
                texto: "Usar o dispositivo para promover o bem-estar global e solucionar problemas maiores.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Após explorar o dispositivo, você é transportado para uma nova dimensão onde a tecnologia evoluiu de formas incríveis. A cidade onde você se encontra é um exemplo perfeito de como a tecnologia pode criar uma sociedade ideal. As ruas estão repletas de soluções inovadoras para problemas antigos e as pessoas vivem em harmonia. Com o tempo, você se adapta à nova realidade e começa a contribuir para a melhoria contínua da cidade. Sua influência se torna fundamental na criação de novas tecnologias que ajudam a manter o equilíbrio e a prosperidade da sociedade. Você se torna um líder respeitado, conhecido por sua sabedoria e visão futurista, ajudando a moldar um futuro brilhante para todos os habitantes da nova era tecnológica. ",
        
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
