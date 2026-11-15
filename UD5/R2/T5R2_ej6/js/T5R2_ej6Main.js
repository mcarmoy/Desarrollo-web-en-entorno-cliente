(function () {
    const imagenes = [
        "./img/img1.jpg",
        "./img/img2.jpg",
        "./img/img3.jpg"
    ];

    const imagen = document.getElementById("imagen");
    const contador = document.getElementById("contador");
    const anterior = document.getElementById("anterior");
    const siguiente = document.getElementById("siguiente");

    let posicion = 0;

    function mostrar() {
        imagen.src = imagenes[posicion];
        contador.textContent = "Imagen " + (posicion + 1) + " de " + imagenes.length;
    }

    siguiente.onclick = function () {
        posicion++;
        if (posicion === imagenes.length) {
            posicion = 0;
        }
        mostrar();
    };

    anterior.onclick = function () {
        posicion--;
        if (posicion < 0) {
            posicion = imagenes.length - 1;
        }
        mostrar();
    };

    mostrar();
})()