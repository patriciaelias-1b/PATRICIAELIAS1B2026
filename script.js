// ==========================
// JANELAS DO MENU
// ==========================


const janela = document.getElementById("janela");
const titulo = document.getElementById("tituloJanela");
const texto = document.getElementById("textoJanela");



function abrirJanela(tipo){


    janela.style.display = "block";


    if(tipo === "desenhos"){

        titulo.innerHTML = "Desenhos";

        texto.innerHTML =
        "Aqui ficam minhas ilustrações, rascunhos e desenhos finalizados.";

    }



    if(tipo === "blog"){

        titulo.innerHTML = "Blog";

        texto.innerHTML =
        "Posts sobre meu processo de desenho e coisas que aprendi.";

    }



    if(tipo === "materiais"){

        titulo.innerHTML = "Materiais";

        texto.innerHTML =
        "estou disponibilizando materiais de arte para vcss<3";

    }



    if(tipo === "redes"){

        titulo.innerHTML = "Redes sociais";

        texto.innerHTML =
        `
        <a href="https://instagram.com/" target="_blank">
        Instagram
        </a>
        <br><br>

        <a href="https://github.com/" target="_blank">
        GitHub
        </a>
        `;

    }


}





// ==========================
// FECHAR JANELA
// ==========================


function fecharJanela(){

    janela.style.display = "none";

}





// ==========================
// FECHAR CLICANDO FORA
// ==========================


window.addEventListener("click",(evento)=>{


    if(evento.target === janela){

        janela.style.display="none";

    }


});





// ==========================
// EFEITO DE DATA AUTOMÁTICA
// ==========================


const data = document.querySelector("footer p");


if(data){

    data.innerHTML =
    `© ${new Date().getFullYear()} - Sketchbook.log`;

}
