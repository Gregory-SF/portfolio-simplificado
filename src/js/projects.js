const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoMostrarTudo = document.querySelector('.btn-mostrar-todos-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const projetos = document.querySelectorAll('.projeto');
import { getCards } from './github_class.js';

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    botaoMostrarProjetos.classList.add('remover');
});

async function getRepos() {
    const repo = await getCards();
    return repo;
}

botaoMostrarTudo.addEventListener('click', async () => {
    const repos = await getRepos();
    console.log(repos);
    repos.forEach(repo => console.log(repo));
});


function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
};

// var prevScrollpos = window.scrollY;
// window.onscroll=function () {
//     var currentScrollpos = window.scrollY;
//     if(prevScrollpos > currentScrollpos){
//         document.getElementById("navbar").style.top = "0";
//     }
//     else{
//         document.getElementById("navbar").style.top = "-150px";
//     }
//     prevScrollpos = currentScrollpos;
// }

// for(const element of document.getElementsByClassName("shrink"))
//     {
//         var size = parseInt(getComputedStyle(element).getPropertyValue('font-size'));
//         const parentElement = document.getElementsByClassName("projeto")[0]; 
//         const parent_width = parseInt(getComputedStyle(parentElement).getPropertyValue('width'));
//         while(element.offsetWidth > parent_width)
//         {
//             element.style.fontSize = size + "px"
//             size -= 1
//         }
//     }

