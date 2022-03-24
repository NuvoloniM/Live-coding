let listaFilm = [
    {
        'nome' : 'Inception',
        'genere' : ['Fantascienza', 'Azione', 'Avventura', 'Thriller'],
        'anno' : 2010,
        'img' : '47397.webp'
    },
    {
        'nome' : 'Pulp Fiction',
        'genere' : ['Pulp', 'Cult', 'Avventura', 'Thriller'],
        'anno' : 1994,
        'img' : 'pulp.webp'
    },
    {
        'nome' : 'Interstellar',
        'genere' : ['Fantascienza', 'Azione', 'Avventura', 'Sci-Fi'],
        'anno' : 2014,
        'img' : 'locandina.jpg'
    }
    
]

// console.log(listaFilm);
// console.log(listaFilm[0].nome);

for (let i = 0; i < listaFilm.length; i++) {
    for (let key in listaFilm[i]){
        console.log(key);
        console.log(listaFilm[i][key])
    }
}

let test = document.getElementById('test')
for (let i = 0; i < listaFilm.length; i++) {
    test.innerHTML += 
    `
    <div class="card" style="width: 18rem;">
        <img src="./img/${listaFilm[i]['img']}" class="card-img-top" alt="locandina ${listaFilm[i]['nome']}">
        <div class="card-body">
            <h5 class="card-title">${listaFilm[i]['nome']}</h5>
            <p class="card-text">${listaFilm[i]['genere']}</p>
            <p class="card-text">${listaFilm[i]['anno']}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
}