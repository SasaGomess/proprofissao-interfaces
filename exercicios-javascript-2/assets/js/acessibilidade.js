let element = document.getElementById('header');
let fundo = document.getElementById('fundo');
let buttons = document.querySelectorAll('input');
let image = document.querySelector('#myImage');
 

function modo_escuro() {

    fundo.style.backgroundColor = "black";
    fundo.style.color = "#c2c2c2";
    image.src="/assets/imgs/paisagem.jpg";

    buttons.forEach(btn => {
        btn.style.color = "#000";
        btn.style.backgroundColor ="#fff";
    });

    element.innerHTML = "Modo escuro";
}
function modo_daltonico() {

    fundo.style.backgroundColor = "rgb(35, 11, 124)";
    fundo.style.color = "lime";
    image.src="/assets/imgs/daltonismo.jpg";

    element.innerHTML = "Modo Daltonico";
}

function modo_normal() {

    fundo.style.backgroundColor = "#fff";
    fundo.style.color = "black";
    fundo.style.fontSize = '18px';
    image.src="/assets/imgs/paisagem.jpg";

    buttons.forEach(btn => {
        btn.style.color = "#fff";
        btn.style.backgroundColor ="#000";
    });

    element.innerHTML = "Testando mudança de cor de fundo Body, a cor da fonte e a imagem na página";
}

function modo_baixa_visao() {

    fundo.style.backgroundColor = "#fff";
    fundo.style.color = "black";
    fundo.style.fontSize = '30px';
    image.src="/assets/imgs/paisagem.jpg";

    buttons.forEach(btn => {
        btn.style.color = "#fff";
        btn.style.backgroundColor ="#000";
    });

    element.innerHTML = "Modo baixa visao";
}