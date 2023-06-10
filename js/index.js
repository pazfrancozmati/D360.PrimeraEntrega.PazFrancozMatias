/*Cuando hago click en la clase button le agrego y le saco la clase, eso es hacer un TOGGLE de la clase activo */
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})