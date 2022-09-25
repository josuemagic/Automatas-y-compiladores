
// Pedir
const simboloEntrada = ['a'];

// Estado inicial
const estadoInicial = ['q0'];

// Estados declarados
const estados = ['q0', 'q2'];

// Simbolosr con los 
const estadosSimbolosLlegada = ['a', 'a'];

function convertionAFNtoAFD(entrada, estados, estadoInicial, estadosSimbolosLlegada) {

    let j = 0;

    let estadosFinales = "";

    if (estadoInicial[j] != estados[0]) return;

    j++;

    for (let i = 0; i < estados.length; i++) {
        if (entrada[0] === estadosSimbolosLlegada[i]) {
            estadosFinales += estados[i];
        } else {
            break;
        }
    }

    const respuesta = {
        estadoInicial,
        estadosFinales,
        entrada
    }

    return respuesta;
}

const AFD = convertionAFNtoAFD(simboloEntrada, estados, estadoInicial, estadosSimbolosLlegada);

console.table("    " + " | " + AFD.entrada)
console.log(AFD.estadoInicial + "   | " + AFD.estadosFinales);
console.log(AFD.estadosFinales + " | " + AFD.estadosFinales);

// Recorrer estados inicial
 // Y de ahi partir la logica

