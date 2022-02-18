function trivial() {
    var nombre = document.getElementById('nom').value;
    var apellido = document.getElementById('cognom').value;
    var edat = document.getElementById('edat').value;

    if (document.getElementById('edat').value >= 18) {
        window.location.href = "./web/trivial.api.htm";
    }
    else {
        alert("No hi pots accedir!")
    }
}

function resposta(){
    var resposta1 = "La balena blava";
    var resposta2 = "Guepard";
    var resposta3 = "La carpa Paedocypris";
    var resposta4 = "El mandrós";
    var resposta5 = "Escarabat piloter";

    if (document.getElementById('preg1').value == resposta1) {
        document.getElementById('resposta1').innerHTML = resposta1
    }
    else {
        document.getElementById('resposta1').innerHTML = resposta1
    }


    if (document.getElementById('preg2').value == resposta2) {
        document.getElementById('resposta2').innerHTML = resposta2
    }
    else {
        document.getElementById('resposta2').innerHTML = resposta2
    }


    if (document.getElementById('preg3').value == resposta3) {
        document.getElementById('resposta3').innerHTML = resposta3
    }
    else {
        document.getElementById('resposta3').innerHTML = resposta3
    }


    if (document.getElementById('preg4').value == resposta4) {
        document.getElementById('resposta4').innerHTML = resposta4
    }
    else {
        document.getElementById('resposta4').innerHTML = resposta4
    }


    if (document.getElementById('preg5').value == resposta5) {
        document.getElementById('resposta5').innerHTML = resposta5
    }
    else {        
        document.getElementById('resposta5').innerHTML = resposta5
    }
}
