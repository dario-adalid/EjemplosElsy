/// Parte 1.
/// Ejercicios con if
/// Ejemplo 1. El siguiente código muestra como una
/// funcion calcula si una persona es mayor de edad

function esMayorDeEdad(edad){
    console.log(`\nLa persona tiene una edad de ${edad}`)
    if(edad >= 18){
        console.log("La persona es mayor de edad")
    }
}

esMayorDeEdad(5)
esMayorDeEdad(12)
esMayorDeEdad(18)
esMayorDeEdad(57)

/// Ejercicio 1. Completa la funcion para que verifique
/// si la contraseña es igual a la contraseña del usuario

// function contraseñaValida(contraseñaIntroducida){
//     const contrseñaDelUsuario = "abc123"
//     if(/*¿Que comparación tenemos que poner aquí?*/){
//         console.log("contraseña válida")
//     }
//     else{
//         console.log("contraseña inválida")
//     }
// }

// contraseñaValida("hola")
// contraseñaValida("abc123")


/// Ejercicio 2. Completa la siguiente función para determinar
/// si el número introducido es par o impar

// function esParOImpar(numero){
//     if(/*Recuerda utilizar el operador módulo*/ ){
//         console.log(`${numero} es par`)
//     }
//     else{
//         console.log(`${numero} es impar`)
//     }
// }

// esParOImpar(2)
// esParOImpar(3)
// esParOImpar(-17)

/// Ejercicio 3. Crea una función que devuelva el precio
/// de un artículo a partir de saber si incluye IVA (16%)
/// o no

// function precioDespuesIva(precio, contieneIVA){
//     /*Recuerda utilizar el if para ver si contiene
//     IVA y también devolver el valor con return */
// }

// let precio1 = precioDespuesIva(150, false)
// console.log(precio1)

// let precio2 = precioDespuesIva(100, true)
// console.log(precio2)

// let precio3 = precioDespuesIva(0, true)
// console.log(precio3)

// let precio4 = precioDespuesIva(300, false)
// console.log(precio4)

// let precio5 = precioDespuesIva(160, true)
// console.log(precio5)

/// Parte 2.
/// Ejercicios con for
/// Ejemplo 1. La siguiente función muestra como imprimir números
/// impares del 1 hasta el que nos pida el usuario

function imprimirNumeros(numero){
    for(let i = 1; i <= numero; i = i + 2 ){ // OJO: aquí se suma i + 2 para avanzar de 2 en 2
        console.log(i)
    }
}

imprimirNumeros(18)

/// Ejercicio 1. Completa la función para que muestre los números
/// desde el que nos pida el usuario hasta el 0

// function contarEnReversa(numero){
//     for(let i = /*¿En qué valor inicializamos i?*/; numero /*¿Qué comparación debemos hacer? Recuerda incluir el cero al imprimir*/ */ 0; /*¿Qué operación debemos realizar?*/){
//         console.log(numero)
//     }
// }

// contarEnReversa(15)

/// Ejercicio 2. Completa una función para imprimir cada letra de la
/// cadena de texto en una línea separada

// function deletrearPalabra(texto){
//     for(/*TIP: Recuerda que la propiedad length nos da el tamaño de la cadena de texto*/){
//         console.log(texto.charAt(i))
//     }
// }

// deletrearPalabra("hola")
// deletrearPalabra("familiar")
// deletrearPalabra("programacion")

/// Ejercicio 3. Haz una función que imprima los números del 1 hasta
/// el que haya ingresado el usuario, pero en vez de imprimir los 
/// números que sean divisibles entre 3 imprima la palabra `buzz`

// function imprimeBuzz(numero){

// }

// imprimeBuzz(15)
/*
Resultado esperado
1
2
buzz
4
5
buzz
7
8
buzz
10
11
buzz
13
14
buzz
*/