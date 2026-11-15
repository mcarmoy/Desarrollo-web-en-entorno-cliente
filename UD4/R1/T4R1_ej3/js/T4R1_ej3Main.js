(function () {
    window.onload = function () {
        const tiempo = document.getElementById("tiempo");
        let segundos = 0;

        tiempo.textContent = "Tiempo desde la carga: 0 segundos";

        setInterval(function () {
            segundos++;
            tiempo.textContent = "Tiempo desde la carga: " + segundos + " segundos";
        }, 1000);
    };
})()