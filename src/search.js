const search = document.querySelector('.search');
const searchBtn = document.querySelector('.searchBtn');

searchBtn.addEventListener('click' , () => {
    location.hash = `/search/${search.value}`;
    search.value = '';
});

const searchValue = async(query,page) => {
    const { data } = await api('search/movie', {
        params: {
            query,
            page:page
        }
    });
    const movies = data.results;
    
    if(page > 1){
        settMovies(movies);
        return
    }
    
    if(movies.length < 1){
        moviesContainer.innerHTML = ''; 
        moviesType.innerHTML = query
        let div = document.createElement('div');
        div.classList.add('error');
        let span = document.createElement('span');
        span.innerHTML = `<i class="fa-solid fa-magnifying-glass-minus"></i> No encontramos resultados.
        Verifica la búsqueda o intenta con otros términos`
        div.appendChild(span);
        fragmento.appendChild(div)
        moviesContainer.appendChild(fragmento)
        return
    }
    moviesSelected(movies,query)
};