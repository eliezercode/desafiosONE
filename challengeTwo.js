// Desafíos curso Lógica de Programación: explorar funciones y listas
// Para estos desafíos falta generar interacción con el usuario desde el Sitio

function numeroDoble() {
    valor1 = 10;
    resultado = valor1 * 2;
    console.log(resultado);
}

function numeroProm() {
    valor1 = 12;
    valor2 = 5;
    valor3 = 15;

    resultado = (valor1 + valor2 + valor3) / 3;
    console.log(resultado);
}

function numeroMayor() {
    valor1 = 16;
    valor2 = 25;

    if (valor1 > valor2) {
        console.log(`El numero mayor ingresado es: ${valor1}`);
    } else {
        console.log(`El numero mayor ingresado es: ${valor2}`);
    } 
}

function numeroMulti() {
    valor1 = 50;
    resultado = valor1 * valor1;
    console.log(resultado);
}

// Función para calcular IMC según peso y altura. Además he añadido como plus tipo de peso según la OMS

let imc = 0;
let peso = 0;
let estatura = 0;
let estaturaCuadrado = 0;

function calcularImc() {
    peso = parseFloat(prompt('Ingresa tu peso'));
    estatura = parseFloat(prompt('Ingresa tu estatura'));
    
    estaturaCuadrado = estatura * estatura;
    imc = peso / estaturaCuadrado;
    console.log(`Tu masa corporal es: ${imc.toFixed(2)}`);

    if (imc >= 17 && imc <= 18.4) {
        console.log('Según la Organización Mundial de la Salud OMS tienes Delgadez Leve');
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log('Según la Organización Mundial de la Salud OMS tienes Peso Normal');
    } else if (imc >= 25 && imc <= 29.9) {
        console.log('Según la Organización Mundial de la Salud OMS tienes Pre Obesidad');
    } else if (imc >= 30 && imc <= 34.9) {
        console.log('Según la Organización Mundial de la Salud OMS tienes Obesidad Tipo I');
    } else {
        console.log('Según la Organización Mundial de la Salud OMS tienes Obesidad Tipo II');
    }
}

let factorial = 1;

function calcularFactorial() {
    numero = 1;
    factorial = 1;

    for (i = 1; i <= numero; i++);
        factorial = factorial * i;
}

// Convertir cantidad ingresada en Dolares a moneda Peso Chileno

let dolar = 948.10;

function calcularDolar() {
    valor1 = parseInt(prompt('Ingresa la cantidad de Dolares que deseas convertir a Peso Chileno'));

    resultado = valor1 * dolar;
    console.log(`El cambio de tus dolares a Peso Chileno es: ${resultado.toFixed(2)}`);
}

// Calcular Perimetro y Area utilizando Altura y Anchura pasados como parametros

let area = 0;
let perimetro = 0;
let radio = 0;

function calcularAreaRectangular() {
    valor1 = parseInt(prompt('Ingresa la altura de tu rectangulo'));
    valor2 = parseInt(prompt('Ingresa la anchura de tu rectangulo'));

    perimetro = (2 * valor1) + (2 * valor2);
    area = valor1 * valor2;
    console.log(`El Perimetro de tu Rectangulo es: ${perimetro} y el Area es: ${area}`);
}

function calcularAreaCirculo() {
    radio = parseInt(prompt('Ingresa el radio de tu Circulo'));

    perimetro = Math.PI * (radio * 2);
    area = Math.PI * (radio * radio);
    console.log(`El Perimetro de tu Circulo es: ${perimetro.toFixed(2)} y el Area es: ${area.toFixed(2)}`);
}

function calcularTablaMultiplicar() {
    numero = parseInt(prompt('Ingresa tu numero para ver su tabla de multiplicar hasta el doce (12)'));
    valor1 = 0;
    valor2 = 0;
    resultado = 0;

    do {
        valor2 = numero * valor1;
        valor1++;
        resultado = numero * valor1;
        console.log(`Tu numero ${numero} multiplicado por ${valor1} es: ${resultado}`);
    } while (valor1 < 12);
}

//Crear una lista Vacía

let listaVacia = [];

// Crear una lista de Lenguajes de Programación llamada lenguajesDeProgramacion

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Phyton'];

// Agregar a la lista lenguagesDeProgramacion los siguientes elementos: Java, Ruby y GoLang

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Crear una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion.

function mostrarLenguages() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
mostrarLenguajes();

// Crear función muestre en la consola todos los elementos de la lista lenguagesDeProgramacion al inverso

function mostrarLenguagesInverso() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
mostrarLenguajesInverso();

// Crea una función que calcule el promedio de los elementos en una lista de números

function calcularMedia() {
    numero = [8, 16, 32, 64, 128];
    suma = 0;

    for (let i = 0; i < numero.length; i++) {
      suma += numero[i];
    }
    return suma / numero.length;
  }
  
  let media = calcularMedia();
  console.log('La média de tu lista es:', media);

// Crea una función que muestre en la consola el número mayor y el número menor en una lista

function calcularMayorMenor() {

    numero = [8, 16, 32, 64, 128];
    mayor = numero[0];
    menor = numero[0];
  
    for (let i = 1; i < numero.length; i++) {
      if (numero[i] > mayor) {
        mayor = numero[i];
      }
      if (numero[i] < menor) {
        menor = numero[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
}
  
calcularMayorMenor();

// Crea una función que devuelva la suma de todos los elementos en una lista

function calcularSuma() {
    
    numero = [8, 16, 32, 64, 128];
    suma = 0;
    for (let i = 0; i < numero.length; i++) {
      suma += numero[i];
    }
    return numero;
  }
  
console.log('La Suma de tu lista es:', suma);

// Crea una función que devuelva la posición en la lista donde se 
// encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarIndice(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i;
      }
    }
    return -1;
  }