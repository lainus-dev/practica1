let dato1;
let dato2;
let resultado;

function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function operacionUsuario(){
    let numeroDeUsuario = document.getElementById('primerValor').value;
    return;
}

asignarTextoElemento('h1','PRACTICA 1');
asignarTextoElemento('h2', 'Primer dato');


