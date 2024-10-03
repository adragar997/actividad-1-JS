let cabecera = document.getElementById("resultado")
let refrescar = document.getElementById("refrescar")
let cabecera2 = document.getElementById("resultado2")

refrescar.addEventListener("click", function(){
    location.reload()
});

//Ejercicio 1.1
let ejercicio11 = document.getElementById("1.1")
let saludo = "HOLA"

ejercicio11.addEventListener("click", function() {
    cabecera.innerHTML = saludo
});

//Ejercicio 1.2
let ejercicio12 = document.getElementById("1.2")
let edad = 24

ejercicio12.addEventListener("click", function() {
    cabecera.innerHTML = edad
});

//Ejercicio 1.3

let ejercicio13 = document.getElementById("1.3")
let verdadero= true

ejercicio13.addEventListener("click", function() {
    cabecera.innerHTML = verdadero
});

//Ejercicio 1.4

let ejercicio14 = document.getElementById("1.4")
let indefinido = undefined
let nulo = null

ejercicio14.addEventListener("click", function() {
    cabecera.innerHTML = indefinido
    cabecera2.innerHTML = nulo
});

//Ejercicio 1.5

let ejercicio15 = document.getElementById("1.5")
let articulo = {
    name : "chocolate",
    price : 2.14,
    category : "calórico"
}

ejercicio15.addEventListener("click", function() {
    cabecera.innerHTML = articulo.name+" "+articulo.price+" "+articulo.category
});

//Ejercicio 1.6
let ejercicio16 = document.getElementById("1.6")
let ciudades = ["Jerez","Málaga","Cádiz","Huelva","Sevilla","Jaén","Almería"]

ejercicio16.addEventListener("click", function() {
    for (let ciudad of ciudades) {
        let texto = document.createElement("p")
        texto.innerHTML = ciudad
        document.body.prepend(texto)
    }
});

//Ejercicio 1.7
let ejercicio17 = document.getElementById("1.7")
let color = "red"
let cambio = true

ejercicio17.addEventListener("click", function() {
    if (cambio) {
        color = "white"
        cabecera.innerHTML = color
        cambio = false
    } else {
        cambio = true
        color = "red"
        cabecera.innerHTML = color
    }

});

//Ejercicio 1.8

let ejercicio18 = document.getElementById("1.8")

ejercicio18.addEventListener("click", function() {
    let mostrarNulo = document.createElement("p")
    mostrarNulo.innerHTML = nulo
    let mostrarIndefinido = document.createElement("p")
    mostrarIndefinido.innerHTML = indefinido

    document.body.prepend(mostrarNulo)
    document.body.prepend(mostrarIndefinido)
});

//Ejercicio 1.9
let ejercicio19 = document.getElementById("1.9")
let prueba2 = "adios"
ejercicio19.addEventListener("click", function() {
    
});

//Ejercicio 1.11
let ejercicio1_11 = document.getElementById("1.11")
let a = 5
let b = 3
let suma = a+b
let resta = a-b
let multi = a*b
let division = a/b
let sumaSumada = suma++
let restaRestada = resta--

let num = prompt("DAME ARGO")