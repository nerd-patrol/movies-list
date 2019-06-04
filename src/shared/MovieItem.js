import Component from '../Component.js';

class MovieItem extends Component {


    renderTemplate() {
        const movie = this.props.movie;
        return /*html*/ `
            <li>
                <p class="movie-title">${movie.title}</p>
                <img src="http://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} movie poster">
            </li>
        `;
    }
}

export default MovieItem;