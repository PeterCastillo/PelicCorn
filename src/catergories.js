const API_KEY = 'ba3b03da4d4ac3477d49e520f15a18e5';
const API = 'https://api.themoviedb.org/3/'

const categoriesContainer = document.querySelector('.nav__categories')
const fragmento = document.createDocumentFragment();

const fetchData = async() => {
    const res = await fetch(`${API}genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();
    const categories = data.genres
    categories.forEach(element => {
        let span = document.createElement('span');
        span.innerHTML = element.name;
        span.classList.add('nav__categories__category');
        span.dataset.id = element.id;
        fragmento.appendChild(span);
        categoriesContainer.appendChild(fragmento)
    });
};

fetchData();



