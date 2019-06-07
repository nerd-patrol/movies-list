import Component from '../Component.js';
import Header from '../shared/Header.js';
import { auth, userFavoritesRef, usersRef } from '../services/firebase.js';
import MovieList from '../shared/MovieList.js';
import QUERY from '../QUERY.js';

class FavoritesApp extends Component {
    
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const movieList = new MovieList({ movies: [] });
        main.appendChild(movieList.render());

        const query = QUERY.parse(window.location.search);
        const uid = query.uid ? query.uid : auth.currentUser.uid;

        if(uid === auth.currentUser.uid) {
            header.update({ 
                title: 'Your Favorite Movies' 
            });
        }
        else {
            usersRef.child(uid).on('value', snapshot => {
                const user = snapshot.val();
                
                header.update({ 
                    title: `${user.displayName}'s Favorite Movies` 
                });
            });
        }

        userFavoritesRef
            .child(uid)
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