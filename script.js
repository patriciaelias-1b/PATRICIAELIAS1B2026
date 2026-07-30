// ==========================
// MENU
// ==========================

function abrirMenu(){

    const menu = document.getElementById("menu");

    if(menu.style.display === "block"){

        menu.style.display = "none";

    }else{

        menu.style.display = "block";

    }

}





// ==========================
// TÓPICOS
// ==========================

function abrirAba(aba){

    const janela =
    document.getElementById("janelaAba");


    const conteudos = {

        desenhos:
        `
        <h2>Desenhos</h2>
        <p>
        Aqui ficam minhas artes,
        ilustrações e rascunhos.
        </p>
        `,


        estudos:
        `
        <h2>Estudos</h2>
        <p>
        Anatomia, perspectiva,
        cores e exercícios.
        </p>
        `,


        blog:
        `
        <h2>Blog</h2>
        <p>
        Meus pensamentos sobre
        arte e criação.
        </p>
        `,


        materiais:
        `
        <h2>Materiais</h2>
        <p>
        Lápis, papel, mesa digitalizadora
        e programas usados.
        </p>
        `,


        sobre:
        `
        <h2>Sobre mim</h2>
        <p>
        Sou uma pessoa que gosta de
        desenhar e aprender arte.
        </p>
        `

    };


    janela.innerHTML =
    conteudos[aba];

}







// ==========================
// PESQUISA
// ==========================

function pesquisar(){

    let valor =
    document.getElementById("pesquisa")
    .value
    .toLowerCase();



    let posts =
    document.querySelectorAll(".post");



    posts.forEach(post=>{


        let texto =
        post.innerText.toLowerCase();



        if(texto.includes(valor)){

            post.style.display="block";

        }else{

            post.style.display="none";

        }


    });


}







// ==========================
// PERFIL
// ==========================


function abrirPerfil(){

    document.getElementById("janelaPerfil")
    .style.display="flex";

}




function criarUsuario(){


    let nome =
    document.getElementById("novoNome")
    .value
    .trim();



    if(nome===""){

        nome="Visitante";

    }



    localStorage.setItem(
        "nome",
        nome
    );



    let contas =
    Number(localStorage.getItem("contas"))
    || 0;



    if(!localStorage.getItem("criado")){

        contas++;

        localStorage.setItem(
            "contas",
            contas
        );


        localStorage.setItem(
            "criado",
            "true"
        );

    }



    atualizarPerfil();



    document.getElementById("janelaPerfil")
    .style.display="none";

}




function atualizarPerfil(){


    document.getElementById("nomeUsuario")
    .innerHTML =
    localStorage.getItem("nome")
    || "Visitante";



    document.getElementById("contador")
    .innerHTML =
    localStorage.getItem("contas")
    || 0;


}


atualizarPerfil();








// ==========================
// COMENTÁRIOS
// ==========================


let comentarios =
JSON.parse(
localStorage.getItem("comentarios")
)
|| [];




function enviarComentario(){


    let texto =
    document.getElementById("textoComentario")
    .value
    .trim();



    if(texto==="") return;



    comentarios.push({

        id:Date.now(),

        nome:
        localStorage.getItem("nome")
        ||
        "Visitante",

        texto:texto

    });



    salvarComentarios();



    document.getElementById("textoComentario")
    .value="";



    mostrarComentarios();


}





function salvarComentarios(){

    localStorage.setItem(
        "comentarios",
        JSON.stringify(comentarios)
    );

}




function mostrarComentarios(){


    let area =
    document.getElementById("comentarios");


    area.innerHTML="";



    comentarios.forEach(c=>{


        let div =
        document.createElement("div");



        div.className="comentario";



        let dono =
        localStorage.getItem("nome");



        div.innerHTML =

        `

        <b>${c.nome}</b>

        <p>${c.texto}</p>


        <button onclick="responder('${c.nome}')">
        💬
        </button>


        <button onclick="bloquear(${c.id},'${c.nome}')">
        🔒
        </button>


        <button onclick="reportar(${c.id})">
        🚩
        </button>


        ${
        c.nome===dono ?

        `<button onclick="apagar(${c.id})">
        apagar
        </button>`

        :""

        }

        `;



        area.appendChild(div);


    });



}



mostrarComentarios();







function responder(nome){

    document.getElementById("textoComentario")
    .value =
    "@"+nome+" ";


}







function apagar(id){


    comentarios =
    comentarios.filter(
        c=>c.id!==id
    );


    salvarComentarios();

    mostrarComentarios();


}





function bloquear(id,nome){


    alert(
    `Você bloqueou "${nome}"`
    );


    apagar(id);


}




function reportar(id){


    alert(
    "Usuário reportado para host"
    );


    apagar(id);


}







// ==========================
// TEMA
// ==========================


function alternarTema(){

    document.body
    .classList
    .toggle("escuro");



    localStorage.setItem(

        "tema",

        document.body.classList
        .contains("escuro")

    );

}




if(localStorage.getItem("tema")==="true"){

    document.body.classList.add("escuro");

}








// ==========================
// SAIR
// ==========================


function sair(){

    window.location.href=
    "https://www.google.com";

}
