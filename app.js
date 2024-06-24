let numSec = 0;
let intentos = 0;
let numSort = [];
let numMax = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numUsu = parseInt(document.getElementById("valorUsu").value);
  
    console.log(intentos);
    if (isNaN(numUsu)) {
      asignarTextoElemento("p", "Debes ingresar un número");
      return;
    }
  
    switch (true) {
      case numUsu === numSec:
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        return;
      case numUsu > numSec:
        asignarTextoElemento("p", "El número secreto es menor");
        break;
      case numUsu < numSec:
        asignarTextoElemento("p", "El número secreto es mayor");
        break;
    }
    intentos++;
    limpiarCaja();
  }
function limpiarCaja(){
    document.querySelector("#valorUsu").value = ""; 
}

function generarNumSec() {
    let numGen;
    do {
        numGen = Math.floor(Math.random()*numMax)+1;
    } while (numSort.includes(numGen));
    numSort.push(numGen);
    return numGen;
}

function condicionesIniciales () {
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Elije un número del 1 al ${numMax}`);
    numSec = generarNumSec();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
