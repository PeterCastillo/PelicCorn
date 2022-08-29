const moviesContainer = document.querySelector('.seccion__recientes__movies');
const moviesType = document.querySelector('.seccion__name')

const recientes = async() => {
    const {data} = await api(`discover/movie`,)
    const movies = await data.results
    moviesSelected(movies , 'Recientes')
};

const moviesSelected = (movies , type) => {
    moviesType.innerHTML = type;
    moviesContainer.innerHTML = '';
    movies.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('movie');
        const divContent = `
            <img class="movie__img Selected" src="https://image.tmdb.org/t/p/w300${element.poster_path}" alt="${element.title}" data-id="${element.id}">
            <span class="movie__name">${element.title}</span>
            <div class="movie__info Selected" data-id="${element.id}">
                <div>
                    <span>${element.title}</span>
                    <i class="fa-solid fa-plus Favorito" data-id="${element.id}"></i>
                </div>
                <span>Estreno: ${element.release_date}</span>
            </div>
        `
        div.innerHTML = divContent
        fragmento.appendChild(div);
        moviesContainer.appendChild(fragmento)
    });
};