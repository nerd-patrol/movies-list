import Component from '../Component.js';
import Favorite from '../shared/Favorite.js';
import { updateFavorite, getUserMovieFavoritesRef } from '../services/actions.js';
import UserList from '../users/UserList.js';
import { movieFavoritesRef } from '../services/firebase.js';

class MovieDetail extends Component {
    
    render() {
        const dom = this.renderDOM();
        const movie = this.props.movie;
        
        if(movie) {
            const userMovieRef = getUserMovieFavoritesRef(movie.id);
            
            const container = dom.querySelector('.favorite-container');
            const favorite = new Favorite({ 
                isFavorite: false,
                onFavorite: (makeFavorite) => {
                    updateFavorite(movie, makeFavorite);
                }
            });
            container.appendChild(favorite.render());
    
            userMovieRef.on('value', snapshot => {
                const isFavorite = Boolean(snapshot.val());
                favorite.update({ isFavorite });
            });
            
            const userList = new UserList({ users: [] });
            dom.appendChild(userList.render());
    
            const moviesUserRef = movieFavoritesRef
                .child(movie.id);
    
            moviesUserRef.on('value', snapshot => {
                const value = snapshot.val();
                const users = value ? Object.values(value) : [];
                userList.update({ users });
            });
            
        }


        return dom;
    }

    renderTemplate() {
        const movie = this.props.movie;
        if(!movie) {
            return `<div></div>`;
        }
        return /*html*/ ` 
            <section>
                <h2>${movie.title}</h2>
                <img src="http://image.tmdb.org/t/p/w200/${movie.poster_path}">
                <p>${movie.overview}</p>
                <div class="favorite-container"></div>
            </section>
        `;
    }
}
export default MovieDetail;