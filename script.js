// MENU HAMBÚRGUER DE TODAS AS PÁGINAS

function clickMenu() {
    if (menu.style.display == 'block') { // Se o menu de navegação (nav#menu) estiver aparecendo (block) então 
        menu.style.display = 'none'; // ao clicar no menu hambúrguer, ele vai desaparecer
    } else { // se não estiver aparecendo
        menu.style.display = 'block'; // ao clicar o menu hambúrguer, o menu de navegação (nav#menu) vai aparecer
    }
}

// CARD/MODAL DA PÁGINA DE NOVIDADES

const botoesLeiaMais = document.querySelectorAll('.botao-destaque-leia-mais'); // Delcara variável botoesLeiaMais que recebe como valor todos os elementos HTML button class="botao-destaque-leia-mais"
const modais = document.querySelectorAll('.modal-destaque'); // declara variável modais que recebe como valor todos os modais que irão aparecer ao clicar o botão de Leia mais...
const botoesFechar = document.querySelectorAll('.fechar-modal'); // declara varável para receber como valor o botão de fechar quando o modal estiver visível

botoesLeiaMais.forEach((botao, index) => { // método forEach para percorrer cada botão Leia mais... encontrado, passando como parâmetro a variável de escopo local criada "botao"
  botao.addEventListener('click', () => { // adiciona à variável "botao" um evento de clique
    modais[index].style.display = 'flex'; // a variável "modais", que recebeu como valor o MODAL que deve aparecer ao clicar em Leia mais... é exibida através do atributo style, para manipulação de estilo CSS, alternando de "none" para "flex"
  });
});

// faz desaparecer (display none) o botão de "x" ao clicar nele para fechar o modal
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