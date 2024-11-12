let menu = [
    { texto: "Productos", href: "index.html" },
    { texto: "Contacto", href: "index.html" },
    { texto: "X", href: "index.html" }
];
let header = document.querySelector("header");
let arrayHTML = [];

for (let elemento of menu) {
    arrayHTML.push(`
        <a class="nav-item" aria-current="page" href=${elemento.href}> ${elemento.texto} </a>`)
}

arrayHTML.push(
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
                 <div class="navbar-nav ms-auto me-3" style="color: white; padding:8px;">
                    ${localStorage.getItem("email") ?
        `<span style="padding-right: 10px;"> Hola, ${localStorage.getItem("email")}</span> | 
        <a href="./cart.html" style="text-decoration: none; color: white; padding-right:10px;" > <li> <span class="material-symbols-outlined" style="padding-left:10px;">
  shopping_cart_checkout</span> <b style="position:relative; bottom:4px;" id="quantity">${localStorage.getItem("quantity")}</b> </li> </a> | <span style="cursor: pointer; padding-left: 10px;" onclick="logout()">CERRAR SESIÓN</span>`
        : `<a href="login.html" style="color: white; padding-left: 10px;" class="text-decoration-none">INICIAR SESIÓN</a>`
    }
                </div>
            </div>
        </nav>`)


header.innerHTML = arrayHTML.join("");
function logout() {
    localStorage.clear()
    location.href = "./index.html"
}