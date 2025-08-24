let dato1;
let dato2;
let resultado;

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Practica1';

let parrafo = document.querySelector('h2');
parrafo.innerHTML = 'Primer dato';

function operacionUsuario(){
    let num1 = parseInt(prompt("ingresa el primer numero"));
    let num2 = parseInt(prompt("ingresa el segundo numero"));
    let num3 = alert(`la suma de los numeros es: ${num1 + num2}`);
}

