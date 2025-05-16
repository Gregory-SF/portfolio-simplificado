document.addEventListener("DOMContentLoaded", async (event) =>{
    fetch("../json/certificates.json").then(data => data.json()).then(data => {criarCertificados(data)});
});

const filtersArray = [];
const technologies = document.querySelectorAll(".technologies");
let imgs = document.querySelectorAll(".img-certificado");


function filtrar(skill) {
    if(filtersArray.includes(skill)){
        const index = filtersArray.indexOf(skill);
        filtersArray.splice(index,1);
    } 
    else filtersArray.push(skill);
    
    fetch("../json/certificates.json").
    then(data => data.json())
    .then(certificates => {
        const newCertificates = certificates.filter(certificate => 
            filtersArray.every(element => certificate.skills.includes(element))
        );
        esconderCertificados(newCertificates);
    });
    imgs = document.querySelectorAll(".img-certificado");
}

function esconderCertificados(certificados) {
    const section = document.querySelectorAll('.certificado');
    section.forEach(img => {
        img.classList.add('hide');
        certificados.forEach(certificado => {
            if(img.firstChild.getAttribute('alt').match(certificado.title)) {
                img.classList.toggle('hide');
                return;
            };
        });
    });
}

function criarCertificados(certificados) {
    const section = document.querySelector('.certificados');
    certificados.forEach(certificado => {
        const div = document.createElement('div');
        div.className = 'certificado';
        section.appendChild(div);
        const img = document.createElement('img');
        img.className = 'img-certificado';
        img.src=certificado.image;
        img.alt=certificado.title;
        img.addEventListener("click", (e) => mostrarImg(e));
        div.appendChild(img);
    });
    imgs = document.querySelectorAll(".img-certificado");
    console.log(imgs);

}
  
technologies.forEach(btn => btn.addEventListener("click", (e) => {
    btn.classList.toggle("selected");
}))

function mostrarImg(e) {
    // imgs.forEach(img => img.addEventListener("click", (e) => {
    //     console.log(e.target);
    //     console.log(img);
        console.log("foi");
        console.log(e.target)
        
        const div = document.createElement('div');
        console.log(div);

        document.body.appendChild(div);
        div.className="modal";
        const bigImg = document.createElement('img');
        div.appendChild(bigImg);
        bigImg.className="modal-content";
        bigImg.src=e.target.src;
        
        window.addEventListener("click", (a)=>{  
            if(a.target==div || a.target==bigImg)  {
            console.log(document.querySelector(".modal"));
            console.log(a.target);
            console.log(bigImg);
            if(a.target!=bigImg) div.remove();
            if(a.target!=bigImg) console.log("é diferente");
        }});
    // }))
}
    