let array = ['ciao', 'word'];
// let primaParola = array[0]; ??
[primaParola, secondaParola] = array;
console.log(primaParola);

//solo momentaneo
// [primaParola, secondaParola] = [secondaParola, primaParola];
//modifico e resta la modifica
// [array[0], array[1]] = [array[1], array[0]];
console.log(primaParola);
console.log(array);


// Dato un array di pianeti, trovare quello col diametro maggiore e stamparlo
const solarSistemData =
[
    {
        nome: 'Saturno',
        distanzaMinimaSoleKm: 1352550000,
        distanzaMassimaSoleKm: 1515500000,
        satelliti: 82,
        diametroEquatoreKm: 108728,
    },
    {
        nome: 'Venere',
        distanzaMinimaSoleKm: 107480000,
        distanzaMassimaSoleKm: 10894000,
        satelliti: 0,
        diametroEquatoreKm: 12103.6
    },
    {
        nome: 'Nettuno',
        distanzaMinimaSoleKm: 4459631496,
        distanzaMassimaSoleKm: 4536874325,
        satelliti: 14,
        diametroEquatoreKm: 49528
    },
    {
        nome: 'Giove',
        distanzaMinimaSoleKm: 740742598,
        distanzaMassimaSoleKm: 816081455,
        satelliti: 79,
        diametroEquatoreKm: 142984
    },
    {
        nome: 'Terra',
        distanzaMinimaSoleKm: 147098074,
        distanzaMassimaSoleKm: 152097701,
        satelliti: 1,
        diametroEquatoreKm: 12756.274
    },
    {
        nome: 'Urano',
        distanzaMinimaSoleKm: 2741300000,
        distanzaMassimaSoleKm: 3003620000,
        satelliti: 27,
        diametroEquatoreKm: 51118
    },
    {
        nome: 'Marte',
        distanzaMinimaSoleKm: 206644545,
        distanzaMassimaSoleKm: 249228730,
        satelliti: 2,
        diametroEquatoreKm: 6804.9
    },
    {
        nome: 'Mercurio',
        distanzaMinimaSoleKm: 46000000,
        distanzaMassimaSoleKm: 69820000,
        satelliti: 0,
        diametroEquatoreKm: 4879.4
    }
];

// let diametroArray = [];
let grande = solarSistemData[0];
for (let i = 0; i < solarSistemData.length; i++) {
    let x = solarSistemData[i];
    if (grande['diametroEquatoreKm'] < x['diametroEquatoreKm']) {
        grande = x;
    }
}
console.log(grande);

let test = document.getElementById('test');

// test.innerHTML = 
// `
// <div> nome -> ${grande.nome} </div>
// <div> distanzaMassimaSoleKm -> ${grande.distanzaMassimaSoleKm} </div>
// <div> satelliti -> ${grande.satelliti} </div>
// <div> diametroEquatoreKm -> ${grande.diametroEquatoreKm} </div>

// `

let {nome, distanzaMassimaSoleKm , satelliti, diametroEquatoreKm} = grande;
test.innerHTML = 
`
<div> nome -> ${nome} </div>
<div> distanzaMassimaSoleKm -> ${distanzaMassimaSoleKm} </div>
<div> satelliti -> ${satelliti} </div>
<div> diametroEquatoreKm -> ${diametroEquatoreKm} </div>
`
// for (let i = 0; i < solarSistemData.length; i++) {
//     let x = solarSistemData[i]['diametroEquatoreKm'];
//     diametroArray.push(x);
    
// }

// console.log(diametroArray);
// diametroArray.sort(function (a,b) {
//     return b - a;
// });
// console.log(diametroArray[0]);

// Dato un array di pianeti, generare un numero random di like per ogni pianeta e aggiungere la proprietà 
// all'elemento e stampare il nome di ogni pianeta e i rispettivi like

//1) generare numero random
function getRandomInt(max) {
    return Math.floor(Math.random()* max);
}

//pushamo key nell'object
let like = document.getElementById('like');

for (let l = 0; l < solarSistemData.length; l++) {
    let likePianeti = getRandomInt(100);
    solarSistemData[l].like = likePianeti;
    //provo a stampare su html, pero se lo faccio fuori dal for torno all'oggetto prima del for
    let {nome, like} = solarSistemData[l];
    test.innerHTML += 
    `
    <div> ${nome} => ${like}</div>
    `
}
console.log(solarSistemData);