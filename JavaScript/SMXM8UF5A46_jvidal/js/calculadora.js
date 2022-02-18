function numero(num) {
    let casilla = document.getElementById('casilla')
    casilla.value = casilla.value + num
}
function limpiar() {
    let casilla = document.getElementById('casilla')
    casilla.value = null;
}
function calcular() {
    let casilla = document.getElementById('casilla')
    casilla.value = eval (casilla.value)
}
function borrarnum() {
    let casilla1 = document.getElementById('casilla')
    let casilla2 = casilla1.value.slice(0,-1);
    casilla1.value = casilla2;
}