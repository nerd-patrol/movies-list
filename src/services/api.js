import QUERY from '../QUERY.js';
const URL = 'https://api.themoviedb.org/3';

const api = {
    getPersons(queryProps) {        
        const query = QUERY.stringify(queryProps);
        const url = `${URL}?${query}`;

        return fetch(url)
            .then(response => response.json());
    }
};

export default api;