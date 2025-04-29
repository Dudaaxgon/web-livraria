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

// Data dinâmica da página de novidades

const data = new Date(); // cria uma variável para receber a instância de new Date()

// Função para adicionar o "0" à frente caso o número seja menor que 10
function adicionarZero(num) {
    return num < 10 ? '0' + num : num;
}

// Lista dos meses
const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const dia = adicionarZero(data.getDate()); // variável para receber a data em dia
const mes = meses[data.getMonth()]; // Usa o nome do mês
const ano = data.getFullYear();

// Formato: "XX de Mês, 2025"
const dataFormatada = `${dia} de ${mes}, ${ano}`;

const dataASerExibida = document.getElementById('data');
if (dataASerExibida) {
  dataASerExibida.innerText = dataFormatada;
}

// função de visualizar senha no formulário

document.addEventListener('DOMContentLoaded', function() {
  const botaoMostrarSenha = document.getElementById('botao-mostrar-senha');
  const icone = botaoMostrarSenha.querySelector('i');

  botaoMostrarSenha.addEventListener('click', function(event) {
    event.preventDefault();
    mostrarSenha();
  });

  function mostrarSenha() {
    const inputSenha = document.getElementById('senha');

    if (inputSenha.type === "password") {
      inputSenha.type = "text";
      icone.classList.remove('fa-eye');
      icone.classList.add('fa-eye-slash');
    } else {
      inputSenha.type = "password";
      icone.classList.remove('fa-eye-slash');
      icone.classList.add('fa-eye');
    }
  }

  const form = document.getElementById('formulario-inscricao');
  const modal = document.getElementById('modal-inscricao');
  const botaoFecharModal = document.getElementById('fechar-modal-inscricao');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email.trim() === '' || senha.trim() === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // alert('Inscrição realizada com sucesso!');
    modal.style.display = 'flex';
  });

  botaoFecharModal.addEventListener('click', function() {
    modal.style.display = 'none';
    
    // Limpa o formulário
    form.reset();
    
    // Voltar o ícone do olho para "mostrar senha"
    const icone = document.getElementById('botao-mostrar-senha').querySelector('i');
    icone.classList.remove('fa-eye-slash');
    icone.classList.add('fa-eye');
    document.getElementById('senha').type = "password";
  });
});
