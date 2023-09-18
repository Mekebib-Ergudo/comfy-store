// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyByhYA1AUi7JOnnSbOZYafZg2uJfRbbWe0",
	authDomain: "comfy-store-70cfe.firebaseapp.com",
	projectId: "comfy-store-70cfe",
	storageBucket: "comfy-store-70cfe.appspot.com",
	messagingSenderId: "171762696812",
	appId: "1:171762696812:web:233b35564fac0fe1da4e49",
	measurementId: "G-J9SR7K8WFE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
