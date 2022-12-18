/*estos son los tipos de libros */
const libros = [
    { nombre: "Manga", precio: 100},
    { nombre: "Enciclopedia", precio: 1000},
    { nombre: "Biografias", precio: 150},
    { nombre: "Fantasia", precio: 300},
    { nombre: "Psicologia", precio: 250},
    { nombre: "Como dormir 8 horas en 20 minutos", precio: 999999}
];


/*con esta funcion calculare el precio total de la compra*/
function validar(){
    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
    alert(`El total a pagar por su compra es de: ${total}`) /* en este caso opte agregarlo en alert para que lo identifiquen mejor, solo por detalle*/
    console.log(`El total a pagar por su compra es de: ${total}`)
}

let carrito = []

let seleccion = prompt("Hola! Desea comprar algún tipo de libro? si/no (en minuscula) :)")


/*aca uso algunas validaciones con while porque... siempre hay un vivo que quiere romper los codigos XD*/
while(seleccion != "si" && seleccion != "no"){
    alert("POR FAVOR INGRESA SI O NO LOCOOOO NO ES TAN DIFICIL!!");
    seleccion = prompt("Hola! Desea comprar algún tipo de libro? si/no (en minuscula) :)")
}

if (seleccion == "si"){
    alert("A continuacion nuestra lista de libros")
    let todosloslibros = libros.map(
        (libros) => libros.nombre + " " + libros.precio + "$"
    );
    alert(todosloslibros.join(" - "))
}   /*despido al usuario*/
    else if (seleccion == "no"){
    alert("Gracias por utilizar la herramienta, hasta luego!")
}

while(seleccion != "no"){
    let libro = prompt("Agrega un producto a tu carrito (Por ejemplo: Manga)")
    let precio = 0

    if(libro == "Manga" || libro == "Enciclopedia" || libro == "Biografias" || libro == "Fantasia" || libro == "Psicologia" || libro == "Como dormir 8 horas en 20 minutos"){
        switch(libro) {
            case "Manga":
                precio = 100
                break;
            case "Enciclopedia":
                precio = 1000
                break;
            case "Biografias":
                precio = 150
                break;
            case "Fantasia":
                precio = 300
                break;
            case "Psicologia":
                precio = 250
                break;
            case "Como dormir 8 horas en 20 minutos":
                precio = 999999
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar? (solo numeros enteros)"))

        /*para mi, esta validacion es GOD*/
        while(Number.isInteger(unidades) == false){
            alert("POR FAVOR INGRESA UN NUMERO ENTERO LOCOOOO NO ES TAN DIFICIL!!");
            unidades = prompt("¿Cuantas unidades quiere llevar? (solo numeros enteros)")
        }

        carrito.push({libro, unidades, precio})
        console.log(carrito)
    } else{
        alert("SIN STOCK")
    }

    let seleccion2 = prompt("¿Desea seguir comprando? si/no (en minuscula)")

    while(seleccion2 != "si" && seleccion2 != "no"){
        alert("POR FAVOR INGRESA SI O NO LOCOOOO NO ES TAN DIFICIL!!");
        seleccion2 = prompt("¿Desea seguir comprando? si/no (en minuscula)")
    }

    /*aca uso una segunda validacion dentro de la misma para luego despedir al usuario, mostrando tambien la cantidad total de su compra*/
    while(seleccion2 === "no"){
        alert("Gracias por su compra! Hasta luego! :)")
        carrito.forEach((carritoFinal) => {
            console.log(`Libro: ${carritoFinal.libro}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        seleccion = seleccion2;
    break;
    }
}

/*al final de todo, la validacion del total comprado*/
validar();
