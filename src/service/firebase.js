import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyD3Ojs7UoqFYvKkp_0rHJDWN6E6c9Qh6tU',
    authDomain: 'pokenon-game.firebaseapp.com',
    databaseURL: 'https://pokenon-game-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'pokenon-game',
    storageBucket: 'pokenon-game.appspot.com',
    messagingSenderId: '970750674998',
    appId: '1:970750674998:web:c0eca2c176f9861a60b097',
};
firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();
export default database;
