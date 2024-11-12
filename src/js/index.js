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

var prevScrollpos = window.scrollY;
window.onscroll=function () {
    var currentScrollpos = window.scrollY;
    if(prevScrollpos > currentScrollpos){
        document.getElementById("navbar").style.top = "0";
    }
    else{
        document.getElementById("navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollpos;
}