function invierteCadena(cad_arg) {
    let resultado = "";
    for (let i = cad_arg.length - 1; i >= 0; i--) {
        resultado += cad_arg[i];
    }
    return resultado;
}

function invierteCadenaPalabras(cad_arg) {
    let resultado = "";
    let palabra = "";
    for (let i = 0; i < cad_arg.length; i++) {
        if (cad_arg[i] !== " ") {
            palabra += cad_arg[i];
        } else {
            resultado += invierteCadena(palabra) + " ";
            palabra = "";
        }
    }
    resultado += invierteCadena(palabra);
    return resultado;
}

function encuentraPalabraMasLarga(cad_arg) {
    let max = 0;
    let actual = 0;
    for (let i = 0; i < cad_arg.length; i++) {
        if (cad_arg[i] !== " ") {
            actual++;
        } else {
            if (actual > max) {
                max = actual;
            }
            actual = 0;
        }
    }
    if (actual > max) {
        max = actual;
    }
    return max;
}

function filtraPalabrasMasLargas(cad_arg, n) {
    let contador = 0;
    let actual = 0;
    for (let i = 0; i < cad_arg.length; i++) {
        if (cad_arg[i] !== " ") {
            actual++;
        } else {
            if (actual > n) {
                contador++;
            }
            actual = 0;
        }
    }
    if (actual > n) {
        contador++;
    }
    return contador;
}

function cadenaBienFormada(cad_arg) {
    return cad_arg[0].toUpperCase() + cad_arg.slice(1).toLowerCase();
}

function tipoCadena(cad_arg) {
    if (cad_arg === cad_arg.toUpperCase() && cad_arg === cad_arg.toLowerCase()) {
        return "La cadena no tiene letras";
    } else if (cad_arg === cad_arg.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas";
    } else if (cad_arg === cad_arg.toLowerCase()) {
        return "La cadena está formada solo por minúsculas";
    } else {
        return "La cadena mezcla mayúsculas y minúsculas";
    }
}

function localizaSubcadena(cadena, subcadena) {
    let posiciones = "";
    let pos = cadena.indexOf(subcadena);

    while (pos !== -1) {
        posiciones += pos + " ";
        pos = cadena.indexOf(subcadena, pos + 1);
    }

    return posiciones;
}

function consonantesYVocales(cad_arg) {
    const vocales = "aeiouAEIOU";
    let consonantes = "";
    let soloVocales = "";

    for (let i = 0; i < cad_arg.length; i++) {
        const letra = cad_arg[i];

        if (letra === " ") {
            continue;
        }

        if (vocales.indexOf(letra) !== -1) {
            soloVocales += letra;
        } else {
            consonantes += letra;
        }
    }

    return consonantes + soloVocales;
}

function eliminaRepetidos(cad_arg) {
    let resultado = "";

    for (let i = 0; i < cad_arg.length; i++) {
        if (resultado.indexOf(cad_arg[i]) === -1) {
            resultado += cad_arg[i];
        }
    }

    return resultado;
}

function posicionSubcadena(cadena, subcadena) {
    return cadena.indexOf(subcadena);
}

function esPalindromo(cad_arg) {
    let limpia = "";

    for (let i = 0; i < cad_arg.length; i++) {
        if (cad_arg[i] !== " ") {
            limpia += cad_arg[i].toLowerCase();
        }
    }

    let invertida = "";
    for (let i = limpia.length - 1; i >= 0; i--) {
        invertida += limpia[i];
    }

    return limpia === invertida;
}

function cuentaPalabras(cad_arg) {
    let contador = 0;
    let enPalabra = false;

    for (let i = 0; i < cad_arg.length; i++) {
        if (cad_arg[i] !== " ") {
            if (!enPalabra) {
                contador++;
                enPalabra = true;
            }
        } else {
            enPalabra = false;
        }
    }

    return contador;
}

function validateCreditCard(numero) {
    // Regla 1: 16 caracteres, todos dígitos
    if (numero.length !== 16) {
        return false;
    }

    let suma = 0;
    let hayDistintos = false;

    for (let i = 0; i < numero.length; i++) {
        const c = numero[i];

        if (c < "0" || c > "9") {
            return false;
        }

        suma += parseInt(c);

        // Regla 2: algún dígito distinto del primero
        if (c !== numero[0]) {
            hayDistintos = true;
        }
    }

    if (!hayDistintos) {
        return false;
    }

    // Regla 3: último dígito par
    if (parseInt(numero[15]) % 2 !== 0) {
        return false;
    }

    // Regla 4: suma mayor que 16
    if (suma <= 16) {
        return false;
    }

    return true;
}

function validateCreditCard2(numero) {
    let sinGuiones = "";

    for (let i = 0; i < numero.length; i++) {
        if (numero[i] !== "-") {
            sinGuiones += numero[i];
        }
    }

    return validateCreditCard(sinGuiones);
}

function validaLuhn(numero) {
    let suma = 0;
    let duplicar = false;

    for (let i = numero.length - 1; i >= 0; i--) {
        let d = parseInt(numero[i]);

        if (duplicar) {
            d = d * 2;
            if (d > 9) {
                d = d - 9;
            }
        }

        suma += d;
        duplicar = !duplicar;
    }

    return suma % 10 === 0;
}

function validaCaducidad(fecha) {
    const partes = fecha.split("/");
    const mes = parseInt(partes[0]);
    const anio = 2000 + parseInt(partes[1]);

    if (isNaN(mes) || isNaN(anio) || mes < 1 || mes > 12) {
        return false;
    }

    // Primer día del mes siguiente: la tarjeta vale hasta final del mes
    const limite = new Date(anio, mes, 1);
    return new Date() < limite;
}

function validateCreditCard3(numero, caducidad) {
    let sinGuiones = "";
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] !== "-") {
            sinGuiones += numero[i];
        }
    }

    if (sinGuiones.length !== 16) {
        return false;
    }

    for (let i = 0; i < sinGuiones.length; i++) {
        if (sinGuiones[i] < "0" || sinGuiones[i] > "9") {
            return false;
        }
    }

    return validaLuhn(sinGuiones) && validaCaducidad(caducidad);
}