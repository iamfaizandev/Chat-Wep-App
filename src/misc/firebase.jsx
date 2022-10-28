import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyB1VRXp637RAH6K5vzmJq0DPA0mx-EObPs',
  authDomain: 'chat-web-app-dbc03.firebaseapp.com',
  databaseURL: 'https://chat-web-app-dbc03-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'chat-web-app-dbc03',
  storageBucket: 'chat-web-app-dbc03.appspot.com',
  messagingSenderId: '929888561951',
  appId: '1:929888561951:web:e57106ba58ac577572de2a',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
