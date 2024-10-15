let menu = [
    {texto: "Productos", href:"index.html"},
    {texto: "Contacto", href:"index.html"},
    {texto: "x", href:"index.html"}
];
let header = document.querySelector("header");
let arrayHTML = [];

for (let elemento of menu) {
    arrayHTML.push(`
        <a class="nav-item" aria-current="page" href=${elemento.href}> ${elemento.texto} </a>`)
}
let a =    
        `<nav class="navbar navbar-expand-lg d-block fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">E-COMMERCE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav column-gap-2">
                    ${arrayHTML.join("")}
                </div>
                </div>
            </div>
        </nav>`
header.innerHTML = a;