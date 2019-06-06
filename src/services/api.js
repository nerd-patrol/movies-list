//movie_url: https://api.themoviedb.org/3/movie/420817?api_key=01ffca472a1ddcf1fd7f2a8c09e99d98&language=en-US

const BASE_URL = 'https://api.themoviedb.org/3';
const key = '01ffca472a1ddcf1fd7f2a8c09e99d98';

const URL = `${BASE_URL}/discover/movie?api_key=${key}&language=en-US`;



const api = {
    getMovies(query) {
        if(query) {
            return fetch(`${BASE_URL}/search/movie?api_key=${key}&query=${query}&page=1&include_adult=false`)
                .then(response => response.json());
        }
        else {
            return fetch(URL).then(response => response.json());
        }
    },

    getMovie(id) {
        const url = `${BASE_URL}/movie/${id}?api_key=${key}`;

        return fetch(url).then(response => response.json());
    }
};

export default api;