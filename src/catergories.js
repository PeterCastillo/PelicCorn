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




