// ===============================
// Pesquisa de posts
// ===============================

const pesquisa = document.querySelector("#barraPesquisa");

const posts = document.querySelectorAll("article");


pesquisa.addEventListener("input", () => {

    const texto = pesquisa.value.toLowerCase();


    posts.forEach((post) => {

        const conteudo = post.textContent.toLowerCase();


        if(conteudo.includes(texto)){

            post.style.display = "block";

        }else{

            post.style.display = "none";

        }

    });

});




// ===============================
// Animação dos posts aparecendo
// ===============================

const elementos = document.querySelectorAll(
    "article, .esquerda, .direita"
);


const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("aparecer");

        }

    });


}, {
    threshold:0.15
});


elementos.forEach((elemento)=>{

    observador.observe(elemento);

});




// ===============================
// Abrir desenhos maiores
// ===============================

const imagens = document.querySelectorAll("article img");


imagens.forEach((imagem)=>{


    imagem.addEventListener("click",()=>{

        imagem.classList.toggle("grande");

    });


});




// ===============================
// Ano automático no rodapé
// ===============================

const rodape = document.querySelector("footer p");


if(rodape){

    rodape.innerHTML =
    `feito por Seu Nome ✎ ${new Date().getFullYear()}`;

}
