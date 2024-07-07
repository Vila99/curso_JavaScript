// Bucle while
/*
var contador = 0;
var N = 50;
while (contador < N) {
    console.log(contador);
    contador += 1;
}
*/

/*
// Bucle do while
do {
    // Primera iteracion
} while(condicion)
*/


/*
// Bucle for
for (var i = 0; i < 50; i += 2) {
    console.log(i);
}
*/
// 0. 1. 2
var array = [10, 20, 30]; // 3
var estudiantes = [
    {
        nombre: 'Estudiante 1',
        nota: 5
    },
    {
        nombre: 'Estudiante 2',
        nota: 8
    },
    {
        nombre: 'Estudiante 3',
        nota: 1
    }
]
for (var i = 0; i < estudiantes.length; i += 1) {
    var estudiante = estudiantes[i];
    console.log(estudiante.nombre, estudiante.nota);
}

// Iterar sobre vectores y objetos
for (var estudiante of estudiantes) {
    console.log(estudiante.nombre, estudiante.nota);
}

var estudianteAuxiliar = {
    nombre: 'Estudiante 1',
    nota: 5
}

for (var key in estudianteAuxiliar) {
    console.log(key, estudianteAuxiliar[key]);
}



var pisos = 6;

var multEspacio = pisos;

var aster = "*";

var espacio = " ";

var multAster = 1;

for (var i = 0; i < pisos; ++i) {

    console.log(espacio.repeat(multEspacio) + aster.repeat(multAster));

    multEspacio -= 1;

    multAster += 2;

}