function fila(nombre, valor) {
    document.write("<tr><td>" + nombre + "</td><td>" + valor + "</td></tr>");
}

// a) Ventana de confirmación
function apartadoA() {
    if (confirm("¿Aceptas?")) {
        alert("Has pulsado Aceptar");
    } else {
        alert("Has pulsado Cancelar");
    }
}

// b) Abrir ventana y analizar si está cerrada
function apartadoB1() {
    ventanaNueva = window.open("", "", "width=300,height=200");
}

function apartadoB2() {
    if (ventanaNueva && !ventanaNueva.closed) {
        alert("La ventana está abierta");
    } else {
        alert("La ventana está cerrada");
    }
}

// c) Abrir ventana y pedir un nuevo nombre para ella
function apartadoC() {
    const nombre = prompt("Escribe un nuevo nombre para la ventana:");

    ventanaNueva = window.open("", "", "width=300,height=200");
    ventanaNueva.name = nombre;
    ventanaNueva.document.write("<p>Mi nombre es: " + nombre + "</p>");
}

// d) Cerrar la ventana actual / cerrar la ventana abierta
function cerrarActual() {
    window.close();
}

function cerrarNueva() {
    if (ventanaNueva) {
        ventanaNueva.close();
    }
}

// f) Ventana de 300x100 que se puede redimensionar
function apartadoF() {
    ventanaNueva = window.open("", "", "width=300,height=100,resizable=yes");
    ventanaNueva.document.write("<p>Puedes cambiar mi tamaño</p>");
}

// g) Igual que f), pero escribiendo texto en la página padre
function apartadoG() {
    ventanaNueva = window.open("", "", "width=300,height=100,resizable=yes");
    ventanaNueva.document.write("<button onclick=\"window.opener.document.getElementById('mensaje').innerHTML = 'Texto escrito desde la ventana hija'\">Escribir en la padre</button>");
}

// h) Mover la ventana 50 píxeles abajo y a la derecha
function apartadoH() {
    if (ventanaNueva) {
        ventanaNueva.moveBy(50, 50);
    }
}

// i) Mover la ventana a una posición concreta
function apartadoI() {
    if (ventanaNueva) {
        ventanaNueva.moveTo(200, 100);
    }
}

// j) Mover la barra de desplazamiento 10 píxeles hacia abajo
function apartadoJ() {
    window.scrollBy(0, 10);
}

// k) Desplazar la barra a una posición determinada
function apartadoK() {
    window.scrollTo(0, 300);
}

// a) Ir a la línea donde está el marcador
function irAlMarcador() {
    location.hash = "marcador";
}

// a) Mostrar el nombre del marcador (el texto después de # en la URL)
function nombreMarcador() {
    alert("El marcador se llama: " + location.hash.substring(1));
}

// b) Nombre del host
function mostrarHost() {
    alert("El host es: " + location.hostname);
}

// c) URL completa
function mostrarURL() {
    alert("La URL completa es: " + location.href);
}

// d) Preguntar por una dirección y activarla
function irADireccion() {
    const direccion = prompt("Escribe una dirección (con http:// o https://):");
    if (direccion !== null && direccion !== "") {
        location.href = direccion;
    }
}

// e) Protocolo
function mostrarProtocolo() {
    alert("El protocolo es: " + location.protocol);
}

// f) Recargar la página
function recargar() {
    location.reload();
}

// a) Fecha de la última actualización del documento
function ultimaActualizacion() {
    document.write("Última actualización: " + document.lastModified);
}

// b) URL desde la que se llegó a este documento
function mostrarReferrer() {
    if (document.referrer === "") {
        alert("No hay página anterior (has entrado directamente)");
    } else {
        alert("Vienes de: " + document.referrer);
    }
}

// c) Título del documento
function mostrarTitulo() {
    alert("El título es: " + document.title);
}

// d) URL completa
function mostrarURL() {
    alert("La URL es: " + document.URL);
}

// e) Ejemplo 1: escribir ANTES de que termine de cargar (no sobrescribe)
function ejemploAntes() {
    document.write("<p>Escrito mientras carga: no borra nada</p>");
}

// e) Ejemplo 2: escribir DESPUÉS de cargar (sobrescribe todo)
function ejemploDespues() {
    document.write("<p>Escrito después de cargar: ha borrado la página</p>");
}

// a) Número de anclas
function numeroAnclas() {
    alert("Anclas: " + document.anchors.length);
}

// b) Texto dentro del primer ancla
function textoPrimerAncla() {
    alert("Texto del primer ancla: " + document.anchors[0].innerHTML);
}

// c) Número de imágenes
function numeroImagenes() {
    alert("Imágenes: " + document.images.length);
}

// d) id de la primera imagen
function idPrimeraImagen() {
    alert("id de la primera imagen: " + document.images[0].id);
}

// e) Número de enlaces
function numeroEnlaces() {
    alert("Enlaces: " + document.links.length);
}

// f) Cambiar el título del documento
function cambiarTitulo() {
    document.title = "Título cambiado";
    alert("El título ahora es: " + document.title);
}