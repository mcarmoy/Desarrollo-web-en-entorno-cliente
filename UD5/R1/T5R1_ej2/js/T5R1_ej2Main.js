(function () {
    const personas = [
        { codigo: 1, dni: "4455544X", Nombre: "Juan López López", edad: 18 },
        { codigo: 2, dni: "7778888X", Nombre: "Luis Mateo López", edad: 25 },
        { codigo: 3, dni: "6654545M", Nombre: "Pedro Gutierrez López", edad: 41 },
        { codigo: 4, dni: "9998897X", Nombre: "María Gutierrez López", edad: 32 },
    ];

    const tabla = document.createElement("table");
    tabla.border = "1";

    // Cabecera
    const cabecera = document.createElement("tr");
    const titulos = ["Código", "DNI", "Nombre", "Edad"];
    for (let i = 0; i < titulos.length; i++) {
        const th = document.createElement("th");
        th.textContent = titulos[i];
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);

    // Una fila por persona
    for (let i = 0; i < personas.length; i++) {
        const fila = document.createElement("tr");
        const datos = [personas[i].codigo, personas[i].dni, personas[i].Nombre, personas[i].edad];
        for (let j = 0; j < datos.length; j++) {
            const td = document.createElement("td");
            td.textContent = datos[j];
            fila.appendChild(td);
        }
        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
})()