// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhTUL5OKZkfeMwgU_K82QizgbLrkSbE5E",
  authDomain: "auth-kodigo-music.firebaseapp.com",
  projectId: "auth-kodigo-music",
  storageBucket: "auth-kodigo-music.appspot.com",
  messagingSenderId: "1040867161455",
  appId: "1:1040867161455:web:7c7c855185870ed99b249a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);