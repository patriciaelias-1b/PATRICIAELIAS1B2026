// ==========================
// JANELAS DOS TÓPICOS
// ==========================

const janela = document.getElementById("janela");
const titulo = document.getElementById("tituloJanela");
const texto = document.getElementById("textoJanela");


function abrirJanela(tipo){

    janela.style.display = "block";


    if(tipo === "desenhos"){

        titulo.innerHTML = "Desenhos";

        texto.innerHTML =
        `
        Aqui ficam meus desenhos,
        ilustrações e rascunhos.
        <br><br>
        Um lugar para guardar minha evolução.
        `;

    }



    else if(tipo === "estudos"){

        titulo.innerHTML = "Estudos";

        texto.innerHTML =
        `
        Estudos de anatomia,
        perspectiva, cores e técnicas
        que estou aprendendo.
        `;

    }



    else if(tipo === "blog"){

        titulo.innerHTML = "Blog";

        texto.innerHTML =
        `
        Aqui escrevo sobre meu processo,
        ideias, desenhos novos e coisas
        que estou aprendendo.
        `;

    }



    else if(tipo === "materiais"){

        titulo.innerHTML = "Materiais";

        texto.innerHTML =
        `
        Meus materiais:

        <br><br>

        ✦ lápis<br>
        ✦ sketchbook<br>
        ✦ canetas<br>
        ✦ ferramentas digitais
        `;

    }



    else if(tipo === "redes"){


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

    janela.style.display="none";

}





// ==========================
// FECHAR CLICANDO FORA
// ==========================


window.addEventListener("click",(evento)=>{


    if(evento.target === janela){

        fecharJanela();

    }


});





// ==========================
// ANO AUTOMÁTICO
// ==========================


const rodape = document.querySelector("footer p");


if(rodape){

    rodape.innerHTML =
    `feito por Seu Nome ✎ ${new Date().getFullYear()}`;

}
