// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array
//  fino a quando la somma degli elementi è minore di 50.

// creo array vuoto
const numberList = []
// creo variabile somma
let sum = 0
// creo ciclo indefinito fintanto che somma non è maggiore di 50
while (sum < 50){
    // fin tanto che sum < 50 chiedo all'utente di inserire un numero
    const userNumber = Number(prompt("inserisci un numero"))
    // sommo il numero scelto alla variabile sum
    sum += userNumber
    // inserisco il numero nell'array vuoto
    numberList.push(userNumber)
}
// stampo l'array aggiornato in console
console.log (numberList)