function cambiaHTML()
{
    document.getElementById("demo").innerHTML="Hola Gaspar!";
   console.log("Hola Gaspar!")
}
/**
 * Realiza la suma de dos valores
 * @param {*} x: numero 
 * @param {*} y: numero
 * @returns: x+y: suma
 */
function suma(x,y)
{
    return x+y;
}

/**
 * Saluda a través de HTML al cliente que indicamos en nom,
 * @param {*} nom: nombre de la persona a saludar. 
 */

function saludar(nom)
{
    document.getElementById("demo").innerHTML="Hola "+ nom+"!";
    console.log("Saludar(nom)::Hola "+ nom+"!")
}


