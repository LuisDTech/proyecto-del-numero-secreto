let numeroSecreto = 0;
let intentos = 0;
let numerosSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#numeroUsuario").value = "";
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado)
    console.log(numerosSorteado)

    //si ya sorteamos todos los numeros
    if (numerosSorteado.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {
        // si el numero generado esta incluido en la lista
        if (numerosSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            // agrega el numero generado a la lista
            numerosSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento ("h1", "Juego del numero secreto");
    asignarTextoElemento ("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    //mensaje de intervalos de juego
    // generar un numero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    // deshabilitar el boto de nuevo juevo
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

