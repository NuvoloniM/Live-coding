/*
Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
Dopo il tempo indicato, appare un alert().
*/


let time = parseInt(prompt('Inserisci i minuti(secondi) di cottura della pasta'));
time = time * 1000;

function isready(x) {
    alert('è pronto!!!');
}

setTimeout(isready,time);