import Component from '../Component.js';
import Header from '../shared/Header.js';
import { auth, userFavoritesRef } from '../services/firebase.js';
import MovieList from '../shared/MovieList.js';

class FavoritesApp extends Component {
    
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const movieList = new MovieList({ movies: [] });
        main.appendChild(movieList.render());

        userFavoritesRef
            .child(auth.currentUser.uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const movies = value ? Object.values(value) : [];
                movieList.update({ movies });
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
export default FavoritesApp;