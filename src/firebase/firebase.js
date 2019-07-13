import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAq6g9vjxxKeZqaQjfBROsiJYCXpt_3EYQ",
  authDomain: "terrapin-56e1f.firebaseapp.com",
  databaseURL: "https://terrapin-56e1f.firebaseio.com",
  projectId: "terrapin-56e1f",
  storageBucket: "",
  messagingSenderId: "168122906242"
};

if (!firebase.apps.length) {
firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};