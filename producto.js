class Producto {
    constructor(titulo, detalle, precio, stock , imagen){
    this.titulo = titulo;
    this.detalle = detalle;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
}
}

const auto = new Producto("auto" , "fachero ", "100$", 120, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");

let etiquetas = `<div>
<h1> Hola </h1>
<div> Titulo ${auto.titulo}</div>
<div> Detalle ${auto.detalle}</div>
<div> Precio ${auto.precio}</div>
<div> Stock ${auto.stock}</div>
<div> Imagen <img src=${auto.imagen} alt="Imagen del auto" widht="150" height="150" /></div>
</div>
`
let main = document.querySelector("main");
main.innerHTML = etiquetas;
