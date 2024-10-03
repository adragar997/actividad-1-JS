let cabecera = document.getElementById("resultado")
let refrescar = document.getElementById("refrescar")
let cabecera2 = document.getElementById("resultado2")
let parrafo = document.createElement("p")

refrescar.addEventListener("click", function(){
    location.reload()
});

//Ejercicio 1.1
let ejercicio1_1 = document.getElementById("1.1")
let saludo = "HOLA"

ejercicio1_1.addEventListener("click", function() {
    cabecera.innerHTML = saludo
});

//Ejercicio 1.2
let ejercicio1_2 = document.getElementById("1.2")
let edad = 24

ejercicio1_2.addEventListener("click", function() {
    cabecera.innerHTML = edad
});

//Ejercicio 1.3

let ejercicio1_3 = document.getElementById("1.3")
let verdadero= true

ejercicio1_3.addEventListener("click", function() {
    cabecera.innerHTML = verdadero
});

//Ejercicio 1.4

let ejercicio1_4 = document.getElementById("1.4")
let indefinido = undefined
let nulo = null

ejercicio1_4.addEventListener("click", function() {
    cabecera.innerHTML = indefinido
    cabecera2.innerHTML = nulo
});

//Ejercicio 1.5

let ejercicio1_5 = document.getElementById("1.5")
let articulo = {
    name : "chocolate",
    price : 2.14,
    category : "calórico"
}

ejercicio1_5.addEventListener("click", function() {
    cabecera.innerHTML = articulo.name+" "+articulo.price+" "+articulo.category
});

//Ejercicio 1.6
let ejercicio1_6 = document.getElementById("1.6")
let ciudades = ["Jerez","Málaga","Cádiz","Huelva","Sevilla","Jaén","Almería"]

ejercicio1_6.addEventListener("click", function() {
    for (let ciudad of ciudades) {
        let texto = document.createElement("p")
        texto.innerHTML = ciudad
        document.body.prepend(texto)
    }
});

//Ejercicio 1.7
let ejercicio1_7 = document.getElementById("1.7")
let color = "red"
let cambio = true

