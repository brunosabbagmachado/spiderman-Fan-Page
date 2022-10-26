const botaoHome = document.querySelector('.botao--home');

const paginaAranhas = document.querySelector('.conteudo--aranhas');


botaoHome.addEventListener('click', function () {
    paginaAranhas.classList.add('inativa');
});
