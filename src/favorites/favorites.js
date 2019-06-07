import '../utils/check-auth.js';
import FavoritesApp from '../favorites/FavoritesApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('favorites-list');
auth.onAuthStateChanged(() => {
    const app = new FavoritesApp();
    root.appendChild(app.render());

});