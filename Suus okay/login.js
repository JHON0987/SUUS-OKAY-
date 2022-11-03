import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc} from "firebase/firestore";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js&quot";

// Initialize database
const auth =getAuth(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//llamo la database
const db = getFirestore (app);

//conectamos los campos
export const loginOut = document.querySelector('#login');
loginOut.addEventListener('submit',(e) =>{
addDoc(collection(db,"inicioSesion"), {email,pass});

    
    const email = document.querySelector('#correo').value;
    const pass = document.querySelector('#contraseña').value;

    console.log(email, pass);
})

//escucha los cambios de autenticacion

auth.onAuthStateChanged(email =>{
    if (email){
        email.getIdTokenResult().then(getIdTokenResult =>{
            email = getIdTokenResult.claims;
            setuoUI(email);
        });
        db.collection('modal').onSnapshot(snapshot =>{
            setupGuides(snapshot.docs);
        },err => console.log(err.message));

    }else{
        setupUI();
        setupGuides([])
    }
});

//Crear nuevo usuario

const loginOut = document.querySelector('#login');
loginOut.addEventListener('submit', (e)=>{
    e.preventDefault();
    db.collection('modal').add({
        
    })
})