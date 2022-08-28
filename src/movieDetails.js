const containerMovies = document.querySelector('section')

containerMovies.addEventListener('click' , (e) => {
    settMovie(e);
})

const settMovie = async(e) => {
    if(e.target.hasAttribute('data-id')){
        const nombre = e.target.parentElement.querySelector('img');
        location.hash = `/Movie/${nombre.alt}/${e.target.dataset.id}`
    }
}

const searchMovie = async(id) =>{
    const {data:movie} = await api(`movie/${id}`);
    console.log(movie)
    movieSelected(movie);
}

const movieSelected = (movie) => {
    containerMovies.querySelector('span').textContent = 'Movie'
    containerMovies.querySelector('div .seccion__recientes__movies').innerHTML = '';
    let div = document.createElement('div');
    div.classList.add('movie__details')
    const divContent = `
    <div class="movie__details__img"><img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}"></div>
    <div class="movie__details__info">
        <div>
            <span><b>${movie.title}</b></span>
            <p><b>Sinopsis: </b>${movie.overview}</p>
        </div>
        <div>
            <span><b>Generos: </b>${movie.genres.map((element) =>{
            return (
                element.name
            )
            }).join(' , ')}</span>
            <button data-id="${movie.id}">Añadir a Favoritos</button>
        </div>
    </div>
    `
    div.innerHTML = divContent;
    fragmento.appendChild(div);
    moviesContainer.appendChild(fragmento);
};
