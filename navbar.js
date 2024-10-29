let menu = [
    { texto: "Productos", function: "index.html" },
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
                 <div class="navbar-nav ms-auto me-3">
                    ${localStorage.getItem("email") ? 
                        `<span>${localStorage.getItem("email")}</span> | <span onclick="logout()">Log out</span>` 
                        : `<a href="login.html" class="text-decoration-none">Login</a>`
                    }
                </div>
            </div>
        </nav>`)


header.innerHTML = arrayHTML.join("");
function logout(){
    localStorage.clear()
    location.href = "./index.html"
}