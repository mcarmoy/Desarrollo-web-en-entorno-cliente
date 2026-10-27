import Alumno from "./Alumno.js"

export default class Colegio {
    constructor(nombre, numAulas, numAlumnos) {
        this.nombre = nombre;
        this.numAulas = numAulas;
        this.numAlumnos = numAlumnos;
        this.arrayAlumnos = [];

        // Identificador 0, 1, 2... y nombre alumno1, alumno2, alumno3...
        for (let i = 0; i < numAlumnos; i++) {
            this.arrayAlumnos.push(new Alumno(i, "alumno" + (i + 1), 5.00));
        }
    }

    // Método auxiliar: devuelve el alumno con ese identificador (o null si no existe)
    buscarAlumno(id) {
        for (let i = 0; i < this.arrayAlumnos.length; i++) {
            if (this.arrayAlumnos[i].id === id) {
                return this.arrayAlumnos[i];
            }
        }
        return null;
    }

    consultarNotaMedia(id) {
        const alumno = this.buscarAlumno(id);

        if (alumno === null) {
            console.log("No existe ningún alumno con identificador " + id);
        } else {
            console.log("La nota media de " + alumno.nombre + " es: " + alumno.notaMedia.toFixed(2));
        }
    }

    modificarNotaMedia(id, nuevaNota) {
        const alumno = this.buscarAlumno(id);

        if (alumno === null) {
            console.log("No existe ningún alumno con identificador " + id);
        } else if (nuevaNota < 0 || nuevaNota > 10) {
            console.log("La nota debe estar entre 0 y 10");
        } else {
            alumno.notaMedia = nuevaNota;
            console.log("Nota de " + alumno.nombre + " modificada a " + nuevaNota.toFixed(2));
        }
    }

    mostrarAlumnos() {
        console.log("Alumnos de " + this.nombre + ":");
        for (let i = 0; i < this.arrayAlumnos.length; i++) {
            const a = this.arrayAlumnos[i];
            console.log(a.id + " - " + a.nombre + " - nota media: " + a.notaMedia.toFixed(2));
        }
    }
}