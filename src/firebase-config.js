import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCcP7Tie23j1FHH-iaJdKEN6T9Ni1TKNjA",
  authDomain:"mi-store-17462.firebaseapp.com" ,
  projectId: "mi-store-17462",
  storageBucket: "mi-store-17462.appspot.com",
  messagingSenderId: "163149132333",
  appId: "1:163149132333:web:5350d154462104d895fea4",
  measurementId: "G-V7XM0YQ7Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
