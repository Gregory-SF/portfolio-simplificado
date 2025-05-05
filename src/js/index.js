const json = "src/json/en.json";

document.addEventListener("DOMContentLoaded", async (event) =>{
    salvarTemaAtual();
    salvarIdiomaAtual();
    toggleMenu();
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
    // Para a versão final, descomentar essa linha
    // fetch(`/portfolio-simplificado/src/json/${idioma}.json`)
    .then(data => data.json())
    .then(data => {
        traduzirPagina(data);
    });
}

function traduzirPagina(linguagem) {
    document.querySelectorAll("[data-i18n]").forEach(elemento =>{
        // console.log(elemento);
        const chave = elemento.getAttribute("data-i18n");
        // console.log(chave);
        if(linguagem[chave]){
            elemento.textContent = linguagem[chave];
        }
    });

    // Para a versão final, descomentar essa linha
    // document.getElementById("bandeira").setAttribute("src", `/portfolio-simplificado/src/imagens/${idiomaAtual}.jpg`);
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

    /// PARA FORMS
    document.querySelectorAll("[data-i18n-form]").forEach(elemento =>{
        const chave = elemento.getAttribute("data-i18n-form");
        if(linguagem[chave]){
            elemento.textContent = '';
            elemento.setAttribute('placeholder',linguagem[chave]);
        }
    });
}

function toggleMenu() {
    const cabecalho = document.body.querySelector('.cabecalho'); 
    const btnMenu = document.body.querySelector('.btn-menu'); 
    cabecalho.classList.add('hide'); 

    btnMenu.addEventListener("click", ()=>{   
        cabecalho.classList.remove("hide");
        btnMenu.classList.add("hide");
    });

    window.addEventListener("click", (e)=>{   
        if(e.target!=btnMenu && !(cabecalho.classList.contains('hide'))) {
            cabecalho.classList.add("hide");
            btnMenu.classList.remove("hide");
        };
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

// Contact me
function enviarEmail(event) {
    event.preventDefault();
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const texto = document.getElementById('text').value;

    const mailtoLink = `mailto:gregory16704@gmail.com?subject=${nome} estou te contactando por meio do seu portfólio&body=${texto}`;
    window.open(location.href=mailtoLink, '_blank');
}
    