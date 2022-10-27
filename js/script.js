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
});

botaoSobre.addEventListener('click', function () {
    paginaSobre.classList.remove('pagina--inativa');

    paginaHome.classList.add('pagina--inativa');
    paginaAranhas.classList.add('pagina--inativa');
    paginaFilmes.classList.add('pagina--inativa');
});

botaoAranhas.addEventListener('click', function () {
    paginaAranhas.classList.remove('pagina--inativa');
    
    paginaSobre.classList.add('pagina--inativa');
    paginaHome.classList.add('pagina--inativa');
    paginaFilmes.classList.add('pagina--inativa');
});

botaoFilmes.addEventListener('click', function () {
    paginaFilmes.classList.remove('pagina--inativa');

    paginaHome.classList.add('pagina--inativa');
    paginaAranhas.classList.add('pagina--inativa');
    paginaSobre.classList.add('pagina--inativa');
});


