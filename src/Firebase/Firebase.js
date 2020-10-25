import * as Firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCmmGbub9jlAGiG-cR8zuu9jp5gHN_AiB0',
  authDomain: 'blood-donars-63da7.firebaseapp.com',
  databaseURL: 'https://blood-donars-63da7.firebaseio.com',
  projectId: 'blood-donars-63da7',
  storageBucket: 'blood-donars-63da7.appspot.com',
  messagingSenderId: '563577097714',
  appId: '1:563577097714:web:785bb6ea8e3a2a8025af6b',
  measurementId: 'G-CDGZNX7PH3',
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();

export default Firebase;
