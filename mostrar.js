

function traerdatos(){

    const valorurl = window.location.search;
    const urlparametros = new URLSearchParams(valorurl);
    var nombre = urlparametros.get("nombre");
    var email = urlparametros.get("email");
    var telefono =urlparametros.get("telefono");
    var porcentaje =urlparametros.get("por");
    var gustos=urlparametros.get("gusto");
    
    

    $("#nombre").html(nombre);
    $("#email").html(email);
    $("#tel").html(telefono);
    $("#por").html(porcentaje);
    $("#gusto").html(gustos);
}