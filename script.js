
//let Total=0;
//function palcarrito(precio) {
    function mostrarCantidad (){
        let cantidad = document.getElementById("tallem1").value
        console.log(cantidad)
    }
    mostrarCantidad
   // document.getElementById("botonm2").addEventListener("click", ()=>mostrarCantidad(tallem2))
    
       
     let Total=0
     
function palcarrito(precio,zapato) {
         //document.getElementById("talleingresado").innerHTML
    
        
    
        
        Total+= precio ;
        console.log(Total)
        document.getElementById("Total").innerHTML = "TOTAL: " + "$" + Total ;
        document.getElementById("Items").innerHTML += (zapato + ' talle '  + ',' );
        //talleingresado = 0;
        
    
    
    return;}




function Borrar() {
    Total = 0;
    document.getElementById("Total").innerHTML = "Total:" + " $" + 0 ;
    document.getElementById("Items").innerHTML= "Items:";}
//let Elegidom1 = document.getElementById("tallem1").value
//console.log(Elegidom2)
document.querySelector("#vaciador").addEventListener("click",Borrar)

function saludar(){
    console.log('hola')
};
document.querySelector("#botonm1").addEventListener("click",function(){palcarrito(11500,'zapato marron mujer')})
document.querySelector("#botonh1").addEventListener("click",function () {palcarrito(14500,'zapato negro hombre')})
document.querySelector("#botonh2").addEventListener("click",function(){palcarrito(13500,'zapato marron hombre')})
document.querySelector("#botonm2").addEventListener("click",function() {palcarrito(12500,'Zapato negro mujer')})

