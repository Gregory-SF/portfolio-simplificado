const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoOcultarProjetos = document.querySelector('.btn-ocultar-projetos');
const projetos = document.querySelectorAll('.projeto');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    botaoMostrarProjetos.classList.add('remover');
    botaoOcultarProjetos.classList.remove('remover');
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
};
botaoOcultarProjetos.addEventListener('click', () => {
    ocultarProjetos();
    botaoMostrarProjetos.classList.remove('remover');
    botaoOcultarProjetos.classList.add('remover')
});

function ocultarProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
};
// function ocultarProjetos() {
//     projetos.forEach(projeto => {
//         projeto.classList.remove('ativo');
//     });
// };