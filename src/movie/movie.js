import MovieApp from './MovieApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('movie-app');

auth.onAuthStateChanged(() => {
    const movieApp = new MovieApp();
    root.appendChild(movieApp.render());

});