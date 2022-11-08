
//let Total=0;
//function palcarrito(precio) {
    function mostrarCantidad (a){
        let cantidad = document.getElementById(a).value
        console.log(cantidad)
    }
    document.getElementById("botonm2").addEventListener("click",mostrarCantidad(tallem2))
    function mostrarCantidad (){
       
    let Total=0
function palcarrito( precio, zapato) {
         //document.getElementById("talleingresado").innerHTML
    
        
    
        
        Total += parseInt (precio);
        document.getElementById("Total").innerHTML = "TOTAL: " + "$" + Total ;
        document.getElementById("Items").innerHTML += (zapato + ' talle ' + cantidad + ',');
        //talleingresado = 0;
    
    
    return;}
    document.getElementById("")



function Borrar() {
    Total = 0;
    document.getElementById("Total").innerHTML = "TOTAL:" + " $" + 0 ;
    document.getElementById("Items").innerHTML= "";}

document.querySelector("#vaciador").addEventListener("click",Borrar)
document.querySelector("#botonm2").addEventListener("click",palcarrito(12500,'zapato negro mujer'))
document.querySelector("#botonm1").addEventListener("click",palcarrito(11500,'zapato marron mujer'))
document.querySelector("#botonh1").addEventListener("click",palcarrito(14500,'zapato negro hombre'))
document.querySelector("#botonh2").addEventListener("click",palcarrito(12500,'zapato marron hombre'))

document.querySelector("#botonm2").addEventListener("click",gettalle("tallem2"))
function gettalle(a){
        let talleseleccionado=document.getElementById(a).innerHTML;
        console.log(talleseleccionado);}