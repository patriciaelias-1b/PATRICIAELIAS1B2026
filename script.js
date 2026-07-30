const frases = [

"Todo grande artista começou desenhando um simples círculo. ✿",

"Seu estilo nasce da prática diária. ♡",

"Não tenha medo de errar, os melhores desenhos surgem dos rascunhos.",

"Cada página do sketchbook conta uma parte da sua evolução.",
    
"A criatividade cresce quando você desenha todos os dias."

];

const botao = document.getElementById("mensagem");

const texto = document.getElementById("texto");

botao.addEventListener("click", ()=>{

const numero = Math.floor(Math.random()*frases.length);

texto.textContent = frases[numero];

}); 
