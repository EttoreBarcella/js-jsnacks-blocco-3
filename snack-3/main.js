// Partendo da un array di numeri X
// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// Creo i due tag div in html e gli do stile selezionandoli tramite il loro id
const redContainer = document.getElementById("red")
redContainer.style.color = "red"
const greenContainer = document.getElementById("green")
greenContainer.style.color = "green"

// Creo l'array di numeri
const array = [10 , 20, 33, 2 , 3, 5, 7, 34, 56, 74, 73, 21]
// scorro ogni dato dell'array con .lenght
for (let i = 0; i < array.length; i++){
    // SE % 2 === 0 stampo i numeri nell'innerHTML del container verde
    if(array[i] % 2 === 0){
        greenContainer.innerHTML += array[i]
    // ALTRIMENTI in quello rosso
    } else{
        redContainer.innerHTML += array[i]
    }
}