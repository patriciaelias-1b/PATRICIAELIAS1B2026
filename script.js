// ============================
// Animação ao aparecer na tela
// ============================

const elementos = document.querySelectorAll(
    "article, .esquerda, .direita"
);


const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("visivel");

        }

    });


}, {
    threshold: 0.15
});


elementos.forEach((elemento)=>{

    observador.observe(elemento);

});




// ============================
// Ano automático no rodapé
// ============================

const footer = document.querySelector("footer p");


if(footer){

    footer.innerHTML =
    `feito por [seu nome] ✎ ${new Date().getFullYear()}`;

}




// ============================
// Abrir imagens ao clicar
// ============================

const imagens = document.querySelectorAll("article img");


imagens.forEach((imagem)=>{


    imagem.addEventListener("click",()=>{


        imagem.classList.toggle("ampliada");


    });


});
