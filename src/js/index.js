const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoOcultarProjetos = document.querySelector('.btn-ocultar-projetos');
const projetos = document.querySelectorAll('.projeto');

const botaoPort = document.querySelector('.btn-lang');
const textoPort = document.querySelector('#pt');
const bandeira = document.querySelector('.bandeira');
const textoEng = document.querySelector('#en');

// botaoMostrarProjetos.addEventListener('click', () => {
//     mostrarMaisProjetos();
//     botaoMostrarProjetos.classList.add('remover');
//     botaoOcultarProjetos.classList.remove('remover');
// });

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
};

// botaoOcultarProjetos.addEventListener('click', () => {
//     ocultarProjetos();
//     botaoMostrarProjetos.classList.remove('remover');
//     botaoOcultarProjetos.classList.add('remover')
// });

function ocultarProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
};

botaoPort.addEventListener('click', () => {
    if(botaoPort.id==="bt-port"){
        bandeira.src ="src/imagens/bandeira_eua.png";
        botaoPort.id="bt-eng";
        mostrarTextoEng();
    }
    else{
        botaoPort.id="bt-port";
        bandeira.src ="src/imagens/bandiera_brasil.jpg";
        mostrarTextoPort();
    }
});

function mostrarTextoPort() {
    textoEng.classList.add('esconder');
    textoPort.classList.remove('esconder');
};

function mostrarTextoEng() {
    textoEng.classList.remove('esconder');
    textoPort.classList.add('esconder');
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
    