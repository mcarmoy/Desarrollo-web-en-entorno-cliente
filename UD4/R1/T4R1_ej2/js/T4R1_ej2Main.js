(function () {
    const posicion = document.getElementById("posicion");

    document.onmousemove = function (evento) {
        posicion.textContent = "x: " + evento.clientX + ", y: " + evento.clientY;
    };
})()