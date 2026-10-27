export default function edadPromedio(personas) {
    let suma = 0;

    for (let i = 0; i < personas.length; i++) {
        suma += personas[i].edad;
    }

    return suma / personas.length;
}