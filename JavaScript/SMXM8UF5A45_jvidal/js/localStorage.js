function guardarCookies() {
    localStorage.setItem ("nom", document.querySelector("#nom").value);
    localStorage.setItem ("cognom", document.querySelector("#cognom").value);
    }
    
    function recuperarCookies() {
    document.querySelector("#nom").value = localStorage.getItem("nom");
    document.querySelector("#cognom").value = localStorage.getItem("cognom");
    }
    
    function esborrarCookies() {
    document.querySelector("#nom").value = null;
    document.querySelector("#cognom").value = null;
    localStorage.setItem ("nom", "");
    localStorage.setItem ("cognom", "");
    }
