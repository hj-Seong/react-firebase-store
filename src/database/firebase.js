// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // 본인의 파이어베이스 값 넣을 것
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
