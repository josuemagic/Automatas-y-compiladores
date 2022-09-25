// Estados
const principalStates = [
    { state: 'q0', symbol: 'a', stateHeighbours: ['q1', 'q5'], autoCall: true },
    { state: 'q1', symbol: 'a', stateHeighbours: ['q2', 'q0'], autoCall: false },
    { state: 'q2', symbol: 'a', stateHeighbours: ['q4', 'q1'], autoCall: false },
    { state: 'q4', symbol: 'b', stateHeighbours: ['q0'], autoCall: false },
    { state: 'q5', symbol: 'b', stateHeighbours: ['q0'], autoCall: false },
];

const symbols = ['a', 'b', 'c'];

const statesFinal = [];

for (let i = 0; i < principalStates.length; i++) {

    const templateObject = { state: '', statetsTarjet: [], symbols: [] };

    templateObject.state = principalStates[i].state;

    // Recorremos sus states vecinos

    for (let j = 0; j < principalStates[i].stateHeighbours.length; j++) {

        // Buscar si existe el estado vecino en el principalStates
        // y obtenerlo 

        const foundState = principalStates.find(element => element.state == principalStates[i].stateHeighbours[j]);

        // Recorremos los simbolos y vemos si alguno coincide
        // con el "symbol" del estado vecino

        // Si coincide agregamos el foundState a los statesTarjet
        // de nuestro templateObject

        if (foundState) {
            for (let k = 0; k < symbols.length; k++) {
                if (symbols[k] == foundState.symbol) {

                    templateObject.statetsTarjet.push(foundState.state);

                    // Es un arreglo, debes pasarle todos los foundState 
                    // que encuentres en cada iteracion
                    templateObject.symbols.push(foundState.symbol)
                }

            }
        }

    }

    statesFinal.push(templateObject);


    // Recorremos el arreglo de statesTarjet, los juntamos, se convierte en un
    // nuevo state

    for (let l = 0; l < symbols.length; l++) {
        let newState = "";
        let newStateSeparated = "";
        for (let o = 0; o < templateObject.statetsTarjet.length; o++) {
            if (symbols[l] == templateObject.symbols[o]) {
                // Aqui puede salir el nuevo state
                newState += templateObject.statetsTarjet[o];
                newStateSeparated += templateObject.statetsTarjet[o] + ",";
            }
        }
        // Aqui lo llamamos por cada estado de CADA SIMBOLO
        // Esto hace que separe los que no son del mismo simbolo

        // Funcion que valida si ya existe ese estado en los statesTarjet
        // comparamos si ese estado ya existe en nuestro arreglo de finalStates
        // Sino se encuentra, lo agregamos a nuestro finalState como nuevo state, 
        // con su state, states tarjet y TAL VEZ su simbolo
        foundStateInPrincipalStates(newState, newStateSeparated);
    }

}

console.log(statesFinal);

// Nota: Cuando haces el push de un objeto a un array, estas
// insertando la referencia al objeto, no una copia, siempre
// que modifiques el objeto "original" se van a modificar todos
// los lugares en donde esté la referencia.

// Que se puede hacer?
// Crear un objeto nuevo cada vez que lo vayas a usar
// Crear una clase y crear instancias


// TODO: Listado de resultado
// Ideas: recorrer el arreglo de objetos
// y mostrar una tabla con los datos
//    | a | b | c
// q0 |   |   |
// q1 |   |   |
// q2 |   |   |
// q3 |   |   |
// q4 |   |   | 

let symbolsTable = "    ";
let row = "";

for (let i = 0; i < symbols.length; i++) {
    symbolsTable += symbols[i] + "      ";
}

console.log(symbolsTable);

for (let i = 0; i < statesFinal.length; i++) {
    row = "";
    row += statesFinal[i].state + " |";

    for (let j = 0; j < symbols.length; j++) {

        for (let k = 0; k < statesFinal[i].symbols.length; k++) {
            if (symbols[j] == statesFinal[i].symbols[k]) {
                row += statesFinal[i].statetsTarjet[k]; // Aqui se puede genera el nuevo state
            } else {
                row += ""
            }
        }

        row += "    |   "
    }

    console.log(row);
}


// Guardar row como una variable y guardar de una forma
// Los estados a los cuales llega
//Ejemplo: row = {stateFinal: ""; statesTarjet: [] *tal vez contenga simbolos*}

//Idea: Tal vez por cada statesTarjet ver a cuales estados apuntas y de esos 
// estados obtener sus simbolos

// Verificar si en los statesTarjet de cada row ya no exista ese estado en principalStates


function foundStateInPrincipalStates(state, newStateSeparated) {

    // Recorremos el arreglos de los stados
    for (let i = 0; i < principalStates.length; i++) {
        // Si lo encontra retorna true
        if (principalStates[i].state == state) {
            return;
        }
    }
    // Si llegamos aca significa que se encontro un nuevo state.
    // Llamamos ala funcion para crearlo y agregarlo
    // Al principal state
    createNewState(state, newStateSeparated);
    return false;
}

// Separamos el state, encontramos por cada uno los principalState y el que
// coincida con el state (que ya esta por partes), tomamos los stateHeighbours
// de ese principal state

function createNewState(state, newStateSeparated) {
    const templateObject = { state: '', symbol: '', stateHeighbours: [], autoCall: true }

    templateObject.state = state;

    // Dividiendo la cadena del state por ","
    let arrayStates = newStateSeparated.split(',');

    for (let i = 0; i < principalStates.length; i++) {

        for (let j = 0; j < arrayStates.length; j++) {
            if (principalStates[i].state == arrayStates[j]) {
                // Por cada state que coincida, recorremos sus stateHeighbours
                // y los agregamos a nuestro stateHeighbours
                // de nuestro templateObject
                for (let l = 0; l < principalStates[i].stateHeighbours.length; l++) {
                    templateObject.stateHeighbours.push(principalStates[i].stateHeighbours[l]);
                }
            }
        }
    }
    // TODO Estar al pendiente de esto
    // Limipiamos el stateHeighbours del templateObjet
    // para que no haya ningun stateHeighbour repetido 
    templateObject.stateHeighbours = templateObject.stateHeighbours.filter((item, index) => {
        return templateObject.stateHeighbours.indexOf(item) == index;
    })
    // Aqui agregariamos el nuevo state al principalStates
    if (state.length > 0) {
        principalStates.push(templateObject);
    }
}


function printRespueta() {
    // Todo dar el formato pora la respuesa
    let array = ['h', 'o', 'e', 'j', 'b', 's', 'r', 't', 'u'];
    // Aqui damos el formato con las posiciones de letrar
    // al azar
    console.log(array[3] + array[1] + array[5] + array[8] + array[2]);
    console.log(array[0] + array[2] + array[4] + array[2] + array[6] + array[7]);
}

