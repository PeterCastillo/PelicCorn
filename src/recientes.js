const recientesContainer = document.querySelector('.seccion__recientes__movies');

const recientes = async() => {
    const {data} = await api(`discover/movie`,)
    const movies = await data.results
    movies.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('movie');
        div.dataset.id = element.id
        const divContent = `
            <img class="movie__img" src="https://image.tmdb.org/t/p/w300${element.poster_path}" alt="${element.title}">
            <span class="movie__name">${element.title}</span>
            <div class="movie__info" date-id="${element.id}">
                <div>
                    <span>${element.title}</span>
                </div>
                <p>Castillo Canchari</p>
            </div>
        `
        div.innerHTML = divContent
        fragmento.appendChild(div);
        recientesContainer.appendChild(fragmento)
    });
}