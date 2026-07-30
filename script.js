// ===============================
// MENU
// ===============================

function abrirMenu(){

    let menu = document.getElementById("menu");

    if(menu.style.display === "block"){

        menu.style.display = "none";

    }else{

        menu.style.display = "block";

    }

}






// ===============================
// TÓPICOS
// ===============================

function abrirAba(nome){


    let aba = document.getElementById("janelaAba");


    let textos = {


        desenhos:`

        <h2>Desenhos</h2>

        <p>
        Meus desenhos, ilustrações
        e rascunhos.
        </p>

        `,


        estudos:`

        <h2>Estudos</h2>

        <p>
        Exercícios de anatomia,
        perspectiva e técnicas.
        </p>

        `,


        blog:`

        <h2>Blog</h2>

        <p>
        Textos sobre meu processo
        artístico.
        </p>

        `,


        materiais:`

        <h2>Materiais</h2>

        <p>
        Lápis, papel, programas
        e ferramentas.
        </p>

        `,


        sobre:`

        <h2>Sobre mim</h2>

        <p>
        Um espaço para compartilhar
        minha evolução na arte.
        </p>

        `


    };


    aba.innerHTML = textos[nome];


}







// ===============================
// PERFIL
// ===============================


function abrirPerfil(){

    document.getElementById("janelaPerfil")
    .style.display="flex";


    atualizarPerfil();

}




function fecharPerfil(){

    document.getElementById("janelaPerfil")
    .style.display="none";

}






function criarUsuario(){


    if(localStorage.getItem("usuario")){

        alert(
        "Você já possui uma conta."
        );

        return;

    }



    let nome =
    document.getElementById("novoNome")
    .value.trim();



    let status =
    document.getElementById("novoStatus")
    .value.trim();



    if(nome===""){

        nome="Visitante";

    }



    if(status===""){

        status="Criando arte ✎";

    }



    localStorage.setItem(
        "usuario",
        nome
    );


    localStorage.setItem(
        "status",
        status
    );



    let contas =
    Number(localStorage.getItem("contas"))
    || 0;



    contas++;


    localStorage.setItem(
        "contas",
        contas
    );



    atualizarPerfil();


}








function editarUsuario(){


    let nome =
    document.getElementById("editarNome")
    .value.trim();



    let status =
    document.getElementById("editarStatus")
    .value.trim();



    if(nome){

        localStorage.setItem(
            "usuario",
            nome
        );

    }



    if(status){

        localStorage.setItem(
            "status",
            status
        );

    }



    atualizarPerfil();


}







function atualizarPerfil(){


    let usuario =
    localStorage.getItem("usuario")
    ||
    "Visitante";



    let status =
    localStorage.getItem("status")
    ||
    "Criando arte ✎";



    document.getElementById("nomeUsuario")
    .innerHTML =
    usuario;



    document.getElementById("statusUsuario")
    .innerHTML =
    status;



    document.getElementById("contador")
    .innerHTML =
    localStorage.getItem("contas")
    ||
    0;






    if(localStorage.getItem("usuario")){


        document.getElementById("loginArea")
        .style.display="none";


        document.getElementById("editarArea")
        .style.display="block";



        document.getElementById("editarNome")
        .value =
        usuario;



        document.getElementById("editarStatus")
        .value =
        status;



    }else{


        document.getElementById("loginArea")
        .style.display="block";


        document.getElementById("editarArea")
        .style.display="none";


    }


}








function deletarConta(){


    let confirmar =
    confirm(
    "Deseja apagar sua conta?"
    );



    if(confirmar){


        localStorage.removeItem("usuario");

        localStorage.removeItem("status");



        atualizarPerfil();



        fecharPerfil();


    }


}








// ===============================
// COMENTÁRIOS
// ===============================


let comentarios =
JSON.parse(
localStorage.getItem("comentarios")
)
||
[];





function enviarComentario(){



    let texto =
    document.getElementById("textoComentario")
    .value.trim();



    if(texto===""){

        return;

    }



    let nome =
    localStorage.getItem("usuario")
    ||
    "Visitante";



    comentarios.push({


        id:Date.now(),

        nome:nome,

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



        div.innerHTML=`

        <b>${c.nome}</b>

        <p>${c.texto}</p>


        <button onclick="responder('${c.nome}')">
        responder
        </button>


        <button onclick="reportar(${c.id})">
        🚩
        </button>



        ${
        c.nome === localStorage.getItem("usuario")

        ?

        `<button onclick="apagarComentario(${c.id})">
        apagar
        </button>`

        :

        ""

        }


        `;



        area.appendChild(div);



    });


}





function apagarComentario(id){


    comentarios =
    comentarios.filter(
    c=>c.id!==id
    );


    salvarComentarios();


    mostrarComentarios();


}






function responder(nome){


    document.getElementById("textoComentario")
    .value =
    "@"+nome+" ";


}






function reportar(id){


    alert(
    "Usuário reportado para host"
    );


    apagarComentario(id);


}







// ===============================
// TEMA
// ===============================


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






// ===============================
// SAIR
// ===============================


function sair(){

    window.location.href =
    "https://www.google.com";

}





atualizarPerfil();

mostrarComentarios();
