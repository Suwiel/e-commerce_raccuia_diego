let menu = [
    { texto: "Productos", href: "index.html" },
    { texto: "Contacto", href: "index.html" },
];
let header = document.querySelector("header");
let arrayHTML = [];

for (let elemento of menu) {
    arrayHTML.push(`
        <a class="nav-item nav-link" aria-current="page" href=${elemento.href}>${elemento.texto}</a>`);
}

header.innerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">AUTOSXPRESS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <!-- Menú de navegación principal -->
                <div class="navbar-nav">
                    ${arrayHTML.join("")}
                </div>
                <!-- Elementos alineados a la derecha -->
                <div class="navbar-nav ms-auto align-items-center">
                    ${localStorage.getItem("email") ? `
                        <a class="nav-item nav-link d-flex align-items-center" href="./cart.html">
                            <span class="material-symbols-outlined me-1">
                                shopping_cart_checkout
                            </span>
                            <b id="quantity" style="font-size: 14px;">${localStorage.getItem("quantity") || 0}</b>
                        </a>
                        <span class="nav-item nav-link">Hola, ${localStorage.getItem("email")}</span>
                        <span class="nav-item nav-link" style="cursor: pointer;" onclick="logout()">Cerrar sesión</span>
                    ` : `
                        <a href="login.html" class="nav-item nav-link">Iniciar sesión</a>
                    `}
                </div>
            </div>
        </div>
    </nav>`;


function logout() {
    localStorage.clear()
    location.href = "./index.html"
}