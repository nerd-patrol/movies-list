import MovieDetail from '../src/movie/MovieDetail.js';
const test = QUnit.test;

QUnit.module('MovieDetail Component');

test('renders. at all.', assert => {
    // arrange
    const movie = {
        title: 'Aladdin',
        poster_path: '3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg',
        overview: '"A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true."'
    };

    const movieDetail = new MovieDetail({ movie });

    const expected = /*html*/`
        <section>
            <h2>Aladdin</h2>
            <img src="http://image.tmdb.org/t/p/w200/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg">
            <p>"A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true."</p>
            <div class="favorite-container"></div>
        </section>
    `;

    // act
    const rendered = movieDetail.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});

test('if movie is null, return empty div', assert => {
    // arrange
    const movie = null;

    const movieDetail = new MovieDetail({ movie });

    const expected = /*html*/`
        <div></div>
    `;

    // act
    const rendered = movieDetail.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});