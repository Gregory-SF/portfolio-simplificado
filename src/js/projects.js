const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoMostrarTudo = document.querySelector('.btn-mostrar-todos-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const projetos = document.querySelectorAll('.projeto');
const container = document.querySelector('.container-projetos');
import { getCards } from './github_class.js';
const repos = [];

document.addEventListener("DOMContentLoaded", async (event) =>{
    // repos = await getRepos();

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
}

function salvarSite(i, info) {
    localStorage.setItem("link_"+i, info.html_url);
    localStorage.setItem("nome_"+i, info.name);
    localStorage.setItem("informacoes-projeto_"+1, info.description);
}


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

