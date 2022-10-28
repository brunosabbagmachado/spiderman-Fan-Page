const botaoHome = document.querySelector('.botao--home');
const botaoSobre = document.querySelector('.botao--sobre');
const botaoAranhas = document.querySelector('.botao--aranhas');
const botaoFilmes = document.querySelector('.botao--filmes');

const paginaHome = document.querySelector('.conteudo--home');
const paginaSobre = document.querySelector('.conteudo--sobre');
const paginaAranhas = document.querySelector('.conteudo--aranhas');
const paginaFilmes = document.querySelector('.conteudo--filmes');

botaoHome.addEventListener('click', function () {
    paginaHome.classList.remove('pagina--inativa');
    paginaSobre.classList.add('pagina--inativa');
    paginaAranhas.classList.add('pagina--inativa');
    paginaFilmes.classList.add('pagina--inativa');

    botaoHome.classList.add('botao--ativo');
    botaoSobre.classList.remove('botao--ativo');
    botaoAranhas.classList.remove('botao--ativo');
    botaoFilmes.classList.remove('botao--ativo');
});

botaoSobre.addEventListener('click', function () {
    paginaSobre.classList.remove('pagina--inativa');
    paginaHome.classList.add('pagina--inativa');
    paginaAranhas.classList.add('pagina--inativa');
    paginaFilmes.classList.add('pagina--inativa');

    botaoHome.classList.remove('botao--ativo');
    botaoSobre.classList.add('botao--ativo');
    botaoAranhas.classList.remove('botao--ativo');
    botaoFilmes.classList.remove('botao--ativo');
});

botaoAranhas.addEventListener('click', function () {
    paginaAranhas.classList.remove('pagina--inativa');
    paginaSobre.classList.add('pagina--inativa');
    paginaHome.classList.add('pagina--inativa');
    paginaFilmes.classList.add('pagina--inativa');

    botaoHome.classList.remove('botao--ativo');
    botaoSobre.classList.remove('botao--ativo');
    botaoAranhas.classList.add('botao--ativo');
    botaoFilmes.classList.remove('botao--ativo');
});

botaoFilmes.addEventListener('click', function () {
    paginaFilmes.classList.remove('pagina--inativa');
    paginaHome.classList.add('pagina--inativa');
    paginaAranhas.classList.add('pagina--inativa');
    paginaSobre.classList.add('pagina--inativa');

    botaoHome.classList.remove('botao--ativo');
    botaoSobre.classList.remove('botao--ativo');
    botaoAranhas.classList.remove('botao--ativo');
    botaoFilmes.classList.add('botao--ativo');
});


