/*
numeri random: 
generare 10 numeri random (con un for o con un while) attraverso una funzione 
e stamparli a schermo
*/

function randomNumbers() {
        let x = Math.floor(Math.random()* 100);
        return x;
}

for (let i = 0; i < 10; i++) {
    console.log(randomNumbers());
    
}