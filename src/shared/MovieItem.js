import Component from '../Component.js';
import Favorite from '../shared/Favorite.js';

class MovieItem extends Component {

    render() {
        const dom = this.renderDOM();
        const movie = this.props.movie;

        const container = dom.querySelector('.favorite-container');
        const favorite = new Favorite();

        // })

        container.appendChild(favorite.render());

        return dom;
    }

    renderTemplate() {
        const movie = this.props.movie;
        return /*html*/ `
            <li>
                <div class="favorite-container"></div>
                <p class="movie-title">${movie.title}</p>
                <img src="http://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} movie poster">
            </li>
        `;
    }
}

export default MovieItem;