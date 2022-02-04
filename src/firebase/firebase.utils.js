import firebase from 'firebase/compat/app'; // this is used to import firebase
import 'firebase/compat/firestore'; // but we need to import firebase in the first line that gives us the ability to do these two functions
import 'firebase/compat/auth';

const firebaseConfig = {
  // this code snippet is copied from the firebase website at register app page
  apiKey: 'AIzaSyDry_3TIDD8Y-MojvaqbVCTIWrmhHwzPl4',
  authDomain: 'crwn-db-b5be5.firebaseapp.com',
  projectId: 'crwn-db-b5be5',
  storageBucket: 'crwn-db-b5be5.appspot.com',
  messagingSenderId: '918888525031',
  appId: '1:918888525031:web:c8aeb189068519f598c642'
};

export const createUserProfileDoc = async (userAuth, additionData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`); // this is a way to gather data form the firestore database

  const snapShot = await userRef.get();

  console.log(snapShot);
};

firebase.initializeApp(firebaseConfig); // this code will make for configurring the app

export const auth = firebase.auth();
export const firestore = firebase.firestore(); // here we have exported both the firestore and the auth

const provider = new firebase.auth.GoogleAuthProvider(); // this gives us the access to the google auth provider
provider.setCustomParameters({ prompt: 'select_account' }); // this sets the prompt to 'select_account'
export const signInWithGoogle = () => auth.signInWithPopup(provider); // this will redirect the google auth provider

export default firebase;
