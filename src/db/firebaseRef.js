// Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwVOTQdigJe446DKvTTaSuQ--ChWtlVYU",
  authDomain: "coop-buckets.firebaseapp.com",
  databaseURL: "https://coop-buckets-default-rtdb.firebaseio.com",
  projectId: "coop-buckets",
  storageBucket: "coop-buckets.appspot.com",
  messagingSenderId: "677776379916",
  appId: "1:677776379916:web:f58445ba6ecf6017eb1e29",
};

export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const db = getDatabase(firebaseApp);

// export const bucketsRef = ref(db, "buckets");
