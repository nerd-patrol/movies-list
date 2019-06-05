import FavoritesApp from '../favorites/FavoritesApp.js';

const root = document.getElementById('favorites-list');
const favoritesApp = new FavoritesApp();
root.appendChild(favoritesApp.render());
