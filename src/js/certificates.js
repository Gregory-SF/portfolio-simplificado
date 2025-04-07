function pegarTexto() {
    const botao= document.querySelector('.btn-lang');
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    botaoFecharModal.addEventListener("click", (e)=>{
        console.log(e.target);
        modal.classList.add("hidden");
    });
    localStorage.setItem("tema", novoTema);
    document.body.setAttribute('data-theme',novoTema);

    const btnAlterarTema = document.getElementById("btnAlterarTema");
    btnAlterarTema.textContent = btnAlterarTema.textContent == 'Light' ? 'Dark' : 'Light';
}