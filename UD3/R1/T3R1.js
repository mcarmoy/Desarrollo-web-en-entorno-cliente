function maximo(a, b, c, d) {
    let max = a;

    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    if (d > max) {
        max = d;
    }

    return max;
}

function lanzamiento() {
    return Math.floor(Math.random() * 6) + 1;
}

function simulaTiradas(tiradas) {
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;
    let c6 = 0;

    for (let i = 0; i < tiradas; i++) {
        const resultado = lanzamiento();

        switch (resultado) {
            case 1:
                c1++;
                break;
            case 2:
                c2++;
                break;
            case 3:
                c3++;
                break;
            case 4:
                c4++;
                break;
            case 5:
                c5++;
                break;
            case 6:
                c6++;
                break;
        }
    }

    return [c1, c2, c3, c4, c5, c6];
}

function volumenEsfera(radio) {
    return ((4 / 3) * Math.PI * radio * radio * radio).toFixed(2);
}

function areaCirculo(radio) {
    return Math.PI * radio * radio;
}

function potenciaRecursiva(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return base * potenciaRecursiva(base, exponente - 1);
}

function factorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}