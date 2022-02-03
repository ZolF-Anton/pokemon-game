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
class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        });
    };
    offPokemonSoket = () => {
        this.database.ref('pokemons').off();
    };

    getPokemonsOnce = async () => {
        return await this.database
            .ref('pokemons')
            .once('value')
            .then((snapshot) => snapshot.val());
    };
    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    };
    addPokemon = (data, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database
            .ref('pokemons/' + newKey)
            .set(data)
            .then(() => cb());
    };
}

export default Firebase;
