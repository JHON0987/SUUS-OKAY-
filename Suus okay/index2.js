import {saveTask} from './firebase2.js';
window.addEventListener('DOMContentLoaded',() =>{

})

const login = document.getElementById('register')

//guerdar los datos correo y contraseña

login.addEventListener('submit', (e) =>{
    e.preventDefault()
   //console.log('enviado')
   const correo = login['correo']
   const contrasena = login['contrasena']
   const confirmar_contrasena = login['confirmar_contrasena']

   //console.log(correo.value, contraseña.value)
   saveTask (correo.value, contrasena.value, confirmar_contrasena.value)
   login.reset()
})