ejercicio1_7.addEventListener("click", function() {
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

let ejercicio1_8 = document.getElementById("1.8")

ejercicio1_8.addEventListener("click", function() {
    let mostrarNulo = document.createElement("p")
    mostrarNulo.innerHTML = nulo
    let mostrarIndefinido = document.createElement("p")
    mostrarIndefinido.innerHTML = indefinido

    document.body.prepend(mostrarNulo)
    document.body.prepend(mostrarIndefinido)
});

//Ejercicio 1.9
let ejercicio1_9 = document.getElementById("1.9")
let fuera = "estoy fuera"
//cabecera.innerHTML = dentro No funcionaría
ejercicio1_9.addEventListener("click", function() {
    //let dentro = "estoy dentro"
    cabecera.innerHTML = "Llamada desde dentro: " + fuera
});

//Ejercicio 1.10

let ejercicio1_10 = document.getElementById("1.10")
//Forma incorrecta
let todominuscula = "todominuscula"
let todomayuscula = "todomayuscula"
let nPrecio = "nPrecio"
//let esto.nosepuedeusar
//let precio-etiqueta

//Forma Correcta
let precioProducto = "precioProducto"
let ProductoPrecio = "ProductoPrecio"
let pais_residencia = "pais_residencia"
let RESIDENCIA_PAIS = "RESIDENCIA_PAIS"

ejercicio1_10.addEventListener("click", function() {
    document.body.prepend(parrafo)
    parrafo.innerText = todomayuscula+"\n" + todominuscula+"\n" + nPrecio + "\n" +
    precioProducto + "\n" + ProductoPrecio + "\n" + pais_residencia +"\n" + RESIDENCIA_PAIS
});

//Ejercicio 1.11
let ejercicio1_11 = document.getElementById("1.11")
let a = 5
let b = 3
let suma = a+b
let resta = a-b
let multi = a*b
let division = a/b
let sumaSumada = ++suma
let restaRestada = --resta

ejercicio1_11.addEventListener("click", function() {
    document.body.prepend(parrafo)
    parrafo.innerText = suma+"\n" + resta+"\n" + multi+"\n" + division+"\n" + sumaSumada+"\n" + restaRestada
});

//Ejercicio 1.12
let ejercicio1_12 = document.getElementById("1.12")
let caracteresEscape = "hola \n Como \n Estas\tJEJEJEJE"

ejercicio1_12.addEventListener("click", function() {
    document.body.prepend(parrafo)
    parrafo.innerText = caracteresEscape
});


//Ejercicio 2.1
let ejercicio2_1 = document.getElementById("2.1")

ejercicio2_1.addEventListener("click", function() {
    document.body.prepend(parrafo)
    let num = parseInt(prompt("Introduce un numero"))

    if (num >0) {
        parrafo.innerHTML = "El numero introducido es positivo"
    } else if (num <0) {
        parrafo.innerHTML = "El numero introducido es negativo"
    } else {
        parrafo.innerHTML = "El numero introducido es 0"
    }
});

//Ejercicio 2.2
let ejercicio2_2 = document.getElementById("2.2")

ejercicio2_2.addEventListener("click", function() {
    document.body.prepend(parrafo)
    let num = parseInt(prompt())

    if (num >=60) {
        parrafo.innerHTML = "ERES UN ANCIANO"
    } else if (num <18 && num >0) {
        parrafo.innerHTML = "ERES UN NIÑO"
    } else if (num >=18) {
        parrafo.innerHTML = "ERES UN ADULTO"
    }
});

//Ejercicio 2.3
let ejercicio2_3 = document.getElementById("2.3")

ejercicio2_3.addEventListener("click", function() {
    document.body.prepend(parrafo)

    for (let i = 0; i<=4; i++) {
        parrafo.innerText += i + "\n"
    }
});

//Ejercicio 2.4
let ejercicio2_4 = document.getElementById("2.4")
let contador = 0

ejercicio2_4.addEventListener("click", function() {
    document.body.prepend(parrafo)
    
    while (contador < 5) {
        parrafo.innerText += contador + "\n"
        contador++
    }
});

//Ejercicio 2.5
let ejercicio2_5 = document.getElementById("2.5")
let contador2 = 0

ejercicio2_5.addEventListener("click", function() {
    document.body.prepend(parrafo)

    do {
        parrafo.innerText += contador2 + "\n"
        contador2++
    } while (contador2 < 5);
});

//Ejercicio 2.6
let ejercicio2_6 = document.getElementById("2.6")

ejercicio2_6.addEventListener("click", function() {
    document.body.prepend(parrafo)

    for (let i = 0; i < 4; i++) {
        if (i == 3) {
            break
        } else{
            parrafo.innerText += i + "\n"
        }
    }
});

//Ejercicio 2.7
let ejercicio2_7 = document.getElementById("2.7")

ejercicio2_7.addEventListener("click", function() {
    document.body.prepend(parrafo)

    for (let i = 0; i < 4; i++) {
        if (i == 2) {
            continue
        } else{
            parrafo.innerText += i + "\n"
        }
    }
});

//Ejercicio 2.8
let ejercicio2_8 = document.getElementById("2.8")

ejercicio2_8.addEventListener("click", function() {
    let mes = parseInt(prompt())

    switch (mes) {
        case 1:
            cabecera.innerHTML = "Enero"
            break
        case 2:
            cabecera.innerHTML = "Febrero"
            break
        case 3:
            cabecera.innerHTML = "Marzo"
            break
        case 4:
            cabecera.innerHTML = "Abril"
            break
        case 5:
            cabecera.innerHTML = "Mayo"
            break
        case 6:
            cabecera.innerHTML = "Junio"
            break
        case 7:
            cabecera.innerHTML = "Julio"
            break
        case 8:
            cabecera.innerHTML = "Agosto"
            break
        case 9:
            cabecera.innerHTML = "Septiembre"
            break
        case 10:
            cabecera.innerHTML = "Octubre"
            break
        case 11:
            cabecera.innerHTML = "Noviembre"
            break
        case 12:
            cabecera.innerHTML = "Diciembre"
            break
    }
});

//Ejercicio 3.1
let ejercicio3_1 = document.getElementById("3.1")


ejercicio3_1.addEventListener("click", function() {
    let radio = parseInt(prompt())
    document.body.prepend(parrafo)
    parrafo.innerText += "Área: "+area(radio)+"\nPerímetro: "+perimetro(radio) 

    function area(radio) {
        let area = 3.14 * Math.pow(radio,2)
        return area
    }
    
    function perimetro(radio) {
        let perimetro = 2 * 3.14 * radio
        return perimetro
    }
});

//Ejercicio 3.2
let ejercicio3_2 = document.getElementById("3.2")


ejercicio3_2.addEventListener("click", function() {
    cabecera.innerHTML = calculatePower(2,3)

    function calculatePower(base, exponente) {
        return Math.pow(base,exponente)
    }
});

//Ejercicio 4.1
let ejercicio4_1 = document.getElementById("4.1")

ejercicio4_1.addEventListener("click", function() {
    let numeros = new Array(parseInt(prompt()))
    console.log(numeros.length)
    for (let i = 0; i < numeros.length; i++) {
       numeros[i] = parseInt(prompt())
    }

    function findLargestNumber(numeros) {
        return Math.max(...numeros)
    }

    cabecera.innerHTML = "Numero mas grande introducido: " + findLargestNumber(numeros)
});

//Ejercicio 5.1

let ejercicio5_1 = document.getElementById("5.1")

ejercicio5_1.addEventListener("click", function() {
    document.body.prepend(parrafo)
    parrafo.innerText += "a)"

    for (let i = 20; i <=30; i++) {
        parrafo.innerHTML += "\n" + i
    }

    parrafo.innerText += "\nb)"

    for (let i = 20; i <=30; i+=2) {
        parrafo.innerHTML += "\n" + i
    }
    
    parrafo.innerText += "\nc)"

    let naturales = 0
    
    for (let i = 0; i <=50; i++) {
        naturales += i
    }
    parrafo.innerHTML += "\n" + naturales
    
    parrafo.innerText += "\nd)\n"

    for (let i = 0; i <=10; i++) {
        parrafo.innerText += `8x${i} = `+ i*8+"\n"
    }

    parrafo.innerText += "\ne)"

    let array = [1,2,3,4,5]

    for (let i = 0; i < array.length; i++) {
        parrafo.innerText += array[i]
    }

    parrafo.innerText += "\nf)\n"

    let altura = 9
    let espacios = altura
    for (let i = 0; i <=altura; i++) {
        for (let j = espacios; j >= 0; j--) {
            parrafo.innerHTML += "&nbsp"    
        }
        espacios--
        for (let j = 0; j <i; j++) {
            parrafo.innerText += "*"    
        }
        parrafo.innerHTML += "<br>"
    }

    parrafo.innerText += "\ng)"

    let sumaPares = 0
    for (let i = 0; i <= 50; i+=2) {
        sumaPares+=i
    }
    parrafo.innerText += sumaPares 

    parrafo.innerText += "\nh)"

    for (let i = 30; i >= 20; i--) {
        parrafo.innerHTML += i+" "
    }

    parrafo.innerText += "\ni)"

    let promedio = [4,5,6,7,8]
    let suma = 0

    for (let i = 0; i < promedio.length; i++) {
        suma+= promedio[i]
    }

    parrafo.innerText += "Promedio: "+suma/promedio.length
});
