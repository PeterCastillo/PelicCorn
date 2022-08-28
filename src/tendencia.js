const tendenciaContainer = document.querySelector('.tendencia')

const tendencia = async() => {
    const {data} = await api(`trending/movie/day`)
    const movies = await data.results
    for (let index = 0; index < 7; index++) {
        const element = movies[index];
        let div = document.createElement('div');
        div.classList.add('movie-mini');
        const divContent = `
            <img class="movie__img" src="https://image.tmdb.org/t/p/w300${element.poster_path}" alt="${element.title}" data-id="${element.id}">
        `
        div.innerHTML = divContent
        fragmento.appendChild(div);
        tendenciaContainer.appendChild(fragmento)
    }
    // movies.forEach(element => {
    //     let div = document.createElement('div');
    //     div.classList.add('movie-mini');
    //     const divContent = `
    //         <img class="movie__img" src="https://image.tmdb.org/t/p/w300${element.poster_path}" alt="">
    //     `
    //     div.innerHTML = divContent
    //     fragmento.appendChild(div);
    //     tendencia.appendChild(fragmento)
    // })
}
