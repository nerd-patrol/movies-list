import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieDetail from './MovieDetail.js';
import QUERY from '../QUERY.js';
import api from '../services/api.js';

class MovieApp extends Component {
    
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const movieDetail = new MovieDetail();
        main.appendChild(movieDetail.render());

        const search = window.location.search.slice(1);

        const query = QUERY.parse(search);
        const id = query.id;

        if(!id) {
            window.location = './index.html';
        }

        api.getMovie(id)
            .then(movie => {
                console.log(movie);
            })
            .catch(err => {
                console.log(err);
            });

        return dom;
    }

    renderTemplate() {
        return /*html*/ ` 
            <div>
                <main>
                </main>    
            </div>
        `;
    }
}
export default MovieApp;