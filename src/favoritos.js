const favoritosContainer = document.querySelector('.Favoritos')

let favoritos = {};

containerMovies.addEventListener('click', (e) => {
    if(e.target.classList.contains('Favorito')){
        getFavoritos(e.target.parentElement.parentElement.parentElement,e.target.dataset.id)
    }
    if(e.target.classList.contains('favoritedrop')){
        delete favoritos[e.target.dataset.id];
        setFavoritos();
    }
});

const getFavoritos = (objeto,id) => {
    const movie = {
        img: objeto.querySelector('img').src,
        id: id,
        nombre: objeto.querySelector('img').alt
    }
    favoritos[movie.id] = movie;
    setFavoritos();
}

const setFavoritos = () => {
    favoritosContainer.innerHTML = ''
    Object.values(favoritos).forEach(element => {
        let div = document.createElement('div');
        div.classList.add('movie-mini');
        const divContent = `
            <img class="movie__img Selected" src="${element.img}" alt="${element.nombre}" data-id="${element.id}">
            <div class="movie-mini-hover favoritedrop" data-id=${element.id}><i class="fa-solid fa-x favoritedrop" data-id=${element.id}></i></div>
        `
        div.innerHTML = divContent
        fragmento.appendChild(div);
        favoritosContainer.appendChild(fragmento)
    });
};

