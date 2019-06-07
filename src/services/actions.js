import { auth, userFavoritesRef, movieFavoritesRef } from './firebase.js';


export function getUserMovieFavoritesRef(id) {
    const userMovieRef = userFavoritesRef
        .child(auth.currentUser.uid)
        .child(id);
    return userMovieRef;
}

export function getMovieUserFavoritesRef(id) {
    const movieUserRef = movieFavoritesRef
        .child(id)
        .child(auth.currentUser.uid);
    return movieUserRef;
} 

export function updateFavorite(movie, makeFavorite) {
    const id = movie.id;
    const userMovieRef = getUserMovieFavoritesRef(id);  
    const movieUserRef = getMovieUserFavoritesRef(id);
    const currentUser = auth.currentUser;
            
    if(makeFavorite) {
        userMovieRef.set({
            id: movie.id, 
            title: movie.title,
            poster_path: movie.poster_path
        });
        movieUserRef.set({ 
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL 
        });
    }
    else { 
        userMovieRef.remove();
        movieUserRef.remove();
    }
}