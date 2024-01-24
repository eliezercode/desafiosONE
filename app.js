// Desafíos n°1
let nombre = 'Luna';
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

// Así se ejecuta una alerta, pero no quiero que se muestre ahora ya que lo haré mediante una funcion
// alert('¡Error! Completa todos los datos');

// Desafíos n°1 a.
let alertaUno = 'Bienvenidos a mi Sitio Web';
let mensajeDeError = '¡Error! Completa todos los datos';

function mostrarDosAlertas() {
    alert(alertaUno);
    alert(mensajeDeError);
}

// Desafíos n°1 b.

function introduceNombre() {
    nombre = prompt("¿Cuál es tu nombre?");
}

// Desafíos n°1 c.

function licenciaConducir() {
    edad = prompt("¿Cuál es tu edad?");

    if (edad >= 18) {
        alert('¡Felicidades puedes obtener tu licencia de Conducir!');
    } else {
        alert('No cumples con la edad necesaría para obtener tu Licencia de Conducir');
    }
}

// Desafíos n°2
// Desafíos n°2 a.
let preguntaSemana = 'Dia';

function saludoSemana() {
    preguntaSemana = prompt("¿Qué día de la semana es?");

    if (preguntaSemana == 'Sabado' || preguntaSemana == 'Domingo') {
        alert('¡Buen fin de Semana!');
    } else {
        alert('¡Buena semana!');
    }
}

// Desafíos n°2 b.

let numeroIngreso = 0;

function tipoDeNumero() {
    numeroIngreso = parseInt(prompt("Ingresa un número diferente a Cero"));

    if (numeroIngreso >= 1) {
        alert('¡Tu número es positivo!');
    } else {
        alert('¡Tu número es negativo!');
    }
}

// Desafíos n°2 c.

let ingresaPuntuacion = 0;

function puntuacion() {
    ingresaPuntuacion = parseInt(prompt("Ingresa tu puntuación obtenida"));

    if (ingresaPuntuacion >= 100) {
        alert('¡Felicidades!, has ganado.');
    } else {
        alert('Intenta nuevamente para ganar.');
    }
}

// Desafíos n°2 d.

function mostrarSaldo() {
    alert(`Tu saldo disponible es: ${saldoDisponible}`);
}

// Desafíos n°2 e.
 function mostrarNombre() {
    nombre = prompt("¿Cuál es tu nombre?");
    alert(`Tu nombre es: ${nombre}`);
}

// Desafíos n°3
// Desafíos n°3 a.

let numerosDentro = 1;
let numerosDentroMenos = 10;

// Primera forma de hacerlo con while

/*while (numerosDentro <= 10) {
    alert(`Vamos en el numero: ${numerosDentro}`);
    numerosDentro++;
}*/ 

// Así lo quiero mostrar para trabajar con html

function mostrarNumero() {
    while (numerosDentro <= 10) {
        alert(`Vamos en el numero: ${numerosDentro}`);
        numerosDentro++;
    }
}

// Desafíos n°3 b.

function mostrarNumeroMenos() {
    while (numerosDentroMenos >= 0) {
        alert(`Vamos en el numero: ${numerosDentroMenos}`);
        numerosDentroMenos--;
    }
}

// Desafíos n°3 c.

function abrirConsola() {
    alert("Abre la consola del navegador e ingresa la siguiente function para este ejercicio: numeroContar()");
}

function abrirConsolaDos() {
    alert("Abre la consola del navegador e ingresa la siguiente function para este ejercicio: numeroRestar()");
}

let numeroConteo = 0;
let contadorNumero = 0;

function numeroContar() {
    numeroConteo = parseInt(prompt("Ingresa un numero diferente a Cero"));

    while (numeroConteo >= 0) {
        console.log(`Vamos en el numero: ${numeroConteo}`);
        numeroConteo--;
    }
}

// Desafíos n°3 d.

function numeroRestar() {
    numeroConteo = parseInt(prompt("Ingresa un numero diferente a Cero"));

    while (contadorNumero <= numeroConteo) {
        console.log(`Vamos en el numero: ${contadorNumero}`);
        contadorNumero++;
    }
}

// Desafíos n°4 (Los desafíos a, b, c, d, están comentados porque para mi Sitio web no quiero mostrarlos)

