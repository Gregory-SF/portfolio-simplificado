const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoMostrarTudo = document.querySelector('.btn-mostrar-todos-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const projetos = document.querySelectorAll('.projeto');
const container = document.querySelector('.container-projetos');
import { getCards } from './github_class.js';
const repos = [];

document.addEventListener("DOMContentLoaded", async (event) =>{
    repos = await getRepos();

    // const temaLocal = localStorage.getItem("tema");
    // document.body.setAttribute('data-theme',temaLocal);
    // const btnAlterarTema = document.getElementById("btnAlterarTema");
    // btnAlterarTema.textContent = btnAlterarTema.textContent == 'Light' ? 'Dark' : 'Light';
});

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    botaoMostrarProjetos.classList.add('remover');
});

async function getRepos() {
    const repos = await getCards();
    console.log('api pega');
    console.log(repos);
    return repos;
    
    // const repo = await getCards();
    // repos = repo;
}

botaoMostrarTudo.addEventListener('click', async () => {
    // const repos = await getRepos();
    // console.log(repos);
    // repos.forEach(repo => console.log(repo));
    await criarCard();
});


function mostrarMaisProjetos() {    
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
};

// async function pegarPrimeirpRep() {
//     const repos = await getRepos();
//     console.log(repos);
//     console.log(repos[0]);
//     return repos[0]
// }

async function criarCard() {
    const fullInfo = await getRepos();

    // await getRepos();
    // const fullInfo = repos;

    console.log('criar cards');
    console.log(fullInfo);
    

    fullInfo.forEach(info =>{
        const card = document.createElement('div');
        card.className='projeto ativo';
        container.appendChild(card);
        const anchor = document.createElement('a');
        anchor.href=info.html_url;
        anchor.target='_blank';
        card.appendChild(anchor);
        const img = document.createElement('img');
        img.src='../imagens/Luffy_coringa.jfif';
        img.alt='Luffy coringa meo';
        anchor.appendChild(img);
        const titulo = document.createElement('h3');
        titulo.className='nome';
        titulo.innerText=info.name;
        anchor.appendChild(titulo);
        const container_texto = document.createElement('div');
        container_texto.className="informacoes-projeto";
        anchor.appendChild(container_texto);
        const texto = document.createElement('p');
        texto.innerText=info.description;
        texto.className='shrink';
        container_texto.appendChild(texto);
        const vergit = document.createElement('p');
        vergit.innerText='Ver projeto no GitHub';
        container_texto.appendChild(vergit);
    });
    // const card = document.createElement('div');
    // card.className='projeto ativo';
    // container.appendChild(card);
    // const anchor = document.createElement('a');
    // // anchor.href=info.html_url;
    // anchor.href='https://github.com/Gregory-SF?tab=repositories';
    // anchor.target='_blank';
    // card.appendChild(anchor);
    // const img = document.createElement('img');
    // img.src='../imagens/Luffy_coringa.jfif';
    // img.alt='Luffy coringa meo';
    // anchor.appendChild(img);
    // const titulo = document.createElement('h3');
    // titulo.className='nome';
    // titulo.innerText='Projeto de Persistence e Programação Orientada a Objetos';
    // anchor.appendChild(titulo);
    // const containertexto = document.createElement('div');
    // containertexto.className="informacoes-projeto";
    // anchor.appendChild(containertexto);
    // const texto = document.createElement('p');
    // texto.innerHTML='Projeto de gerenciamento de contas, clientes e movimentações feito usando Java, Hibernate e MySQL de forma a praticar a persistência no banco de dados';
    // texto.className='shrink';
    // containertexto.appendChild(texto);
    // const vergit = document.createElement('p');
    // titulo.innerText='Ver projeto no GitHub';
    // container_texto.appendChild(vergit);
}

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

