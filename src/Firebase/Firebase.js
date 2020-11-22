import * as Firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBv7nM7ZuaZ6VZWNVngISqTpjbXXOti2-0',
  authDomain: 'lifevessels.firebaseapp.com',
  databaseURL: 'https://lifevessels.firebaseio.com',
  projectId: 'lifevessels',
  storageBucket: 'lifevessels.appspot.com',
  messagingSenderId: '1001070360554',
  appId: '1:1001070360554:web:dd31de001186f9d3eca493',
  measurementId: 'G-Y7EZT4BTCX',
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;
