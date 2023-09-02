import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"


const firebaseConfig = {
  apiKey: "AIzaSyBKCtPSQfMY2sKtt9Nt1tK6ysV4mk4xDLM",
  authDomain: "chatapp-c7ee0.firebaseapp.com",
  projectId: "chatapp-c7ee0",
  storageBucket: "chatapp-c7ee0.appspot.com",
  messagingSenderId: "568237700791",
  appId: "1:568237700791:web:c6b3c04a33058b3cf77f32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

  export {db}
