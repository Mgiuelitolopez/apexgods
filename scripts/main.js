
/*jslint browser:true */
/*globals $ */
function calcularEdad(){


    var dia = 19;
    var mes = 5;
    var año = 2020;


    var diaNacimiento = $("#dia").val();
    var mesNacimiento = $("#mes").val();
    var añoNacimiento = $("#año").val();

    var edad = año - añoNacimiento;

    if(mesNacimiento > mes){
        edad = edad -1;
    }
    if(diaNacimiento > dia){
        edad = edad -1;
    }

    alert(edad);
}
var listaDeLaCompra = ["kiwi", "platano", "pera",
                       "manzana"]

function crearLita(){
    
    
  
}

