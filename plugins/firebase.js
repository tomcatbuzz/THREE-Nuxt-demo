import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA8NPfbJUJeNCu-IrWIMb__rCt9hADdyJY',
  authDomain: 'csdwebpage.firebaseapp.com',
  databaseURL: 'https://csdwebpage.firebaseio.com',
  projectId: 'csdwebpage',
  storageBucket: 'csdwebpage.appspot.com',
  messagingSenderId: '168857655734',
  appId: '1:168857655734:web:6ae65c5a2aee7389fb8917',
  measurementId: 'G-8WBP40273M'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app, {})
export { db }
