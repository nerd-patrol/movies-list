import Component from '../Component.js';

class MovieItem extends Component {


    renderTemplate() {
        return /*html*/ `
            <li>
                <p class="movie-title">Aladdin</p>
                <img src="/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg" alt="movie-poster">
            </li>
        `;
    }
}

export default MovieItem;