/*pari o dispari. 
scrivere una funzione per verifcare se un numero
è pari o dispari, quindi chiedere un numero all'utente
e comunicargli se è pari o dispari
*/
let numero = parseInt(prompt("Scrivi il primo numero che ti vine in mente"));
let result = document.getElementById('result');

function numeroParioDispari(numero) {
    if (numero % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

result.innerHTML = `Il numero da te scelto è ${numeroParioDispari(numero)}`
numeroParioDispari();