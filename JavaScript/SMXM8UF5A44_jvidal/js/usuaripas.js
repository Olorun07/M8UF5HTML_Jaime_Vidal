function validar(){
    passwd = document.getElementById("passwd").value
    passwd2 = document.getElementById("passwd2").value
    usuari = document.getElementById("usuari").value
    if (usuari == "")
        alert ("L'usuari no pot estar en blanc")
    if (passwd =="")
        alert ("La contrasenya no pot estar en blanc")
    if (passwd == passwd2) 
        alert ("Les contrasenyes son iguals")
    else 
        alert("Les contrasenyes no son iguals")
    
    if (usuari == "Ibai" || passwd == "1234")
            alert("Coincideix")
    else 
            alert("No coincideix")
}