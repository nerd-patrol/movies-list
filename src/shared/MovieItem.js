import Component from '../Component.js';
import Favorite from '../shared/Favorite.js';
import { userFavoritesRef } from '../services/firebase.js';

class MovieItem extends Component {

    render() {
        const dom = this.renderDOM();
        const movie = this.props.movie;

        const container = dom.querySelector('.favorite-container');
        const favorite = new Favorite({ 
            isFavorite: false,
            onFavorite: (makeFavorite) => {
                if(makeFavorite) {
                    userFavoritesRef.set({
                        id: movie.id, 
                        title: movie.title,
                        poster_path: movie.poster_path,

                    });
                }
                //TODO: make remove
            }

        });


        container.appendChild(favorite.render());

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