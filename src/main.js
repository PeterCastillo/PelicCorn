window.addEventListener('load',() => { 
    location.hash = 'Home'
    recientes();
    tendencia();
    categorias();
})

window.addEventListener('hashchange', (hash) => {
    if(location.hash == '#Home'){
        recientes();
    }
    let newHash = location.hash;   
    newHash = newHash.split('/');
    if(newHash[1] == 'Movie'){
        searchMovie(newHash[3])
    }
    if(newHash[1] == 'Categoria'){
        searchCategoria(newHash[3],newHash[2])
    }
    if(newHash[1] == 'search'){
        searchValue(newHash[2])
    }
})

const home = document.querySelector('.nav__navegation__logo');

home.addEventListener('click' , () => {
    location.hash = 'Home'
});