import UserItem from '../src/users/UserItem.js';
const test = QUnit.test;

QUnit.module('User Item Component');

test('renders. at all.', assert => {
    // arrange
    const user = {
        uid: '123',
        displayName: 'Person Person Fella',
        photoURL: 'http://image.tmdb.org/t/p/w200/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg'
    };

    const userItem = new UserItem({ user });

    const expected = /*html*/`
        <li>
        <a href="./favorites.html?uid=123">Person Person Fella</a>
        </li>
    `;

    // act
    const rendered = userItem.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});
