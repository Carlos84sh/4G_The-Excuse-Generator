
let quien = ['el perro','el vecino','Maria','goku'];
let que = ['comio','baila','salta','duerme'];
let cuando =['ayer','siempre','despues de comer','to el dia'];

let resultado = Math.floor(Math.random()*4);



document.getElementById("ejercicio").innerHTML = quien[resultado]+" "+que[resultado]+" "+cuando[resultado];
