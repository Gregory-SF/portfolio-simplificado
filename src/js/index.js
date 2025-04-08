const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoOcultarProjetos = document.querySelector('.btn-ocultar-projetos');
const projetos = document.querySelectorAll('.projeto');

// const botaoPort = document.querySelector('.btn-lang');
// const textoPort = document.querySelector('#pt');
// const bandeira = document.querySelector('.bandeira');
// const textoEng = document.querySelector('#en');

document.addEventListener("DOMContentLoaded", async (event) =>{
    salvarTemaAtual();
    salvarIdiomaAtual();
});

function salvarTemaAtual() {
    const temaLocal = localStorage.getItem("tema");
    document.body.setAttribute('data-theme',temaLocal);
    const btnAlterarTema = document.getElementById("btnAlterarTema");
    btnAlterarTema.textContent = temaLocal == 'light' ? 'Dark' : 'Light';
}

function alterarTema() {
    const tema= document.body.getAttribute("data-theme");
    const novoTema = tema == 'dark' ? 'light' : 'dark';

    localStorage.setItem("tema", novoTema);
    document.body.setAttribute('data-theme',novoTema);

    const btnAlterarTema = document.getElementById("btnAlterarTema");
    btnAlterarTema.textContent = btnAlterarTema.textContent == 'Light' ? 'Dark' : 'Light';
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
};

function ocultarProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
};

// botaoPort.addEventListener('click', () => {
//     if(botaoPort.id==="bt-port"){
//         bandeira.src ="src/imagens/bandeira_eua.png";
//         botaoPort.id="bt-eng";
//         mostrarTextoEng();
//     }
//     else{
//         botaoPort.id="bt-port";
//         bandeira.src ="src/imagens/bandiera_brasil.jpg";
//         mostrarTextoPort();
//     }
// });

// function mostrarTextoPort() {
//     textoEng.classList.add('esconder');
//     textoPort.classList.remove('esconder');
// };

// function mostrarTextoEng() {
//     textoEng.classList.remove('esconder');
//     textoPort.classList.add('esconder');
// };


function salvarIdiomaAtual() {
    idiomaAtual = localStorage.getItem("idioma");
    carregarIdioma(idiomaAtual);
}

function alterarIdioma(){
    idiomaAtual = idiomaAtual == "pt"? "en": "pt";
    localStorage.setItem("idioma", idiomaAtual);
    carregarIdioma(idiomaAtual);
}

function carregarIdioma(idioma) {
    fetch(`/src/json/${idioma}.json`)
    .then(data => data.json())
    .then(data => {
        traduzirPagina(data);
    });
}

function traduzirPagina(linguagem) {
    document.querySelectorAll("[data-i18n]").forEach(elemento =>{
        console.log(elemento);
        const chave = elemento.getAttribute("data-i18n");
        console.log(chave);
        if(linguagem[chave]){
            elemento.textContent = linguagem[chave];
        }
    });

    document.getElementById("bandeira").setAttribute("src", `/src/imagens/${idiomaAtual}.jpg`);

    /// PARA IMAGENS
    document.querySelectorAll("[data-i18n-alt]").forEach(elemento =>{
        console.log(elemento);
        const chave = elemento.getAttribute("data-i18n-alt");
        console.log(chave);
        if(linguagem[chave]){
            elemento.setAttribute("alt", linguagem[chave]) ;           
        }
    });
}

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

for(const element of document.getElementsByClassName("shrink"))
    {
        var size = parseInt(getComputedStyle(element).getPropertyValue('font-size'));
        const parentElement = document.getElementsByClassName("projeto")[0]; 
        const parent_width = parseInt(getComputedStyle(parentElement).getPropertyValue('width'));
        while(element.offsetWidth > parent_width)
        {
            element.style.fontSize = size + "px"
            size -= 1
        }
    }
    