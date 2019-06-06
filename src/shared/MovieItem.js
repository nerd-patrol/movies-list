import Component from '../Component.js';
import Favorite from '../shared/Favorite.js';
import { updateFavorite, getUserMovieFavoritesRef } from '../services/actions.js';
import UserList from '../users/UserList.js';

class MovieItem extends Component {

    render() {
        const dom = this.renderDOM();
        const movie = this.props.movie;
        
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

        const userList = new UserList();
        dom.appendChild(userList.render());
        
        
        return dom;
    }

    renderTemplate() {
        const movie = this.props.movie;

        if(movie.poster_path) {
            return /*html*/ `
                <li>
                    <div class="favorite-container"></div>
                    <p class="movie-title">${movie.title}</p>
                    <img src="http://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} movie poster">
                    <a href="./movie.html?id=${movie.id}">
                        <h2>${movie.title}</h2>
                    </a>
                </li>
            `;
        }
        return /*html*/ `
        <li>
            <div class="favorite-container"></div>
            <p class="movie-title">${movie.title}</p>
            <img src="./assets/poster-placeholder.jpg" alt="${movie.title} movie poster">
        </li>
    `;
    }
}

export default MovieItem;