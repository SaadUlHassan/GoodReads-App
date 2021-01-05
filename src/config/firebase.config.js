import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDUUeP3XePCVLLCJXagt13vDN1h4cRkNro',
  authDomain: 'test-app-f390f.firebaseapp.com',
  databaseURL: 'https://test-app-f390f.firebaseio.com',
  projectId: 'test-app-f390f',
  storageBucket: 'test-app-f390f.appspot.com',
  messagingSenderId: '481713574897',
  appId: '1:481713574897:web:bcb360f8ba09b4d866ea50',
  measurementId: 'G-3BFM437B6L'
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export default firebase
