let ciudad = prompt("Escriba su Ciudad (Buenos Aires, Cordoba o La Pampa)")
while (ciudad === "") {
    alert("Texto no valido")
    ciudad = prompt("Escriba su Ciudad (Buenos Aires, Cordoba o La Pampa)")
}

let lluviaTotal = 0
let lluviaPromedio = 0
const SUMA = (numUno, numDos) => { return numUno + numDos }

const PROMEDIO = (numUno, numDos) => { return numUno / numDos }

if (ciudad.toLowerCase() == "buenos aires" || ciudad.toLowerCase() == "cordoba" || ciudad.toLowerCase() == "la pampa") {

    // alert(ciudad)

    let cantidadDias = prompt("Ingresar la cantidad de dias que llovió")
    while (cantidadDias === "" || isNaN(cantidadDias)) {
        alert("Debe ingresar un valor numerico")
        cantidadDias = prompt("Ingresar la cantidad de dias que llovió")
    }
console.log("Para la ciudad de "+ ciudad.toUpperCase()+ ":");
    for (let dias = 1; dias < parseInt(cantidadDias) + 1; dias++) {
        let fecha = prompt("Ingrese la fecha del dia " + dias.toString() + " con formato (dd/mm)")
        while (fecha === "") {
            alert("Debe ingresar un valor")
            fecha = prompt("Ingrese la fecha del dia " + dias.toString() + " con formato (dd/mm)")
        }


        let lluvia = prompt("Ingrese en milimetros la cantidad que llovió")
        while (lluvia === ""|| isNaN(lluvia)) {
            alert("Debe ingresar un valor numerico")
            lluvia = prompt("Ingrese en milimetros la cantidad que llovió")
        }
        lluviaTotal = SUMA(parseFloat(lluviaTotal), parseFloat(lluvia))
        console.log("En la fecha " + fecha.toString() + " la cantidad de lluvia fue de " + lluvia.toString() + " mm")
    }

    lluviaPromedio = PROMEDIO(parseFloat(lluviaTotal), parseFloat(cantidadDias))
    lluviaPromedio = parseFloat(lluviaPromedio).toFixed(2)
    console.log("La lluvia total de los " + cantidadDias.toString() + " días fue de: " + lluviaTotal.toString() + " mm");
    console.log("Y la lluvia promedio de los " + cantidadDias.toString() + " días fue de: " + lluviaPromedio.toString() + " mm");

}
else {

    alert("Su Ciudad: '" + ciudad + "' no cuenta con datos de lluvias")
}

