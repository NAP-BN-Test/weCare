import React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBCrk1jog8Dlr_QmfB-E2p0_bTVE5-8jTM',
  authDomain: 'we-care-52a94.firebaseapp.com',
  projectId: 'we-care-52a94',
  storageBucket: 'we-care-52a94.appspot.com',
  messagingSenderId: '608765061273',
  appId: '1:608765061273:web:ddc5f9e28e393c30aff008',
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export default () => {
  return {firebase, auth};
};
