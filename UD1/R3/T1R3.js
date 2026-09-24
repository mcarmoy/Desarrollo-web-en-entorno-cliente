function ageCalculator(anioNacimiento, anioActual) {
    let edadMax = anioActual - anioNacimiento;
    let edadMin = edadMax - 1;

    return "Tiene " + edadMin + " o " + edadMax + " años";
}

function supplyCalculator(edadActual, edadMaxima, cantidadPorDia) {
    let anosRestantes = edadMaxima - edadActual;
    let total = Math.round(anosRestantes * 365 * cantidadPorDia);

    return "Necesitarás " + total + "kg hasta la edad de " + edadMaxima + ".";
}

function circumference(radio) {
    let resultado = 2 * Math.PI * radio;

    return "El perimetro de la circunferencia es " + resultado.toFixed(2);
}

function area(radio) {
    let resultado = Math.PI * radio * radio;

    return "El área es " + resultado.toFixed(2);
}

function convertTemperature(celsius, fahrenheit) {
    let aFahrenheit = (celsius * 9 / 5) + 32;
    let aCelsius = (fahrenheit - 32) * 5 / 9;

    return celsius + "°C es " + aFahrenheit.toFixed(1) + "°F<br>" +
           fahrenheit + "°F es " + aCelsius.toFixed(1) + "°C";
}
20