/* Desafíos n°4 a.
Saludo en la consola:

console.log("Hola, bienvenidos a mi Sitio Web");

Desafíos n°4 b.
Saludo en la consola de mi nombre:

let nombrePersonal = "Eliezer Catari";
console.log(`¡Hola! ${nombrePersonal}`);

Desafíos n°4 c.
Saludo en alerta de mi nombre:

alert(`¡Hola! ${nombrePersonal}`);

Desafíos n°4 c.
Cuál es el lenguaje de programación que más me gusta:

let lenguaje = prompt("¿Cuál es el lenguaje de Programación que más te gusta?")

console.log(`El lenguaje de Programación que más te gusta es: ${lenguaje}`); */

// Desafíos n°4 e.

let valor1 = 10;
let valor2 = 15;
let resultado = 0;

function sumaValores() {
    alert(`Abre la consola del navegador para ver el resultado de la Suma de ${valor1} + ${valor2}`);

    resultado = valor1 + valor2;
    console.log(resultado);
}

// Desafíos n°4 e.

function restaValores() {
    alert(`Abre la consola del navegador para ver el resultado de la Resta de ${valor1} - ${valor2}`);

    resultado = valor1 - valor2;
    console.log(resultado);
}

// Desafíos n°4 f.

function mayorEdad() {
    edad = parseInt(prompt("Ingresa tu edad:"));
    alert("Abre la consola para verificar si eres mayor o menor de edad");

    if (edad >= 18) {
        console.log("Eres una persona mayor de Edad");
    } else {
        console.log("Eres una persona menor de Edad");
    }
}

// Desafíos n°4 g.

function verificarNumero() {
    numeroIngreso = parseFloat(prompt("Ingresa un numero:"));
    alert("Abre la consola para verificar si tu numero es positivo, negativo o cero");

    if (numeroIngreso > 0) {
        console.log(`Tu numero ${numeroIngreso} es: Positivo`);
    } else if (numeroIngreso < 0) {
        console.log(`Tu numero ${numeroIngreso} es: Negativo`);
    } else {
        console.log(`Tu numero ${numeroIngreso} es: Cero`);
    }
}

// Desafíos n°5 a.

function verNumeros() {
    alert("Abre la consola para verificar el conteo del numero 1 al 10");
    contadorNumero = 1;
    while (contadorNumero <= 10) {
        console.log(`Vamos por el numero: ${contadorNumero}`);
        contadorNumero++;
    }
}

// Desafíos n°5 b.

let nota = 9;

function verNota() {
    alert("Abre la consola para verificar con tu nota si Aprobaste o Reprobaste");
    if (nota >= 7) {
        console.log(`Tu nota es ${nota}: Aprobaste.`);
    } else {
        console.log(`Tu nota es ${nota}: Reprobaste.`);
    }
}

// Desafíos n°5 c.

let numRandom = 0;

function numeroRandom() {
    alert("Abre la consola para ver un numero aleatorio");
    numRandom = Math.random();
    console.log(numRandom);
}


// Desafíos n°5 d.

function numeroRandomDos() {
    alert("Abre la consola para ver un numero aleatorio entre 1 y 10");
    numRandom = Math.floor(Math.random()*10)+1;
    console.log(numRandom);
}

// Desafíos n°5 e.

function numeroRandomTres() {
    alert("Abre la consola para ver un numero aleatorio entre 1 y 1000");
    numRandom = Math.floor(Math.random()*1000)+1;
    console.log(numRandom);
}

// Desafíos n°5 f.

let cambiarTitulo = document.querySelector('h2');

function cambiarCodigo() {
    cambiarTitulo.innerHTML = 'Has cambiado este Titulo';
}

// Desafíos n°5 g.

function botonClick() {
    alert("Abre la consola para saber si este boton fue Clickado");
    console.log("El botón fue clickeado");
}

// Desafíos n°5 h.

function nombreCiudad() {
    ciudad = prompt('Ingresa una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

// Desafíos n°5 i.

function botonAlerta() {
    alert("Yo amo Js");
}

// Desafíos n°5 j.

function botonSuma() {
    valor1 = parseInt(prompt('Ingresa tu primer numero de la suma'));
    valor2 = parseInt(prompt('Ingresa tu segundo numero de la suma'));

    resultado = valor1 + valor2;
    alert(`El resultado de tu suma es: ${resultado}`);
}

//Fin de los desafíos curso Lógica de Programación: Sumergete en la programación en Javascript