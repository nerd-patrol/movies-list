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

            api.getMovies()
                .then(movies => {
                    movieList.update({ movies: movies.results });
                })
                .catch(err => {
                    console.log(err);
                });
        }

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