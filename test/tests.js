import { app } from '../src/services/firebase.js';
import './html-equal.js';
import './Profile.test.js';
import './MovieDetail.test.js';
import './useritem.test.js';

QUnit.done(() => {
    app.delete();
});