import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database' 

const firebaseApp = firebase.initializeApp(
    {apiKey: "AIzaSyAz-YUyF_kRlI447zPOPIoyxC4KLqLOYps",
    authDomain: "chatbox-app-54823.firebaseapp.com",
    databaseURL: "https://chatbox-app-54823.firebaseio.com"}
)

const base = Rebase.createClass(firebaseApp.database())



export {firebaseApp}

export default base