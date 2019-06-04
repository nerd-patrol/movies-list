// import QUERY from '../QUERY.js';
const URL = 'https://api.themoviedb.org/3/discover/movie?api_key=01ffca472a1ddcf1fd7f2a8c09e99d98&language=en-US';

const api = {
    getMovies() {        
        // const query = QUERY.stringify(queryProps);
        // const url = `${URL}?${query}`;

        return fetch(URL)
            .then(response => response.json());
    }
};

export default api;