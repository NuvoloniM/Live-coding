const gatti = [
    {
      'nome': 'Ciccio',
      'eta': 5,
      'colore': 'green',
      'sesso': 'm'
    },
    {
      'nome': 'mark',
      'eta': 2,
      'colore': 'gray',
      'sesso': 'm'
    },
    {
      'nome': 'pippo',
      'eta': 12,
      'colore': 'black',
      'sesso': 'm'
    },
    {
      'nome': 'pinky',
      'eta': 10,
      'colore': 'pink',
      'sesso': 'f'
    }
  ];

//tramite funzione di foreach stampare in pagina tutti i gattini, ciascuno con il proprio colore e nome

let test = document.getElementById('test');  

gatti.forEach(
    (element) => {
        //destrutturazione 
        const {nome, colore } = element;
        test.innerHTML += 
        `
        <div> il nome del gatto è ${nome} e il colore è ${colore}</div>
        `
    }
)

//dividdre i gatti in ude array in base al sesso

const maschi = gatti.filter(
    // (element) => {
    //     //condition
    //     if (element.sesso == 'm') {
    //         return true;
    //     }
    //         return false
    //     }
    (element) => element.sesso == 'm'
)
    //forma abbreviata
const femmine = gatti.filter(
    // (element) => {
    //     //condition
    //     if (element.sesso == 'f') {
    //         return true;
    //     }
    //         return false
    // }
    //forma abbreviata
    (element) => element.sesso == 'f'
)

console.log(maschi);
console.log(femmine);

// Il Grande Gatsby ci ha chiesto di creare i segnaposti per il tavolo
// degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo
// e la lista degli invitati in ordine di posto.
// ma la tipografia per stampare il tutto vuole che le mandiamo una lista
// di ospiti in cui ogni ospite sia un oggetto javascript.

const tableName = 'Tavolo Vip';
const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin',
];

//Quanto lo usiamo? filter crea nuovo array con all'interno elementi che convalidano (true) la condizione
//Quando lo usiamo? map crea un array, non c'è una condizione ma il numero degli array è identico a quello di partenza, magari modificando tramite qualche funzione

const numeroTavolo = guests.map(
    (element,index) => {
        //dobbiamo pushare un oggetto con dentro chiavi : tableName, nome(invitato), numeroTavlo x invitato
        /* esempio:
            {
                nome: 'Brad Pitt,
                nomeTavolo: 'Tavolo Vip',
                numeroPostTavolo: 1
            }
        */
        return (
            //return nel map è come se fosse push nel nuovo array
            {
                'nome': element,
                'numeroTavolo': tableName,
                'numeroPostoTavolo': index + 1
            }
        )
    }
)
console.log(numeroTavolo);

//abbbiamo un elenco di et, trovare i minorenni e gli over 65
const ages = [25, 18, 56, 14, 17, 72, 38, 84, 13, 45, 65, 8, 60];

const over = ages.filter(element => element >= 65);
const under = ages.filter(element => element < 18);

const example = ages.filter(element => element < 18 || element >= 65);

console.log(over);
console.log(under);
console.log(example);