import { arrArticulos } from "./modulos/articulos.mjs";

//Funcion Main
(function Main() {
  arrArticulos.forEach((articulo) => {
    const div = document.createElement("div");

    const titulo = document.createElement("h2");
    titulo.textContent = articulo.title;

    const imagen = document.createElement("img");
    imagen.src = articulo.image;
    imagen.width = 150;

    const precio = document.createElement("p");
    precio.textContent = "Precio: " + articulo.price + " €";

    const descripcion = document.createElement("p");
    descripcion.textContent = articulo.description;

    const categoria = document.createElement("p");
    categoria.textContent = "Categoría: " + articulo.category;

    const valoracion = document.createElement("p");
    valoracion.textContent = "Valoración: " + articulo.rating.rate + " (" + articulo.rating.count + " votos)";

    div.appendChild(titulo);
    div.appendChild(imagen);
    div.appendChild(precio);
    div.appendChild(descripcion);
    div.appendChild(categoria);
    div.appendChild(valoracion);

    document.body.appendChild(div);
  });
})();
