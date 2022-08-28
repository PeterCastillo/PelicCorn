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
})
