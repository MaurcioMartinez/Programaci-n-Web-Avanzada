document.getElementById("lenguajes").innerHTML += '<li id = "c"> C</li>';

//document.getElementById('lenguajes').innerHTML = '';

document.querySelector('h1').textContent += " más populares en la web";

document.querySelector('h1').setAttribute('id','titulojs');
document.querySelector('h1').id = "titulo js 2";

// Cambia la clase del elemneto
var titulo = document.querySelector('h1');
titulo.classList.remove('titulo');
titulo.classList.add('encabezado');
console.log(titulo);

//Añadir un nuevo elemento
var javael = document.createElement('li');
javael.id = 'java';
javael.textContent = 'java';
document.getElementById('lenguajes').appendChild(javael);
