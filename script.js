const mensagens = [
    "Este é o texto original do parágrafo.",
    "Primeiro texto aleatório! 🌟",
    "Segunda opção de frase! 🚀",
    "Terceiro texto diferente! 💡",
    "Quarta mensagem sorteada! 🎉",
    "Quinta e última frase! 🛠️"
]

const cores = [
    'black',
    'yellow',
    'blue',
    'red',
    'green',
    'grey'
]

const titulo = document.getElementById('titulo')
const paragrafo = document.getElementById('paragrafo')
const caixa = document.getElementById('caixa')
const lista = document.getElementById('lista')
const contadorTexto = document.getElementById('contador')

const btnTexto = document.getElementById('btnTexto')
const btnCor = document.getElementById('btnCor')
const btnFundo = document.getElementById('btnFundo')
const btnDestaque = document.getElementById('btnDestaque')
const btnFonte = document.getElementById('btnFonte')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnRemover = document.getElementById('btnRemover')
const btnContador = document.getElementById('btnContador')

btnTexto.addEventListener('click', function() {
    const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
    
    paragrafo.textContent = mensagens[indiceAleatorio]
})

btnCor.addEventListener('click', function() {
    const indiceAleatorio = Math.floor(Math.random() * cores.length)

    paragrafo.style.color = cores[indiceAleatorio]
})