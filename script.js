const h1 = document.querySelector('h1');
const form= document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event)
{
    console.log({event});
    event.preventDefault();
    //console.log('Escuchando radio estereo');
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
    console.log (sumaInputs);

}


/*const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log ({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML='Patito <br> Feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('rojo');
//h1.classList.contains('rojo');
//console.log(h1.classList.contains('rojo'));
 input.value="456";

 //console.log(document.createElement('img'));
 const img = document.createElement('img');
  //p.pid.remove();
 img.setAttribute('src', 'https://bmeditores.mx/wp-content/uploads/2020/10/recibiendo-pollito-1068x534.jpg');
 console.log(img);

 pid.append(img);
*/