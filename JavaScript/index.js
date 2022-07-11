let confirmacionDeUsuario = parseInt(prompt("¿Eres un robot?" ));

let cadena

while (confirmacionDeUsuario != 'No soy un robot') {
   
    cadena = cadena + confirmacionDeUsuario 
    
    confirmacionDeUsuario = prompt ("¿Eres un robot? Si no eres un robot, escribe 'No soy un robot'")
}



console.log(cadena)
console.log(confirmacionDeUsuario)