// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array
//  fino a quando la somma degli elementi è minore di 50.

// creo array vuoto
const numberList = []
// creo variabile somma
let sum = 0

do {
    let userNumber = Number(prompt("inserisci un numero"))

    if ( !isNaN(userNumber)){
        sum += userNumber
        if (sum < 50){
            numberList.push(userNumber)
        }
    } else{
        console.log("inserisci un numero non una lettera")
    }

} while(sum < 50)



console.log(numberList)