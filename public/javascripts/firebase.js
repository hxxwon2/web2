
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDfWCFQBSgpR3dP-WIGkdm3ovOkngEu9UA",
    authDomain: "fir-26ee9.firebaseapp.com",
    projectId: "fir-26ee9",
    storageBucket: "fir-26ee9.appspot.com",
    messagingSenderId: "720989580005",
    appId: "1:720989580005:web:aa332d26fcb91b1704820c",
    measurementId: "G-Q09JKRCZ2E"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);