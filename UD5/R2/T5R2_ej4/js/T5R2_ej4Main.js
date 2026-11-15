(function () {
    const lista = document.getElementById("lista");
    const boton = document.getElementById("boton");

    let contador = 0;

    boton.onclick = function () {
        contador++;
        const elemento = document.createElement("li");
        elemento.textContent = "Elemento " + contador;
        lista.appendChild(elemento);
    };
})()