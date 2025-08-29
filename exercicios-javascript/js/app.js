function show_bmw32i() {
    document.getElementById('bmw32i').style.visibility="visible";
    document.getElementById('bmw36').style.visibility="hidden";
    document.getElementById('lowrider').style.visibility="hidden";
    //document: documentar 
    //style: para acessar o estilo (css)
    //visibility: vai até o atributo chamado visibility e seta como visível
}
// boas práticas colocar hidden nos outros
function show_lowrider() {
    document.getElementById('bmw32i').style.visibility="hidden";
    document.getElementById('bmw36').style.visibility="hidden";
    document.getElementById('lowrider').style.visibility="visible";
}
function show_bmw36() {
    document.getElementById('bmw32i').style.visibility="hidden";
    document.getElementById('bmw36').style.visibility="visible";
    document.getElementById('lowrider').style.visibility="hidden";
}
function hide_all() {
    document.getElementById('bmw36').style.visibility="hidden";
    document.getElementById('bmw32i').style.visibility="hidden";
    document.getElementById('lowrider').style.visibility="hidden";
}
