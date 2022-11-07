import {saveTasks} from './firebase.js';
window.addEventListener('DOMContentLoaded',() =>{

})

const login = document.getElementById('login')

//guerdar los datos correo y contraseña

login.addEventListener('submit', (e) =>{
    e.preventDefault()
    const correo = login [ 'correo' ]
    const contraseña = login [ 'contraseña' ]
    //console.log(correo,contraseña)

    saveTasks(correo.value, contraseña.value)
    login.reset()
})