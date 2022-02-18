window.addEventListener("keydown", enciende1, false);

function enciende1(imagen){
    if (imagen.keyCode == 49){
        document.getElementById("bombilla1").src="../img/llumon.gif"
        document.getElementById("primero").innerHTML = "1"
    }
}
window.addEventListener("keyup", apaga1, false);

function apaga1(imagen){
    if (imagen.keyCode == 49){
        document.getElementById("bombilla1").src="../img/llumoff.gif"
        document.getElementById("primero").innerHTML = ""
    }
}
window.addEventListener("keydown", enciende2, false)

function enciende2(imagen){
    if (imagen.keyCode == 50){
        document.getElementById("bombilla2").src="../img/llumon.gif"
        document.getElementById("segundo").innerHTML = "2"
    }
}
window.addEventListener("keyup", apaga2, false);

function apaga2(imagen){
    if (imagen.keyCode == 50){
        document.getElementById("bombilla2").src="../img/llumoff.gif"
        document.getElementById("segundo").innerHTML = ""
    }
}
window.addEventListener("keydown", enciende3, false)

function enciende3(imagen){
    if (imagen.keyCode == 51){
        document.getElementById("bombilla3").src="../img/llumon.gif"
        document.getElementById("tercero").innerHTML = "3"
    }
}
window.addEventListener("keyup", apaga3, false);

function apaga3(imagen){
    if (imagen.keyCode == 51){
        document.getElementById("bombilla3").src="../img/llumoff.gif"
        document.getElementById("tercero").innerHTML = ""
    }
}