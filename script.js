function alternarMenu() {
  let menu = document.getElementById("menu-principal");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function alternarTexto(){
    let texto = document.getElementById("texto-extra");
    let botao = document.getElementById("botao-ler-mais")

    if(texto.style.display === "block") {
        texto.style.display = "none";
        botao.textContent = "Ler mais";
    } else{
        texto.style.display = "block";
        botao.textContent = "Ler menos";
    }
}

function filtrarProjetos(categoria) {
    const projetos = document.getElementsByClassName("projeto");

    for (let i = 0; i < projetos.length; i++) {
        const categoriaDoCard = projetos[i].getAttribute("data-categoria");

        if (categoria === "todos" || categoriaDoCard === categoria) {
            projetos[i].style.display = "";
        } else {
            projetos[i].style.display = "none";
        }
    }
}