// ==============================
// MENU
// ==============================

const menu = document.getElementById("menu");

function abrirMenu(){

    if(menu.classList.contains("mostrar")){

        menu.classList.remove("mostrar");

    }else{

        menu.classList.add("mostrar");

    }

}



// ==============================
// POPUPS DOS TÓPICOS
// ==============================

const janela = document.getElementById("janela");
const tituloJanela = document.getElementById("tituloJanela");
const textoJanela = document.getElementById("textoJanela");

function abrirJanela(tipo){

    janela.style.display = "block";


    if(tipo === "desenhos"){

        tituloJanela.innerHTML = "Desenhos";

        textoJanela.innerHTML = `
        <p>Canais que eu me inspiro:</p>

        <a href="https://www.youtube.com/@v1ck_arts" target="_blank">
        V1ck Arts
        </a>
        <br>

        <a href="https://www.youtube.com/@imBecaoficial" target="_blank">
        Beca
        </a>
        <br>

        <a href="https://www.youtube.com/@jhennykeller" target="_blank">
        Jhenny Keller
        </a>
        `;

    }

    else if(tipo === "personagens"){

        tituloJanela.innerHTML = "Personagens";

        textoJanela.innerHTML =
        "Meus personagens originais e conceitos.";

    }

    else if(tipo === "redes"){

        tituloJanela.innerHTML = "Redes Sociais";

        textoJanela.innerHTML = `
        <p>Clique para visitar:</p>

        <a href="https://instagram.com" target="_blank">
        Instagram
        </a>
        `;

    }

    else if(tipo === "mais"){

        tituloJanela.innerHTML = "Mais+";

        textoJanela.innerHTML =
        "Projeto de Educação Digital.";

    }

}


function fecharJanela(){

    janela.style.display = "none";

}



// ==============================
// PERFIL
// ==============================

const perfil = document.getElementById("perfil");

function abrirPerfil(){

    perfil.style.display = "block";

}

function fecharPerfil(){

    perfil.style.display = "none";

}



// ==============================
// CONTA SIMBÓLICA
// ==============================

let total = Number(localStorage.getItem("contas")) || 0;

const numeroContas = document.getElementById("numeroContas");

numeroContas.innerHTML = total;


const nomeSalvo = localStorage.getItem("nome");


if(nomeSalvo){

    document.getElementById("nomeCard").innerHTML = nomeSalvo;

    document.getElementById("nomeTopo").innerHTML = nomeSalvo;

}


function criarConta(){

    const nome = document.getElementById("nome").value.trim();


    if(nome === ""){

        alert("Digite um nome.");

        return;

    }


    if(!localStorage.getItem("nome")){

        total++;

        localStorage.setItem("contas", total);

    }


    localStorage.setItem("nome", nome);


    document.getElementById("nomeCard").innerHTML = nome;

    document.getElementById("nomeTopo").innerHTML = nome;

    numeroContas.innerHTML = total;


    perfil.style.display = "none";

}



// ==============================
// PESQUISA
// ==============================

const pesquisa = document.getElementById("pesquisa");

const blog = document.querySelector(".blog");


pesquisa.addEventListener("keyup",()=>{

    const texto = pesquisa.value.toLowerCase();


    if(blog.textContent.toLowerCase().includes(texto)){

        blog.style.display = "block";

    }else{

        blog.style.display = "none";

    }

});



// ==============================
// MODO ESCURO
// ==============================

function modoNoturno(){

    document.body.classList.toggle("dark");

}



// ==============================
// SAIR
// ==============================

function sair(){

    window.location.href = "https://www.google.com";

}



// ==============================
// FECHAR POPUPS
// ==============================

window.addEventListener("click",(event)=>{


    if(event.target === janela){

        fecharJanela();

    }


    if(event.target === perfil){

        fecharPerfil();

    }


});



// ==============================
// ANO AUTOMÁTICO
// ==============================

document.getElementById("ano").textContent =
new Date().getFullYear();
