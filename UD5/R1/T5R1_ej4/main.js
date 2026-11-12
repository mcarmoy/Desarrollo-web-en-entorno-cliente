import { arrArticulos } from "./modulos/articulos.mjs";

//Funcion Main
(function Main() {
  // Enlazamos el CSS con DOM
  const enlaceCss = document.createElement("link");
  enlaceCss.rel = "stylesheet";
  enlaceCss.href = "./css/estilos.css";
  document.head.appendChild(enlaceCss);

  // Contenedor de todas las tarjetas
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor";

  arrArticulos.forEach((articulo) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    const titulo = document.createElement("h2");
    titulo.textContent = articulo.title;

    const imagen = document.createElement("img");
    imagen.src = articulo.image;

    const precio = document.createElement("p");
    precio.className = "precio";
    precio.textContent = articulo.price + " €";

    const descripcion = document.createElement("p");
    descripcion.className = "descripcion";
    descripcion.textContent = articulo.description;

    const categoria = document.createElement("p");
    categoria.className = "categoria";
    categoria.textContent = articulo.category;

    const valoracion = document.createElement("p");
    valoracion.className = "valoracion";
    valoracion.textContent = "★ " + articulo.rating.rate + " (" + articulo.rating.count + " votos)";

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(categoria);
    tarjeta.appendChild(valoracion);

    contenedor.appendChild(tarjeta);
  });

  document.body.appendChild(contenedor);
})();