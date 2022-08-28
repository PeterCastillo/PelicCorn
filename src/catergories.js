const categoriasContainter = document.querySelector('.nav__categories')

const categorias = async() => {
    const {data} = await api(`genre/movie/list`);
    const categories = await data.genres
    categories.forEach(element => {
        if(element.name == 'Documentary'|| element.name == 'Science Fiction' || element.name == 'TV Movie'){
            return
        }
        let span = document.createElement('span');
        span.innerHTML = element.name;
        span.classList.add('nav__categories__category');
        span.dataset.id = element.id;
        fragmento.appendChild(span);
        categoriasContainter.appendChild(fragmento)
    });
};

categoriasContainter.addEventListener('click' , (e) => {
    selectCategoria(e);
});

const selectCategoria = (e) => {
    if(e.target.hasAttribute('data-id')){
        location.hash = `/Categoria/${e.target.innerHTML}/${e.target.dataset.id}`
    }
};

const searchCategoria = async(id, category) => {
    const {data} = await api('discover/movie', {
        params: {
            with_genres: id,
        },
    });
    const movies = data.results;
    moviesSelected(movies,category);
};



