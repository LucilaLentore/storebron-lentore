import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCXIZ130NpcxI7TUkpuJxnqlyu8D5SqcOQ",
    authDomain: "storebron-lentore.firebaseapp.com",
    projectId: "storebron-lentore",
    storageBucket: "storebron-lentore.appspot.com",
    messagingSenderId: "480902825124",
    appId: "1:480902825124:web:a4ed73b7435c66a5fd1231"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();