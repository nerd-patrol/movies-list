import Component from '../Component.js';

class MovieDetail extends Component {
    
    render() {
        const dom = this.renderDOM();
        // const main = dom.querySelector('main');

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
            </section>
        `;
    }
}
export default MovieDetail;