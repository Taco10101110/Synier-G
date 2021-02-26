import firebase from 'firebase'
import 'firebase/storage'

let initFlag = false
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCcuP8oRU2xg2uiUdmjwVl4G-ymGmMPQ1Q",
    authDomain: "synerg-bd0bf.firebaseapp.com",
    projectId: "synerg-bd0bf",
    storageBucket: "synerg-bd0bf.appspot.com",
    messagingSenderId: "1059739406351",
    appId: "1:1059739406351:web:6956cd5f70b091200ed37a",
    measurementId: "G-HVRSP6C8LJ"
  })
  console.log('Init Firebase')
  initFlag = true
}

const firestore = firebase.firestore()
const firestorage = firebase.storage()
const settings = { timestampsInSnapshots: true }
if (initFlag === true) {
  firestore.settings(settings)
}

export { firebase }
export { firestore }
export { firestorage }
