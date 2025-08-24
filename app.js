let dato1;
let dato2;
let resultado;

function asignarTextoElemento(idE, texto){
let idElemento = document.getElementsByName(idE);
idElemento.innerHTML = texto;
for (const el of idElemento){
    el.textContent = texto;
}
}

function operacionUsuario(){
    let primerNumeroDeUsuario = document.getElementById('primerValor').value;
    let segundoNumeroDeUsuario = document.getElementById('segundoValor').value;
    alert(primerNumeroDeUsuario + segundoNumeroDeUsuario);
    return;
}

asignarTextoElemento('sub','PRACTICA 1');
//asignarTextoElemento('subTitulo1', 'Primer dato');
//asignarTextoElemento('subTitulo2', 'Segundo dato');
//asignarTextoElemento('subTitulo3', 'Resultado');


