const search = document.querySelector('.search');
const searchBtn = document.querySelector('.searchBtn');

searchBtn.addEventListener('click' , () => {
    location.hash = `/search/${search.value}`;
});

const searchValue = async(query) => {
    const { data } = await api('search/movie', {
        params: {
            query,
        }
    });
    const movies = data.results;
    moviesSelected(movies,query)
};