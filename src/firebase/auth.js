import { auth }from './firebase';
import PasswordForgetPage from '../pages/PasswordForget';

//Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

//Sign In 
export const doSignInWithEmailAndPassword = (email, passsword) =>
  auth.signInWithEmailAndPassword(email, password);

//Sign Out
export const doSignOut = () =>
  auth.signOut();

//Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

//Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);