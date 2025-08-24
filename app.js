function asignarTextoElemento(idE, texto){
let idElemento = document.getElementById(idE);
idElemento.innerHTML = texto;
return;
}

function leeNumeros(){
    let num1 = parseInt(document.getElementById('primerValor').value);
    let num2 = parseInt(document.getElementById('segundoValor').value);
    return [num1, num2];
}

function sumarO(){
    let [num1, num2] = leeNumeros();
     document.getElementById('resultado').value = sumar(num1, num2);
}

function multiplicarO(){
    let [num1, num2] = leeNumeros();
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


