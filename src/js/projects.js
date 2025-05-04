const botaoOcultarProjetos = document.querySelector('.btn-ocultar-projetos');
const botaoMostrarTudo = document.querySelector('.btn-mostrar-projetos');
const projetosPrincipais = document.querySelectorAll('.projeto.ativo');
const container = document.querySelector('.container-projetos');
import { getCards } from './github_class.js';
const repos = [];

document.addEventListener("DOMContentLoaded", async (event) =>{
    // repos = await getRepos();
    checarTema();
});

async function getRepos() {
    const repos = await getCards();
    console.log(repos);
    return repos;
};

botaoMostrarTudo.addEventListener('click', async () => {
    let areThereProjects = document.querySelector('.projeto:not(.ativo)') == null;
    botaoMostrarTudo.classList.toggle('hide');
    botaoOcultarProjetos.classList.toggle('hide');
    toggleProjetos();
    if(areThereProjects) await checarStorageOuApi();
});

async function checarStorageOuApi() {
    console.log('ta verfificando lá');
    // if (localStorage.getItem("nome_0")!= null) {
    if (sessionStorage.getItem("nome_0")!= null) {
        console.log('ta indo criar pelo storage');
        criarCard(pegarLocalStorage());
    } else {
        console.log('ta indo criar pela api');
        const fullInfo = await getRepos();
        criarCard(fullInfo);   
        salvarSite(fullInfo);
    }
}

function pegarLocalStorage() {
    // const qntdRepos = (localStorage.length-2)/3;
    const qntdRepos = sessionStorage.length/3;
    let fullInfo = [{}, {}];
    console.log('ta pegando as coisas do storage');
    
    for (let i = 0; i < qntdRepos-1; i++) {
        // fullInfo[i].name = localStorage.getItem("nome_"+i);
        // fullInfo[i].name = localStorage.getItem("descricao_"+i);
        // fullInfo[i].name = localStorage.getItem("link_"+i);
        fullInfo[i] = {name: sessionStorage.getItem("nome_"+i), description: sessionStorage.getItem("descricao_"+i), html_url: sessionStorage.getItem("link_"+i)};
    }
    return fullInfo;
}

function criarCard(fullInfo) {
    fullInfo.forEach(info =>{
        const card = document.createElement('div');
        card.className='projeto';
        container.appendChild(card);
        const anchor = document.createElement('a');
        anchor.href=info.html_url;
        anchor.target='_blank';
        card.appendChild(anchor);
        const img = document.createElement('img');
        const tema = localStorage.getItem('tema');
        img.src=`../imagens/gh_${tema}.png`;
        img.alt='Imagem github';
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

function salvarSite(fullInfo) {
    console.log('ta setando a informação no storage');
    for (let i = 0; i < fullInfo.length; i++) {
        // localStorage.setItem("nome_"+i, fullInfo[i].name);
        // localStorage.setItem("descricao_"+i, fullInfo[i].description);
        // localStorage.setItem("link_"+i, fullInfo[i].html_url);
        sessionStorage.setItem("nome_"+i, fullInfo[i].name);
        sessionStorage.setItem("descricao_"+i, fullInfo[i].description);
        sessionStorage.setItem("link_"+i, fullInfo[i].html_url);
    };
}

botaoOcultarProjetos.addEventListener('click', () => {
    toggleProjetos();
    botaoMostrarTudo.classList.toggle('hide');
    botaoOcultarProjetos.classList.toggle('hide');
});

function toggleProjetos() {    
    const todosProjetos = document.querySelectorAll('.projeto:not(.ativo)');
    projetosPrincipais.forEach(projeto => {
        projeto.classList.toggle('hide');
    });
    todosProjetos.forEach(projeto => {
        projeto.classList.toggle('hide');
    });
}

function checarTema() {
    const tema = localStorage.getItem("tema");
    const projs = document.querySelectorAll('.projeto');
    projs.forEach(projeto => {
        projeto.firstElementChild.firstElementChild.src=`../imagens/gh_${tema}.png`;
    });
}

    // for(const element of document.getElementsByClassName("shrink")) {
    //         var size = parseInt(getComputedStyle(element).getPropertyValue('font-size'));
    //         const parentElement = document.getElementsByClassName("projeto")[0]; 
    //         const parent_width = parseInt(getComputedStyle(parentElement).getPropertyValue('width'));
    //         while(element.offsetWidth > parent_width)
    //         {
    //             element.style.fontSize = size + "px"
    //             size -= 1
    //         }
    // }

