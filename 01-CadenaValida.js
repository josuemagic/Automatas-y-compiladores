const cadena = "aaaaab";

function validateString(cadena) {

    let i = 0;

    while (cadena[i] === "a" || cadena[i] === "b") {

        console.log("Cadena valida numero " + [i] + " " + cadena[i]);

        if (cadena[i] === "b") break;

        i++;
    }

    if (i < cadena.length - 1 || cadena[0] !== "a" || cadena[cadena.length - 1] !== 'b') return "Cadena invalida";

    return "Cadena valida";
}

console.log(validateString(cadena));