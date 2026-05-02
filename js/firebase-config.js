import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
// 1. Go to Firebase Console: https://console.firebase.google.com/
// 2. Create a project and add a Web App
// 3. Copy the firebaseConfig object below
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
let app, db;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase initialized successfully");
} catch (error) {
    console.error("Firebase initialization error. Make sure you replaced the config!", error);
}

export { db };
