(function () {
    const contador = document.getElementById("contador");
    const boton = document.getElementById("boton");

    boton.onclick = function () {
        contador.textContent = Number(contador.textContent) + 1;
    };
})()