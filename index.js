console.log("hola");
const h5 = document.querySelectorAll("h5");
const text = document.querySelectorAll(".card-text");
const imagen = document.querySelectorAll(".card img");

h5.forEach((h5) => {
    h5.innerText = "Hola";
});

text.forEach((text) => {
    text.innerText = "holahola";
});

imagen.forEach((imagen) =>{
    imagen.src = "https://media.istockphoto.com/id/1334993248/es/vector/rana-verde-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=37vajhZ1LjihBvZ21nHixOb2n9hlWv7RhTYIHY1GU1w="
})