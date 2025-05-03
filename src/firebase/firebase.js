// src/firebase/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBclJLv4Ol_GgQd0nc7cDsOg0N_ySKD818',
  authDomain: 'login-form-204ae.firebaseapp.com',
  projectId: 'login-form-204ae',
  storageBucket: 'login-form-204ae.firebasestorage.app',
  messagingSenderId: '564361433358',
  appId: '1:564361433358:web:3ff8fe4c844076d37d475f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication and Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);
