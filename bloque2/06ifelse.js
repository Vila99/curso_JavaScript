// control de flujo

// condicionales
var condicion1 = false;
var condicion2 = true;
if (condicion1 && condicion2) {
    // hago esto si se cumple condicion
    console.log('Estoy en el if');
} else {
    // hago esto otro si no se cumple condicion
    console.log('Estoy en el else');
}
// continuo ejecutando





// Se pueden encadenar
if (condicion1) {
    // Entro aqui si cumplo la primera condicion
} else if (condicion2) {
    // Entro aqui si cumplo la segunda
} else if (condicion3) {
    // Entro aqui si cumplo la tercera
} else {
    // Entro aqui si no cumplo ninguna
}






// Se pueden anidar
if (condicion1) {
    if (condicion2) {
        // Hago algo
    }
    // Luego hago otra cosa
} else {
    // Hago otra cosa distinta
}


// Ejercicio practico multiples

var primer = 20;
var segundo = 2;

if (primer % segundo == 0) {

    console.log(primer + ' es multiplo de ' + segundo)

} else {

    console.log(primer + ' no es multiplo de ' + segundo)

};