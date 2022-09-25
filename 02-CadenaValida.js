let cadena = "aaaa";

let regla1 = 'a'
let regla2 = 'aA'
let ST = 'a';
let SN = 'A';

function validarCadena(cadena) {
    let i = 0;

    while (cadena[i] === regla1 || cadena === ST) i++;

    if (cadena.length === i && cadena[0] === regla1) return 'Cadena valida'

    return 'Cadena invalida'
}

console.log(validarCadena(cadena));

