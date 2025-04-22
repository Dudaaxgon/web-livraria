// MENU HAMBÚRGUER DE TODAS AS PÁGINAS

function clickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// CARDS/MODAL DA PÁGINA DE NOVIDADES

const botoesLeiaMais = document.querySelectorAll('.botao-destaque-leia-mais');
const modais = document.querySelectorAll('.modal-destaque');
const botoesFechar = document.querySelectorAll('.fechar-modal');

botoesLeiaMais.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    modais[index].style.display = 'flex';
  });
});

botoesFechar.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    modais[index].style.display = 'none';
  });
});

// Fecha modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
  modais.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});