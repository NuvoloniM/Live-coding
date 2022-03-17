/*"Controllare che un numero preso in input sia positivo 
e richiederlo in caso contrario."*/

// let question = parseInt(prompt('Inserisci qui il primo numero che ti viene in mente'));

//usare solo l'if non basta, perchè richiede il numero una volta sola. bisogna ciclare fino a quando la condizione non si avvera.

// while (question < 0 || isNaN(question)) {
//     question = parseInt(prompt('Attenzione, numero non valido. Inserisci un altro numero'));
// }

// console.log(question);

//si può usare do while 

do {
     question = parseInt(prompt('inserisci un numero'));
} while (question < 0 || isNaN(question))
