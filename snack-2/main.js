// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

// chiedo all'utente di inserire un numero
const selectedNumber = Number(prompt("inserisci un numero"))
// creo costante array vuota
const array = []
// creo 10 volte un array vuoto => la variabile i indica il numero di volte che viene ripetuto l'array
for (let i = 0; i < selectedNumber; i++) {
    array[i] = [];
// popolo l'array con 10 numeri random => la variabile x indica il numero di volte che viene ripetuto il numero casuale
    for (let x = 0; x < 10; x++) {
        array[i][x] = Math.floor(Math.random() * 100) + 1;
      }
    
}

// stampo gli array
console.log(array);