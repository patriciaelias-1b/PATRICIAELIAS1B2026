// ===============================
// MENU
// ===============================

function abrirMenu(){

    const menu = document.getElementById("menu");

    if(menu.style.display === "block"){

        menu.style.display = "none";

    }else{

        menu.style.display = "block";

    }

}





// ===============================
// TÓPICOS
// ===============================


function abrirJanela(tipo){

    const janela = document.getElementById("janela");
    const titulo = document.getElementById("tituloJanela");
    const texto = document.getElementById("textoJanela");


    janela.style.display = "block";


    if(tipo === "desenhos"){

        titulo.innerHTML = "Desenhos";

        texto.innerHTML =
        "Aqui ficam meus desenhos, ilustrações e rascunhos.";

    }


    else if(tipo === "estudos"){

        titulo.innerHTML = "Estudos";

        texto.innerHTML =
        "Estudos de anatomia, cores, perspectiva e técnicas.";

    }


    else if(tipo === "blog"){

        titulo.innerHTML = "Blog";

        texto.innerHTML =
        "Textos sobre meu processo artístico e minha evolução.";

    }


    else if(tipo === "materiais"){

        titulo.innerHTML = "Materiais";

        texto.innerHTML =
        "Lápis, canetas, sketchbook e ferramentas digitais.";

    }


    else if(tipo === "redes"){

        titulo.innerHTML = "Redes sociais";

        texto.innerHTML =
        `
        <a href="https://instagram.com" target="_blank">
        Instagram
        </a>
        <br><br>
        <a href="https://github.com" target="_blank">
        GitHub
        </a>
        `;

    }

}





function fecharJanela(){

    document.getElementById("janela").style.display="none";

}







// ===============================
// PERFIL
// ===============================


function abrirPerfil(){

    document.getElementById("perfil").style.display="block";

}





function criarConta(){

    let nome =
    document.getElementById("nomeInput").value.trim();



    if(nome === ""){

        nome = "Visitante";

    }



    localStorage.setItem(
        "usuario",
        nome
    );



    let contas =
    Number(localStorage.getItem("contas")) || 0;



    if(!localStorage.getItem("usuarioCriado")){

        contas++;

        localStorage.setItem(
            "contas",
            contas
        );


        localStorage.setItem(
            "usuarioCriado",
            "sim"
        );

    }



    atualizarPerfil();



    document.getElementById("perfil").style.display="none";

}







function atualizarPerfil(){


    let usuario =
    localStorage.getItem("usuario")
    || "Visitante";



    let contas =
    localStorage.getItem("contas")
    || 0;



    document.getElementById("nomePerfil")
    .innerHTML = usuario;



    document.getElementById("contas")
    .innerHTML = contas;


}


atualizarPerfil();







// ===============================
// COMENTÁRIOS
// ===============================


let comentarios =
JSON.parse(localStorage.getItem("comentarios"))
|| [];




function adicionarComentario(){


    let texto =
    document.getElementById("textoComentario").value;



    if(texto.trim()===""){

        return;

    }



    let usuario =
    localStorage.getItem("usuario")
    || "Visitante";



    comentarios.push({

        id: Date.now(),

        nome: usuario,

        texto: texto


    });



    salvarComentarios();



    document.getElementById("textoComentario").value="";


    mostrarComentarios();

}





function salvarComentarios(){

    localStorage.setItem(

        "comentarios",

        JSON.stringify(comentarios)

    );

}







function mostrarComentarios(){


    const area =
    document.getElementById("listaComentarios");


    area.innerHTML="";



    comentarios.forEach((comentario)=>{



        let div =
        document.createElement("div");



        div.className="comentario";



        let usuarioAtual =
        localStorage.getItem("usuario");



        div.innerHTML =

        `

        <b>${comentario.nome}</b>

        <p>${comentario.texto}</p>


        <button onclick="responder('${comentario.nome}')">

        💬

        </button>


        <button onclick="bloquear('${comentario.nome}', ${comentario.id})">

        🔒

        </button>


        <button class="reportar"
        onclick="reportar(${comentario.id})">

        🚩

        </button>


        ${
        comentario.nome === usuarioAtual ?

        `<button onclick="apagarComentario(${comentario.id})">
        apagar
        </button>`

        :

        ""

        }


        `;



        area.appendChild(div);



    });



}



mostrarComentarios();







// ===============================
// RESPOSTA
// ===============================


function responder(nome){


    document.getElementById("textoComentario").value =
    "@" + nome + " ";


    document.getElementById("textoComentario").focus();


}







// ===============================
// APAGAR PRÓPRIO COMENTÁRIO
// ===============================


function apagarComentario(id){


    comentarios =
    comentarios.filter(

        comentario => comentario.id !== id

    );



    salvarComentarios();

    mostrarComentarios();


}







// ===============================
// BLOQUEAR
// ===============================


function bloquear(nome,id){


    alert(
        `Você bloqueou "${nome}"`
    );


    comentarios =
    comentarios.filter(

        comentario => comentario.id !== id

    );


    salvarComentarios();

    mostrarComentarios();


}








// ===============================
// REPORTAR
// ===============================


function reportar(id){


    alert(
        "Usuário reportado para host"
    );


    comentarios =
    comentarios.filter(

        comentario => comentario.id !== id

    );


    salvarComentarios();

    mostrarComentarios();


}







// ===============================
// MODO NOTURNO
// ===============================


function modoNoturno(){


    document.body.classList.toggle("dark");



    localStorage.setItem(

        "modo",

        document.body.classList.contains("dark")

    );


}





if(localStorage.getItem("modo")==="true"){

    document.body.classList.add("dark");

}







// ===============================
// SAIR
// ===============================


function sair(){

    window.location.href =
    "https://www.google.com";

}
