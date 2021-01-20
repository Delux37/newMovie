const urls = {
    api_key: '965927be031c047f8d9a7fddfe8f08bc',
    movie_list: 'https://api.themoviedb.org/3/list/1?api_key=965927be031c047f8d9a7fddfe8f08bc&language=en-US',
    genres: 'https://api.themoviedb.org/3/genre/movie/list?api_key=965927be031c047f8d9a7fddfe8f08bc&language=en-US',
    image: 'https://image.tmdb.org/t/p/w500/',
    filterByCategory: (category) => `https://api.themoviedb.org/3/discover/movie?api_key=965927be031c047f8d9a7fddfe8f08bc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${category}`,
    getDetail: (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=965927be031c047f8d9a7fddfe8f08bc&language=en-US`
}
export default urls;