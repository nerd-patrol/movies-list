onst config = {
    apiKey: "AIzaSyBFpUAntyJ_J7g3mCpYEiO2N4AbLRwrBlw",
   authDomain: "movie-list-ebd83.firebaseapp.com",
   databaseURL: "https://movie-list-ebd83.firebaseio.com",
   projectId: "movie-list-ebd83",
   storageBucket: "movie-list-ebd83.appspot.com",
   messagingSenderId: "490440378511",
   appId: "1:490440378511:web:f8f54d5acce5e35f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();