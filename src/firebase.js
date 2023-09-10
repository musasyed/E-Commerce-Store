import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBJABg2MAeuH7tuIpMT0nZ_wx0rrlbIAwc",
    authDomain: "ks-ecommerce-f8eb9.firebaseapp.com",
    projectId: "ks-ecommerce-f8eb9",
    storageBucket: "ks-ecommerce-f8eb9.appspot.com",
    messagingSenderId: "963136664092",
    appId: "1:963136664092:web:3bf747c332613eb4b1e5d9",
    measurementId: "G-WVJBJDBZFT"
  };

  const firebaseAPP=initializeApp(firebaseConfig);
  export const auth=getAuth(firebaseAPP);