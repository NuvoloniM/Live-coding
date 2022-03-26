//funzione numero random minimo viene estratto, massimo escluso
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

//funzione numeor random inclusi max e min
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

  
//riordinare un array in ordine crescente 
array.sort(function (a,b) {
    return a - b;
})
//riordinare in ordine decrescente
array.sort(function (a,b) {
    return b - a;
})