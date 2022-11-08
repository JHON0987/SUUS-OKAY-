import {saveTask} from './firebase.js';
window.addEventListener('DOMContentLoaded',() =>{

})

const login = document.getElementById('login')

//guerdar los datos correo y contraseña

login.addEventListener('submit', (e) =>{
    e.preventDefault()
   //console.log('enviado')
   const correo = login['correo']
   const contraseña = login['contraseña']

   //console.log(correo.value, contraseña.value)
   saveTask (correo.value, contraseña.value)
   login.reset()
})