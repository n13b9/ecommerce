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


export const createUserProfileDocument = async(userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists){
		const {displayName,email} =userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch(error){
			console.log('error creating user',error.message);
		}
	}

	return userRef;
} 

firebase.initializeApp(config);


export const auth =firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
