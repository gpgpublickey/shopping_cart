// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, where, query, doc, setDoc, addDoc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALsOJ1MOXZO0i5nIzoQI1Ew9tNNyfOcyk",
  authDomain: "mapanimal-adopt.firebaseapp.com",
  projectId: "mapanimal-adopt",
  storageBucket: "mapanimal-adopt.appspot.com",
  messagingSenderId: "149052958524",
  appId: "1:149052958524:web:fc375c4e60c15883022039",
  measurementId: "G-WWB61Q259X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirebase = () => { return app }

export const getDb = () => { return getFirestore() }

export const getDocuments = async (collectionName) => await getDocs(collection(getDb(), collectionName));

export const getDocumentsById = async (collectionName, id) => await getDocs(query(collection(getDb(), collectionName), where("id", "==", id)));

export const getDocumentsByAttribute = async (collectionName, attribute, value) => await getDocs(query(collection(getDb(), collectionName), where(attribute, "==", value)));

export const addDocumentWithId = async (collectionName, id, data) => await setDoc(doc(getDb(), collectionName, id), data);

export const addDocument = async (collectionName, data) => await addDoc(collection(getDb(), collectionName), data);