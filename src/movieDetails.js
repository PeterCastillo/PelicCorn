const containerMovies = document.querySelector('section')

containerMovies.addEventListener('click' , (e) => {
    settMovie(e);
})

const settMovie = async(e) => {
    if(e.target.classList.contains('Selected')){
        const nombre = e.target.parentElement.querySelector('img');
        location.hash = `/Movie/${nombre.alt}/${e.target.dataset.id}`
    }
}

const getRelatedMovies = async(id) => {
    const {data} = await api(`/movie/${id}/recommendations`)
    const relatedMovies = data.results
    return relatedMovies
};


const searchMovie = async(id) =>{
    const {data:movie} = await api(`movie/${id}`);
    const related = await getRelatedMovies(id);
    movieSelected(movie, related);
}

const movieSelected = (movie, related) => {
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
            <button class="Favorito" data-id="${movie.id}">Añadir a Favoritos</button>
        </div>
    </div>
    `
    div.innerHTML = divContent;
    fragmento.appendChild(div);
    moviesContainer.appendChild(fragmento);

    let divRelated = document.createElement('div');
    divRelated.classList.add('related')


    let span = document.createElement('span');
    span.innerHTML = 'Movies Relacionadas';
    fragmento.appendChild(span);
    divRelated.appendChild(fragmento);

    if(related.length < 1){
        let div = document.createElement('div');
        div.classList.add('errorRelated');
        let span = document.createElement('span');
        span.innerHTML = `<i class="fa-solid fa-magnifying-glass-minus"></i> No encontramos movies relacionadas. Quizas luego.`
        div.appendChild(span);
        divRelated.appendChild(div);


        fragmento.appendChild(divRelated);
        moviesContainer.appendChild(fragmento);
        return
    }

    let divContinerRelated = document.createElement('div')
    related.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('movie-mini');
        const relatedContent = `
            <img class="movie__img Selected" src="https://image.tmdb.org/t/p/w300${element.poster_path}" alt="${element.title}" data-id="${element.id}">
        `
        div.innerHTML = relatedContent;
        fragmento.appendChild(div);
        divContinerRelated.appendChild(fragmento)
    });
    fragmento.appendChild(divContinerRelated)
    divRelated.appendChild(fragmento);

    fragmento.appendChild(divRelated);
    moviesContainer.appendChild(fragmento);
};
