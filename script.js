/* ========= RESET ========= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:"Manrope",sans-serif;
    background:#f5f5f2;
    color:#222;
    line-height:1.7;
}

/* ========= HEADER ========= */

header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:22px 9%;
    background:rgba(245,245,242,.85);
    backdrop-filter:blur(12px);
    border-bottom:1px solid rgba(0,0,0,.05);
    z-index:1000;
}

.logo{
    font-family:"Cormorant Garamond",serif;
    font-size:2rem;
    font-weight:700;
    letter-spacing:1px;
}

nav{
    display:flex;
    gap:35px;
}

nav a{
    text-decoration:none;
    color:#555;
    transition:.3s;
    font-weight:500;
}

nav a:hover{
    color:#74846a;
}

/* ========= HERO ========= */

.hero{
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding:120px 20px 80px;
}

.hero h1{
    font-family:"Cormorant Garamond",serif;
    font-size:5.5rem;
    line-height:1;
    margin-bottom:25px;
}

.hero p{
    max-width:700px;
    margin:auto;
    color:#666;
    font-size:1.1rem;
}

.hero button{
    margin-top:45px;
    border:none;
    background:#74846a;
    color:white;
    padding:16px 40px;
    border-radius:999px;
    cursor:pointer;
    transition:.3s;
    font-size:15px;
}

.hero button:hover{
    transform:translateY(-5px);
    box-shadow:0 12px 30px rgba(0,0,0,.12);
}

/* ========= SEÇÕES ========= */

section{
    padding:110px 9%;
}

.titulo{
    font-family:"Cormorant Garamond",serif;
    font-size:3.2rem;
    margin-bottom:35px;
}

/* ========= SOBRE ========= */

.sobre{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:60px;
    align-items:center;
}

.caixa{
    height:420px;
    border-radius:25px;
    background:#ddd;
    overflow:hidden;
}

.caixa img{
    width:100%;
    height:100%;
    object-fit:cover;
}

/* ========= GALERIA ========= */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.card{
    background:white;
    border-radius:22px;
    overflow:hidden;
    transition:.4s;
    box-shadow:0 20px 40px rgba(0,0,0,.06);
}

.card:hover{
    transform:translateY(-10px);
}

.card img{
    width:100%;
    height:270px;
    object-fit:cover;
    transition:.4s;
}

.card:hover img{
    transform:scale(1.05);
}

.card h3{
    margin:22px 22px 10px;
    font-size:1.3rem;
}

.card p{
    margin:0 22px 25px;
    color:#666;
}

/* ========= BLOG ========= */

.blog{
    display:flex;
    flex-direction:column;
    gap:25px;
}

.post{
    background:white;
    border-radius:18px;
    padding:30px;
    transition:.3s;
    box-shadow:0 12px 30px rgba(0,0,0,.05);
}

.post:hover{
    transform:translateX(10px);
}

.post h3{
    margin-bottom:10px;
}

/* ========= FOOTER ========= */

footer{
    margin-top:70px;
    padding:60px 20px;
    background:#ebe8e1;
    text-align:center;
}

footer h2{
    font-family:"Cormorant Garamond",serif;
    font-size:2.3rem;
    margin-bottom:15px;
}

/* ========= ANIMAÇÃO ========= */

.fade{
    opacity:0;
    transform:translateY(50px);
    transition:1s;
}

.fade.show{
    opacity:1;
    transform:translateY(0);
}

/* ========= RESPONSIVO ========= */

@media(max-width:900px){

    header{
        padding:18px 8%;
    }

    nav{
        display:none;
    }

    .hero h1{
        font-size:3.7rem;
    }

    .sobre{
        grid-template-columns:1fr;
    }

    .caixa{
        height:300px;
    }

    .titulo{
        font-size:2.5rem;
    }

}
