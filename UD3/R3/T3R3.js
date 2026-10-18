const clase = [];

clase[0] = "Angel Garcia, 20, 6, 7, 10";
clase[1] = "Marta Lopez, 19, 8, 9, 7";
clase[2] = "Luis Perez, 21, 5, 4, 6";
clase[3] = "Ana Ruiz, 20, 9, 10, 10";
clase[4] = "Pedro Gil, 22, 3, 6, 5";

function nota(estudiante, trimestre) {
    const campos = clase[estudiante].split(",");

    // Si no se indica trimestre, devuelve la media
    if (trimestre === undefined) {
        return (parseFloat(campos[2]) + parseFloat(campos[3]) + parseFloat(campos[4])) / 3;
    }

    if (trimestre < 1 || trimestre > 3) {
        return "Trimestre no válido";
    }

    return parseFloat(campos[trimestre + 1]);
}

function edadMedia() {
    let suma = 0;

    for (let i = 0; i < clase.length; i++) {
        const campos = clase[i].split(",");
        suma += parseFloat(campos[1]);
    }

    return suma / clase.length;
}

function estudianteAlAzar() {
    const posicion = Math.floor(Math.random() * clase.length);
    const campos = clase[posicion].split(",");
    return campos[0];
}

function preguntar() {
    document.getElementById("estudiante").textContent = "Le toca a: " + estudianteAlAzar();
}

function paresImpares() {
    const numeros = [];

    // Array de 100 números aleatorios del 1 al 1000
    for (let i = 0; i < 100; i++) {
        numeros.push(Math.floor(Math.random() * 1000) + 1);
    }

    document.write("<b>Array original:</b><br>" + numeros.join(", ") + "<br><br>");

    // Organizarlo: primero los pares y después los impares
    const pares = [];
    const impares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }

    const organizado = pares.concat(impares);

    document.write("<b>Array organizado (pares y luego impares):</b><br>" + organizado.join(", "));
}

const vendedores = [];
const ventas = [];

function altaVendedor(nombre, venta) {
    vendedores.push(nombre);
    ventas.push(venta);
}

function sueldo(venta) {
    return 200 + venta * 0.09;
}

// a) Establece los 10 elementos del array a cero
function poneACero(array) {
    for (let i = 0; i < 10; i++) {
        array[i] = 0;
    }
}

// b) Añade 1 a cada uno de los elementos
function sumaUno(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }
}

// c) Muestra los valores separados por espacios
function muestraArray(array) {
    let texto = "";

    for (let i = 0; i < array.length; i++) {
        texto += array[i] + " ";
    }

    document.write(texto + "<br>");
}

// Simula el lanzamiento de un dado de 6 caras
function dado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Simula N lanzamientos de dos dados y cuenta cada suma
function simulaDosDados(lanzamientos) {
    const veces = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < lanzamientos; i++) {
        const suma = dado() + dado();
        veces[suma]++;
    }

    return veces;
}

// Simula N lanzamientos y devuelve las sumas y las combinaciones
function simulaDosDadosCombinaciones(lanzamientos) {
    const sumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const combinaciones = [];

    // Tabla 6x6 inicializada a 0
    for (let i = 0; i < 6; i++) {
        combinaciones[i] = [0, 0, 0, 0, 0, 0];
    }

    for (let i = 0; i < lanzamientos; i++) {
        const d1 = dado();
        const d2 = dado();

        sumas[d1 + d2]++;
        combinaciones[d1 - 1][d2 - 1]++;
    }

    return [sumas, combinaciones];
}

// Array de 10 asientos: "" significa libre, si no, guarda el nombre del pasajero
const asientos = ["", "", "", "", "", "", "", "", "", ""];

// Clase de un asiento (número de 1 a 10)
function claseAsiento(numero) {
    if (numero <= 5) {
        return "First";
    }
    return "Turista";
}

// Devuelve los números de asiento libres de una clase
function asientosLibres(tipo) {
    const libres = [];
    const desde = (tipo === "First") ? 1 : 6;
    const hasta = (tipo === "First") ? 5 : 10;

    for (let n = desde; n <= hasta; n++) {
        if (asientos[n - 1] === "") {
            libres.push(n);
        }
    }

    return libres;
}

// Muestra la tarjeta de embarque en una ventana nueva
function imprimeTarjeta(numero) {
    const ventana = window.open("", "", "width=350,height=250");

    ventana.document.write("<h2>Tarjeta de embarque</h2>");
    ventana.document.write("Pasajero: " + asientos[numero - 1] + "<br>");
    ventana.document.write("Asiento: " + numero + "<br>");
    ventana.document.write("Clase: " + claseAsiento(numero));
}

// Proceso completo de una reserva
function reservar() {
    const opcion = prompt("Tipo de asiento:\n1. First (asientos 1 al 5)\n2. Turista (asientos 6 al 10)");

    if (opcion !== "1" && opcion !== "2") {
        alert("Opción no válida");
        return;
    }

    const tipo = (opcion === "1") ? "First" : "Turista";
    const libres = asientosLibres(tipo);

    if (libres.length === 0) {
        alert("No quedan asientos libres en clase " + tipo + ". Prueba con la otra clase.");
        return;
    }

    const numero = parseInt(prompt("Asientos libres en " + tipo + ": " + libres.join(", ") + "\n¿Cuál quieres?"));

    if (!libres.includes(numero)) {
        alert("Ese asiento no está libre");
        return;
    }

    const nombre = prompt("Nombre del pasajero:");

    if (nombre === null || nombre.trim() === "") {
        alert("Reserva cancelada");
        return;
    }

    asientos[numero - 1] = nombre.trim();
    imprimeTarjeta(numero);
}

// Crea una matriz de 5 filas (productos) x 4 columnas (vendedores) a cero
function creaMatrizVentas() {
    const matriz = [];

    for (let p = 0; p < 5; p++) {
        matriz[p] = [0, 0, 0, 0];
    }

    return matriz;
}

// Suma el valor de una hoja de ventas a la celda [producto][vendedor]
function registraVenta(matriz, vendedor, producto, valor) {
    matriz[producto - 1][vendedor - 1] += valor;
}

// Escribe la tabla con los totales por fila y por columna
function muestraTablaVentas(matriz) {
    document.write("<table border='1'>");
    document.write("<tr><th>Producto</th><th>Vendedor 1</th><th>Vendedor 2</th><th>Vendedor 3</th><th>Vendedor 4</th><th>Total producto</th></tr>");

    const totalVendedor = [0, 0, 0, 0];
    let totalGeneral = 0;

    for (let p = 0; p < 5; p++) {
        let totalProducto = 0;
        document.write("<tr><th>Producto " + (p + 1) + "</th>");

        for (let v = 0; v < 4; v++) {
            document.write("<td>" + matriz[p][v] + "</td>");
            totalProducto += matriz[p][v];
            totalVendedor[v] += matriz[p][v];
        }

        document.write("<td><b>" + totalProducto + "</b></td></tr>");
        totalGeneral += totalProducto;
    }

    document.write("<tr><th>Total vendedor</th>");
    for (let v = 0; v < 4; v++) {
        document.write("<td><b>" + totalVendedor[v] + "</b></td>");
    }
    document.write("<td><b>" + totalGeneral + "</b></td></tr>");

    document.write("</table>");
}
