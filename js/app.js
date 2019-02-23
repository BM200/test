/*
//vanilla javascript
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
/*
input.addEventListener('keyup', function(){
    h1.innerHTML = input.value;

})
input.addEventListener('keyup', ()=> h1.innerHTML = input.value);
*/
//VUE.js Crear instancia 
new Vue({
    el: 'main',

    data:{
        mensaje: 'Hola Baby XD :)',
        
    }
})