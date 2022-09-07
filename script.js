let altura = 0
let largura = 0
let vidas = 1
let tempo = 4
let dificuldade = 1500

function sizeViewPort() {
  largura = window.innerWidth
  altura = window.innerHeight

  console.log(largura, altura)
}

sizeViewPort()

function randomFly() {
  let idFly = document.getElementById('mosca')

  if (idFly) {
    idFly.remove()

    if (vidas > 3) {
      window.location.href = 'gameover.html'
    } else {
      document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
      vidas++
    }
  }

  let posicaoX = Math.floor(Math.random() * largura) - 90
  let posicaoY = Math.floor(Math.random() * altura) - 90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  let mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosca.png'
  mosquito.className = randomSize() + ' ' + randomSide()
  mosquito.id = 'mosca'
  mosquito.style.position = 'absolute'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.left = posicaoX + 'px'
  mosquito.onclick = function () {
    this.remove()
  }

  document.body.appendChild(mosquito)
}

function randomSize() {
  let value = Math.floor(Math.random() * 3)

  switch (value) {
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}

function randomSide() {
  let value = Math.floor(Math.random() * 2)

  switch (value) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
  }
}

let nivel = window.location.search.replace('?', '')

if (nivel == 'dificil') {
  dificuldade = 1000
} else if (nivel == 'chuck') {
  dificuldade = 750
}

let game = setInterval(() => {
  randomFly()
}, dificuldade)

let cronometro = setInterval(() => {
  if (tempo < 0) {
    clearInterval(cronometro)
    clearInterval(game)

    window.location.href = 'winner.html'
  } else {
    document.getElementById('cronometro').innerHTML = tempo //
    tempo--
  }
}, 1000)
