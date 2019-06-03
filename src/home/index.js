import '../utils/check-auth.js';
import App from './App.js';
import { auth } from '../services/firebase.js';

auth.onAuthStateChanged(user => {
    if(user) {
        console.log('we have a user');
    }
    else {
        console.log('no user');
    }
});

const root = document.getElementById('app');
const app = new App();
root.appendChild(app.render());