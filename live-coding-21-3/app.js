let grid = document.getElementById('grid');


//ciclo per creare i quadratini con id progressivo
for (let i = 1; i <= 64; i++) {
    // document.getElementById('grid').innerHTML += `<div id="box${i}" class="box"></div>`;
    //creo l'elemento
    let box = document.createElement('div');
    box.innerHTML += getRandomInt(1,100);
    box.classList.add('box');
    //collego l'elemendo alla box
    grid.appendChild(box);

    //creo evento per cui se clicco aggiungo classe all'elemento cliccato(this)
    box.addEventListener('click',function () {
        // this.classList.add('clicked');
        //target quello dentro al div 
        let numero = this.innerHTML;
        //se pari una cosa se dispari l'altra
        if (numero % 2 == 0 ) {
            this.classList.add('box-green');
        } else {
            this.classList.add('box-red');
        }
    })
}

//se pari una classe se dispari un altra 

//creo funzione random

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() *(max-min) + min);
}