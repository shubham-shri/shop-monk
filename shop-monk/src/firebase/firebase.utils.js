import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAF-ws7_Hge73zo5Fubbj1cT4Aa3OPuXC0',
  authDomain: 'shop-monk-4708a.firebaseapp.com',
  databaseURL: 'https://shop-monk-4708a.firebaseio.com',
  projectId: 'shop-monk-4708a',
  storageBucket: 'shop-monk-4708a.appspot.com',
  messagingSenderId: '645662342689',
  appId: '1:645662342689:web:4262441e6231b4e6972d60',
  measurementId: 'G-Z70DJEX72Y',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
