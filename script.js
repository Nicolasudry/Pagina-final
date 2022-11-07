
//let Total=0;
//function palcarrito(precio) {
function palcarrito(tallemin, tallemax, talleingresado, precio, zapato) {
    if (talleingresado > tallemin || talleingresado < tallemax ) {
        
    
     
        Total += parseInt (precio);
        document.getElementById("Total").innerHTML = "TOTAL: " + "$" + Total ;
        document.getElementById("Items").innerHTML += (zapato + ' talle ' + talleingresado + ',');
        //talleingresado = 0;
    }
    else{alert("ingrese un talle valido")}
    return;
}


function Borrar() {
    Total = 0;
    document.getElementById("Total").innerHTML = "TOTAL:" + " $" + 0 ;}



