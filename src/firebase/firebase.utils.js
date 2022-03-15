import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
  apiKey: "AIzaSyBpENdzI0bhXU5vqlrpA1DBXKRRLHnutGY",
  authDomain: "ecom-db-c39f2.firebaseapp.com",
  projectId: "ecom-db-c39f2",
  storageBucket: "ecom-db-c39f2.appspot.com",
  messagingSenderId: "1024660727558",
  appId: "1:1024660727558:web:ecbc32a3472b17f28ba087",
  measurementId: "G-PSZTJ3EM3W"
};


firebase.initializeApp(config);


export const auth =firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
