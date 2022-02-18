function validar(){
    passwd = document.getElementById("passwd").value
    passwd2 = document.getElementById("passwd2").value
    if (passwd == passwd2)
        alert ("Les contrasenyes son iguals")
    else 
        alert("Les contrasenyes no son iguals")
}