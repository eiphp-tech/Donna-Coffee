const menuHamburguer = document.getElementsByClassName('ham-menu')[0]
const containerHeader = document.getElementsByClassName('container-header')[0]
const containerTestemunhas = document.getElementsByClassName('testemunhas')[0]
const divTestemunha = document.querySelectorAll('.testemunha')
const botaoLeft = document.getElementById('arrow-left')
const botaoRight = document.getElementById('arrow-right')
const botaoLeftCelular = document.getElementById('arrow-left-cell')
const botaoRightCelular = document.getElementById('arrow-right-cell')

// Menu

function clickMenu() {
  containerHeader.style.display = 
    containerHeader.style.display === 'flex' ? 'none' : 'flex';
}


menuHamburguer.addEventListener("click", clickMenu)

// Carrossel Avaliação

let indexInicial = 0
const total = divTestemunha.length
const itemVisivel = 2
const etapa = 100 / itemVisivel

// Define a largura de cada testemunha
divTestemunha.forEach((item) => {
  item.style.minWidth = `${97 / itemVisivel}%`;
  item.style.transition = "transform 0.5s ease-in-out"
})

// deixei nome com update pq e menor. (update == atualização)
function updateCarrosel() {
  divTestemunha.forEach((item, index) => {
    const deslocar = -(indexInicial * 105)
    item.style.transform = `translateX(${deslocar}%)`
  })
}

botaoRight.addEventListener('click', () => {
  if (indexInicial < total - itemVisivel) {
    indexInicial++
  } else {
    indexInicial = 0
  }
  updateCarrosel()
})

botaoLeft.addEventListener('click', () => {
  if (indexInicial > 0) {
    indexInicial--
  } else {
    indexInicial = total - itemVisivel
  }
  updateCarrosel()
})

botaoRightCelular.addEventListener('click', () => {
  if (indexInicial < total - itemVisivel) {
    indexInicial++
  } else {
    indexInicial = 0
  }
  updateCarrosel()
})

botaoLeftCelular.addEventListener('click', () => {
  if (indexInicial > 0) {
    indexInicial--
  } else {
    indexInicial = total - itemVisivel
  }
  updateCarrosel()
})
