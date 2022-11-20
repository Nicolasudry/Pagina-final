
    
//function palcarrito(precio) {
    
   
    
       
     let Total=0
     
function palcarrito(precio,zapato,talle) {
         
    
        
    
        
        Total+= precio ;
        console.log(Total)
        document.getElementById("Total").innerHTML = "TOTAL: " + "$" + Total ;
        document.getElementById("Items").innerHTML += (zapato + ' talle '  + talle + ',' );
        
        
    
    
    return;}




function Borrar() {
    Total = 0;
    document.getElementById("Total").innerHTML = "Total:" + " $" + 0 ;
    document.getElementById("Items").innerHTML= "Items:";}

document.querySelector("#vaciador").addEventListener("click",Borrar)

function saludar(){
    console.log('hola')
};
document.querySelector("#botonm1").addEventListener("click",function(){palcarrito(11500,'zapato marron mujer',document.getElementById("tallem1").value)})
document.querySelector("#botonh1").addEventListener("click",function () {palcarrito(14500,'zapato negro hombre',document.getElementById("talleh1").value)})
document.querySelector("#botonh2").addEventListener("click",function(){palcarrito(13500,'zapato marron hombre',document.getElementById("talleh2").value)})
document.querySelector("#botonm2").addEventListener("click",function() {palcarrito(12500,'Zapato negro mujer',document.getElementById("tallem2").value)})


