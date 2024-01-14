import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "book-store-ed91e.firebaseapp.com",
  projectId: "book-store-ed91e",
  storageBucket: "book-store-ed91e.appspot.com",
  messagingSenderId: "410900419205",
  appId: "1:410900419205:web:ff39fc809d7b4c27c04fec"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);