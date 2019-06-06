//movie_url: https://api.themoviedb.org/3/movie/420817?api_key=01ffca472a1ddcf1fd7f2a8c09e99d98&language=en-US

const URL = 'https://api.themoviedb.org/3/discover/movie?api_key=01ffca472a1ddcf1fd7f2a8c09e99d98&language=en-US';

const key = '01ffca472a1ddcf1fd7f2a8c09e99d98';

const DETAIL_URL = 'https://api.themoviedb.org/3/movie';

const api = {
    getMovies(query) {
        if(query) {
            return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&page=1&include_adult=false`)
                .then(response => response.json());
        }
        else {
            return fetch(URL).then(response => response.json());
        }
    },

    getMovie(id) {
        const url = `${DETAIL_URL}/${id}?api_key=${key}`;

        return fetch(url).then(response => response.json());
    }
};

export default api;