import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';
import api from '../services/api.js';
import Search from './Search.js';

class App extends Component {

    render() {

        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const search = new Search();
        const searchDOM = search.render();
        dom.insertBefore(searchDOM, main);

        const movieList = new MovieList({ movies: [] });
        const movieListDOM = movieList.render();
        dom.appendChild(movieListDOM, main);

        function loadMovies() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('query');

            api.getMovies(search)
                .then(movies => {
                    movieList.update({ movies: movies.results });
                })
                .catch(err => {
                    console.log(err);
                });
        }


        window.addEventListener('hashchange', () => {
            loadMovies();
        });

        loadMovies();
    
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;