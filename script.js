// =============================
// Animação de entrada das seções
// =============================

const secoes = document.querySelectorAll("section");

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if(entrada.isIntersecting){

            entrada.target.classList.add("aparecer");

        }

    });

}, {
    threshold: 0.15
});


secoes.forEach((secao)=>{
    observer.observe(secao);
});



// =============================
// Botão com mensagem de artista
// =============================

const botao = document.querySelector("button");


if(botao){

botao.addEventListener("click",()=>{

    console.log("Bem-vindo ao meu sketchbook ✎");

});

}



// =============================
// Menu suave
// =============================

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",(evento)=>{

        evento.preventDefault();

        const destino = document.querySelector(
            link.getAttribute("href")
        );

        destino.scrollIntoView({
            behavior:"smooth"
        });

    });

});



// =============================
// Ano automático no rodapé
// =============================

const ano = document.querySelector("footer p");


if(ano){

ano.innerHTML =
`Feito por mim ✦ ${new Date().getFullYear()}`;

}
