window.addEventListener('load',() => { 
    location.hash = 'Home'
    recientes();
    tendencia();
    categorias();
    if(localStorage.getItem('favoritos')){
        favoritos = JSON.parse(localStorage.getItem('favoritos'));
        setFavoritos();
    }
})

window.addEventListener('hashchange', (hash) => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    counter=1;
    if(location.hash == '#Home'){
        recientes(counter);
    }
    let newHash = location.hash;   
    newHash = newHash.split('/');
    if(newHash[1] == 'Movie'){
        searchMovie(newHash[3])
    }
    if(newHash[1] == 'Categoria'){
        searchCategoria(newHash[3],newHash[2],counter)
    }
    if(newHash[1] == 'search'){
        searchValue(newHash[2],counter)
    }
})

const home = document.querySelector('.nav__navegation__logo');

home.addEventListener('click' , () => {
    location.hash = 'Home'
});

const btnShowMoreMovies = document.querySelector('.moreMovies');

let counter = 1;

btnShowMoreMovies.addEventListener('click' , () => {
    let newHash = location.hash;   
    newHash = newHash.split('/');
    counter++;
    if(newHash[0] == '#Home'){
        recientes(counter);
    }
    if(newHash[1] == 'Categoria'){
        searchCategoria(newHash[3],newHash[2] ,counter)
    }
    if(newHash[1] == 'search'){
        searchValue(newHash[2],counter)
    }
});


