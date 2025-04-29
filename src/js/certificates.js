document.addEventListener("DOMContentLoaded", async (event) =>{
    fetch("../json/certificates.json").then(data => data.json()).then(data => {criarCertificados(data)});
});

function filtra(skill) {
    fetch("../json/certificates.json").
    then(data => data.json())
    .then(certificates => {
        const newCertificates = certificates.filter(certificate => 
            certificate.skills.includes(skill)
        );
        console.log(newCertificates);
        
        esconderCertificados(newCertificates);
    });
}

function esconderCertificados(certificados) {
    const section = document.querySelectorAll('.certificado');
    section.forEach(img => {
        console.log(img.firstChild)
        img.classList.toggle('hide');
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
        div.appendChild(img);
    });
    
}