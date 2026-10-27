import Persona from "./Persona.js"
import edadPromedio from "./edadPromedio.js"

(function () {
    // 1. Objeto literal con un método
    const persona = {
        nombre: "Ana",
        edad: 20,
        esMayorDeEdad: function () {
            return this.edad >= 18;
        }
    };

    console.log("Objeto literal: " + persona.nombre + ", ¿mayor de edad?: " + persona.esMayorDeEdad());

    // 2. Objetos creados con la función constructora
    const p1 = new Persona("Luis", 17);
    const p2 = new Persona("Marta", 25);

    console.log("Constructora: " + p1.nombre + ", ¿mayor de edad?: " + p1.esMayorDeEdad());
    console.log("Constructora: " + p2.nombre + ", ¿mayor de edad?: " + p2.esMayorDeEdad());

    // 3. Array con varios objetos persona
    const personas = [
        new Persona("Ana", 20),
        new Persona("Luis", 17),
        new Persona("Marta", 25),
        new Persona("Pedro", 32),
        new Persona("Lucía", 15)
    ];

    console.log(personas);

    // 4. Edad promedio del grupo
    console.log("Edad promedio: " + edadPromedio(personas));
})()