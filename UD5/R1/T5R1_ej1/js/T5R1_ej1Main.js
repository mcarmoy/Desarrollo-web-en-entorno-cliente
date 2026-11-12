(function() {
     const enlaces = document.getElementsByTagName("a");
     const parrafos = document.getElementsByTagName("p");

     // 1. Número de enlaces de la página
    console.log("Número de enlaces de la página: " + enlaces.length);

    // 2. Dirección a la que enlaza el penultimo enlace
    console.log("El penúltimo enlace apunta a: " + enlaces[enlaces.length - 2].href);

    // 3. Numero de enlaces que enlazan a Google
    let enlacesGoogle = 0;
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href.includes("google")) {
            enlacesGoogle++;
        } 
    }
    console.log("Numero de enlaces que enlazan a Google: " + enlacesGoogle);

    // 4. Número de enlaces del tercer párrafo
    const enlacesTercerParrafo = parrafos[2].getElementsByTagName("a");
    console.log("Número de enlaces del tercer párrafo: " + enlacesTercerParrafo.length);
})()