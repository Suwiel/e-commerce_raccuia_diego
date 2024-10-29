const main = document.querySelector("main");

const elemento = window.location.search.split("=")[1];

const autos = [
  {
    id: 1,
    modelo: "Tundra",
    descripcion: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    precio: 34,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg`,
  }, {
    id: 2,
    modelo: "I",
    descripcion: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    precio: 62,
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg"
  }, {
    id: 3,
    modelo: "M3",
    descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    precio: 14,
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg"
  }, {
    id: 4,
    modelo: "Rio",
    descripcion: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    precio: 66,
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg"
  }, {
    id: 5,
    modelo: "Ram Van B250",
    descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    precio: 99,
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg"
  }, {
    id: 6,
    modelo: "Econoline E150",
    descripcion: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    precio: 23,
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg"
  }, {
    id: 7,
    modelo: "Rabbit",
    descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    precio: 54,
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg"
  }, {
    id: 8,
    modelo: "928",
    descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    precio: 63,
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg"
  }, {
    id: 9,
    modelo: "Intrepid",
    descripcion: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    precio: 52,
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg"
  }];


const carFind = autos.find((autos) => autos.id == elemento);


let etiquetas = `<div class="producto-container">
    <div class="producto-main">
        <div class="left-section" style= "display:grid; justify-content: center;">
            <img src="${carFind.url}" style="width: 80vh; height: 50vh; object-fit:cover;" alt="Zenbook Pro 14" id="main-image">
        </div>
<div class="input-group">
          <button class="btn btn-outline-secondary" type="button" onclick="sum()">+</button>
          <input type="text" id="numberInput" class="form-control" placeholder="0" aria-label="Recipient's username with two button addons">
          <button class="btn btn-outline-secondary" type="button" onclick="rest()">-</button>
        </div>
        <div style="display: flex; justify-content: center; align-items: center;">
        ${localStorage.getItem("email") ?
    `<button>Comprar</button>` :
    `<a href="login.html">Inicia sesión para comprar</a>`
  }
          </div>`


main.innerHTML = etiquetas;
const input = document.getElementById("numberInput");

function sum() {
  let currentValue = parseInt(input.value) || 0;
  input.value = currentValue + 1;
}

function rest() {
  let currentValue = parseInt(input.value) || 0;
  if (currentValue > 0) {
    input.value = currentValue - 1;
  }
}