import Component from '../Component.js';
import MovieItem from './MovieItem.js';

class MovieList extends Component {

    render() {
        const list = this.renderDOM();
        
        this.props.movies.forEach(movie => {
            const movieItem = new MovieItem({ movie });
            list.appendChild(movieItem.render());
        });

        return list;
    }

    renderTemplate() {
        return /*html*/ `
            <ul class="movie-list">

            </ul>
        `;
    }
}

export default MovieList;