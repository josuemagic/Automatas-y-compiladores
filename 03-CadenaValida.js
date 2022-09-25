// a*

let cadena = "aaaaaaaa";

let regla1 = "a"
let regla2 = "";

function validarCadena(cadena) {
    let i = 0;

    while (cadena[i] === regla1) i++;

    if (cadena.length === i && (cadena[0] === regla1 || cadena === regla2)) return 'Cadena valida'

    return 'Cadena invalida'
}

console.log(validarCadena(cadena));
