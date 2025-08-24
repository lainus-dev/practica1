function asignarTextoElemento(idE, texto){
let idElemento = document.getElementById(idE);
idElemento.innerHTML = texto;
return;
}

function leerValores(){
    let num1 = parseInt(document.getElementById('primerValor').value);
    let num2 = parseInt(document.getElementById('segundoValor').value);
    document.getElementById('resultado').value = sumar(num1, num2);
}

function leerValores2(){
    let num1 = parseInt(document.getElementById('primerValor').value);
    let num2 = parseInt(document.getElementById('segundoValor').value);
     document.getElementById('resultado').value = multiplicar(num1, num2);
}

function sumar(a, b){
    let res = a + b;
    return res;
}

function multiplicar(a, b){
    let res = a * b;
    return res;
}


asignarTextoElemento('titulo','PRACTICA 1');
asignarTextoElemento('subTitulo1', 'Primer dato');
asignarTextoElemento('subTitulo2', 'Segundo dato');
asignarTextoElemento('subTitulo3', 'Resultado');


