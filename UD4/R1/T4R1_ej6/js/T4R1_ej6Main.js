(function () {
    const colores = [
        { codigo: "#FF0000", nombre: "rojo" },
        { codigo: "#00FF00", nombre: "verde" },
        { codigo: "#0000FF", nombre: "azul" },
        { codigo: "#FFFF00", nombre: "amarillo" },
        { codigo: "#00FFFF", nombre: "cian" },
        { codigo: "#FF00FF", nombre: "magenta" },
        { codigo: "#000000", nombre: "negro" },
        { codigo: "#808080", nombre: "gris" },
        { codigo: "#FFA500", nombre: "naranja" },
        { codigo: "#800080", nombre: "morado" },
        { codigo: "#A52A2A", nombre: "marrón" },
        { codigo: "#FFC0CB", nombre: "rosa" }
    ];

    window.onload = function () {
        const titulo = document.getElementById("titulo");
        const tabla = document.getElementById("tabla");

        // Título: cambia de imagen al pasar el ratón
        titulo.src = "./img/titulo1.png";
        titulo.onmouseover = function () {
            titulo.src = "./img/titulo2.png";
        };
        titulo.onmouseout = function () {
            titulo.src = "./img/titulo1.png";
        };

        // Tabla con los 12 códigos (3 filas de 4)
        for (let i = 0; i < 3; i++) {
            const fila = document.createElement("tr");
            for (let j = 0; j < 4; j++) {
                const color = colores[i * 4 + j];
                const celda = document.createElement("td");
                celda.textContent = color.codigo;

                celda.onmouseover = function () {
                    celda.style.color = color.codigo;
                };
                celda.onmouseout = function () {
                    celda.style.color = "black";
                    celda.textContent = color.nombre;
                };

                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
    };
})()