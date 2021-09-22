    var formvalidar=$("#validar");
    var formgustos=$("#gustos");
    var pilatable=$("#pila");
    var comprobador=true;
    var nombre=$("#nombre");
    var email=$("#email");
    var tel=$("#tel");

$(document).ready(function(){
    
 
    formvalidar.hide();
    var btncancel=$("#val-cancelar");
    btncancel.click(function(){
        comprobador=true;
        pilatable.html("");
        formvalidar.hide();
        nombre.val("");
        email.val("");
        tel.val("");
    });
    
    $("#btn-gustos").click(agregarClick);

    var btnaceptar = $("#val-aceptar");
    btnaceptar.click(function(){
        var i;
        var botones = $(".boton-editar");
        for(i =0;i<botones.length;i++){
            if(botones[i].innerHTML=="en edicion"){
               
               }
        }
    });
});

function agregarClick(){
    var msgusto=formgustos.val();
        if(msgusto!=""){
            var stringhtml='<tr><td>'+msgusto+'</td><td>0</td><td class="editar boton-editar">Editar</td></tr>';
            var htmlAnt=pilatable.html();
            pilatable.html(htmlAnt+stringhtml);
            formgustos.val("");
            
            var botones=$(".boton-editar");
            var i;
            for(i=0; i<botones.length ; i++){
                $(botones[i]).click(function(){
                    if(comprobador){
                        var herm=$(this).siblings();
                        $(this).removeClass("editar");
                        this.innerHTML="en edicion";
                        $(this).addClass("edicion");
                        $(this).unbind("click");
                        formvalidar.show();
                        
                        
                       herm[0].innerHTML='<input type="text" name="gusto" value="'+herm[0].innerHTML+'" class="input-edit">';
                        herm[1].innerHTML='<input type="text" name="por" value="'+herm[1].innerHTML+'" class="input-edit">';
                       comprobador=false;
                
                    }else{
                        alert("solo se puede editar un elemento a la vez");
                    }
                    
                });
            };
            
        }else{
            alert("no puede estar vacio")
        }
}  
