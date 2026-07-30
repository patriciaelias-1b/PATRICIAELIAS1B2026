// ===============================
// MENU SUPERIOR
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
// CRIAR PERFIL SIMBÓLICO
// ===============================


function abrirPerfil(){

    document.getElementById("perfil").style.display="block";

}




function criarConta(){

    let nome = document.getElementById("nomeInput").value;


    if(nome.trim() === ""){

        nome = "Visitante";

    }



    localStorage.setItem("nomeUsuario", nome);



    let contas =
    Number(localStorage.getItem("contas")) || 0;


    contas++;


    localStorage.setItem("contas", contas);



    atualizarPerfil();


    document.getElementById("perfil").style.display="none";

}




function atualizarPerfil(){


    let nome =
    localStorage.getItem("nomeUsuario")
    || "Visitante";


    let contas =
    localStorage.getItem("contas")
    || 0;



    document.getElementById("nomePerfil")
    .innerHTML = nome;



    document.getElementById("contas")
    .innerHTML = contas;


}



atualizarPerfil();





// ===============================
// MODO NOTURNO
// ===============================


function modoNoturno(){

    document.body.classList.toggle("dark");


}






// ===============================
// SAIR
// ===============================


function sair(){

    window.location.href =
    "https://www.google.com";

}






// ===============================
// MENU DOS COMENTÁRIOS
// ===============================


function abrirOpcoes(botao){


    let opcoes =
    botao.parentElement.querySelector(".opcoes");



    if(opcoes.style.display === "block"){

        opcoes.style.display="none";

    }else{

        opcoes.style.display="block";

    }


}






// ===============================
// FECHAR JANELAS CLICANDO FORA
// ===============================


window.addEventListener("click",(evento)=>{


    let perfil =
    document.getElementById("perfil");



    if(evento.target === perfil){

        perfil.style.display="none";

    }



});
