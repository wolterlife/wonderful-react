import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA5LVltxs8yklY4Zuh5C1iBfzYmRJ0xGtc',
  authDomain: 'itechart2021pizza.firebaseapp.com',
  projectId: 'itechart2021pizza',
  storageBucket: 'itechart2021pizza.appspot.com',
  messagingSenderId: '443731670073',
  appId: '1:443731670073:web:e0ef736e4783b4601749e8',
  databaseURL: 'https://itechart2021pizza-default-rtdb.europe-west1.firebasedatabase.app/',
};

const firebase = initializeApp(firebaseConfig);

export { ref, push, get };

export const database = getDatabase(firebase);
