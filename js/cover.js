//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e){

//});

function login(){
    var usuario = document.getElementById("user").value;
    var contrasena = document.getElementById("pass").value;
        if(usuario!="" && contrasena!=""){
            window.location="cover.html";
        }
        else {
            alert("Ingrese nombre de usuario y contraseña correctos.")
        }
};    
        //document.addEventListener("DOMContentLoaded", function(e){
        //})