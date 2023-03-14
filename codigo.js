
//en estas primeras lineas de codigo declaro variables y funciones que voy a aplicar depues
//las pongo al principio por una cuestion de organizacion
let total = 0;
let cuotas = 0;
function calcularCuotas (cantidadCuotas){
    total = total * 1.15 / cantidadCuotas;
    alert ("El total a pagar es de "+cantidadCuotas+ " cuotas de " +total+ " pesos");
}



//doy la bienvenida al usuario y cargo su nombre por simple formalidad
let nombreUsuario = prompt ("Esto es Marea Boards.\nAca vas a poder armar tu tabla con el mejor estilo\n¿Como te llamas?");
alert ("Bienvenido "+nombreUsuario);




//aca muestro la lista de productos y pregunto si se quiere seguir comprando. A la vez voy acumulando el total
//de los productos que se van comprando
let ingreso = prompt ("Si queres ver la lista de componentes que tenemos en stock, presiona s-(si) o sino n-(no");
while (ingreso == "s"){
    let tabla = parseInt(prompt("Ingresa el numero de componente que desees\n1-Tabla Cruising $10.000\n2-Tabla Freeriding $12.500\n3-Trucks LAB 150mm $15.350\n4-Trucks KALIMA 180mm $17.200\n5-Rulemanes Element $4.500\n6-Separadores $2.000"));
        switch (tabla){
            case 1:
                alert  ("Elegiste la tabla cruising, ideal para transportarte");
                total = total + 10000;
                break;
            case 2:
                alert ("Elegiste la tabla freeride, ideal para emepzar a hacer tus primeras bajadas en pendiente");
                total = total + 12500;
                break;
            case 3:
                alert ("Elegiste los Trucks LAB 150mm. Geniales para distancias cortas");
                total = total + 15350;
                break;
            case 4:
                alert ("Elegiste los trucks kalima 180mm. Muy buenos para hacer giros pronunciados");
                total = total + 17200;
                break;
            case 5:
                alert ("elegiste los rulemanes element");
                total = total + 4500;
                break;
            case 6:
                alert ("Elegiste separadores para trucks y tabla");
                total = total + 2000;
                break;
            default: 
            alert ("No ingresaste ninguno de los productos disponibles");
            break;
        }
        ingreso = prompt ("¿Queres seguir viendo la lista de componentes que tenemos en stock? presiona s-(si) o sino n-(no");
}

alert('Llevas gastado hasta ahora '+total);



//ACA DECLARO QUE SI EL MONTO TOTAL ES MAYOR A CERO, ENTONCES QUE SE EJECUTE EL CALCULADOR DE CUOTAS
if(total != 0){
let preCuotas = prompt ("El precio anterior es pagando mediante efectivo o trasnferencia. En el caso de que quieras pagar con tarjeta, te podemos ofrecer 3 o 6 cuotas con un recargo del 10%. Si queres abonar mediante tarjeta y calcular el recargo en 3 o 6 cuotas presiona s-(si), en caso contrario presiona n-(no)");
while (preCuotas == "s"){
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas a pagar, ya sea 3 o 6"));
    switch (cuotas){
        case 3:
            calcularCuotas(cuotas);
            break;
        case 6:
            calcularCuotas(cuotas);
            break;
        default:
        alert ("No selecciono ninguna de las cuotas dispoibles")
        break;
    } preCuotas = prompt ("¿Queres averiguar nuevamente el monto final en 3 o 6 cuotas? presiona s-(si), en caso contrario presiona n-(no)");
}
}


