import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCRTZzistElH2BlSrGUaJlkz_Qe4p1blUU",
  authDomain: "terrapin-e3cc8.firebaseapp.com",
  databaseURL: "https://terrapin-e3cc8.firebaseio.com",
  projectId: "terrapin-e3cc8",
  storageBucket: "terrapin-e3cc8.appspot.com",
  messagingSenderId: "177174291331"
};

if (!firebase.apps.length) {
firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};