const menuHamburguer = document.getElementsByClassName('ham-menu')[0];
const containerHeader = document.getElementsByClassName('container-header')[0];

function clickMenu() {
  if (containerHeader.style.display === 'flex') {
    containerHeader.style.display = 'none';
  } else {
    containerHeader.style.display = 'flex';
  }
}

menuHamburguer.addEventListener("click", clickMenu);
