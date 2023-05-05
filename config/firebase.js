import { firebase } from '@react-native-firebase/firestore';
// import 'firebase/auth';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  // votre configuration Firebase ici
  apiKey: "AIzaSyC0u0qH1gkeXVexbeWVESUoHeDkwygXRd0",
  authDomain: "admisio-adb73.firebaseapp.com",
  projectId: "admisio-adb73",
  storageBucket: "admisio-adb73.appspot.com",
  messagingSenderId: "548181428134",
  appId: "1:548181428134:web:faadba81ae27c42bd5b167",
  measurementId: "G-WYN0FJZVDR",
  databaseURL:"",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const auth = firebase.auth();
export { auth };

export default firebase;

// Utiliser en cas de auth non reconnue(firebase)
// import auth from '@react-native-firebase/auth';
// const firebaseAuth = auth();
// export { firebaseAuth };
