// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

// chiedo all'utente di inserire un numero
const selectedNumber = Number(prompt("inserisci un numero"))

const array = []
for (let i = 0; i < selectedNumber; i++) {
    array[i] = [];
}

console.log(array)
