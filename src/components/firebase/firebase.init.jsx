// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3IlZwDcehRrT7KrVI77ITSjCNXJzCTyc",
  authDomain: "news-dragon-d51de.firebaseapp.com",
  projectId: "news-dragon-d51de",
  storageBucket: "news-dragon-d51de.appspot.com",
  messagingSenderId: "562977608324",
  appId: "1:562977608324:web:64491bc2fcaac4b3d2e8d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;