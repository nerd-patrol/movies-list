import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieDetail from './MovieDetail.js';
import QUERY from '../QUERY.js';
// import userFavoritesRef from '../services/firebase.js';

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
        console.log(id);
        
        if(!id) {
            window.location = './index.html';
        }

        console.log(QUERY.parse(search));

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