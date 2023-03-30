import { firebase } from '@react-native-firebase/firestore';
import 'firebase/firestore';

const firebaseConfig = {
  // votre configuration Firebase ici
  apiKey: "AIzaSyDHfTrO0MDF2tSad0RbWc55tyHcnpRCx0s",
  authDomain: "admisio-b235f.firebaseapp.com",
  projectId: "admisio-b235f",
  storageBucket: "admisio-b235f.appspot.com",
  messagingSenderId: "283612686555",
  appId: "1:283612686555:web:25ce49da057a23ee9884fe",
  databaseURL:"",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
