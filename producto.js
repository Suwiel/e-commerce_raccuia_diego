const main = document.querySelector("main");

const elemento = window.location.search.split("=")[1];

const autos = [
  {
    id: 1,
    model: "X",
    price: "1241$",
    description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg",
    category: "Moderno",
    stock: 23
  }, {
    id: 2,
    model: "XT",
    price: "1840$",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
    category: "Vintage",
    stock: 12
  }, {
    id: 3,
    model: "Reatta",
    price: "917$",
    description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg",
    category: "Moderno",
    stock: 11
  }, {
    id: 4,
    model: "Expedition",
    price: "1767$",
    description: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg",
    category: "Moderno",
    stock: 3
  }, {
    id: 5,
    model: "Dakota",
    price: "254$",
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg",
    category: "Vintage",
    stock: 8
  }, {
    id: 6,
    model: "MP4-12C",
    price: "1376$",
    description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg",
    category: "Moderno",
    stock: 11
  }, {
    id: 7,
    model: "Diablo",
    price: "1765$",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg",
    category: "Vintage",
    stock: 8
  }, {
    id: 8,
    model: "Probe",
    price: "1931$",
    description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg",
    category: "Vintage",
    stock: 18
  }, {
    id: 9,
    model: "Probeto",
    price: "1025$",
    description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg",
    category: "Moderno",
    stock: 11
  },]


const carFind = autos.find((autos) => autos.id == elemento);


let etiquetas = `<div class="producto-container">
    <div class="producto-main">
    <div class="left-section" style= "display:flex; flex-direction: column">
    <img src="${carFind.url}" style="width: 80vh; height: 50vh; object-fit:cover;" alt="Zenbook Pro 14" id="main-image">
            <h5 class="card-title">Car ${carFind.model}</h5>
                            <p class="card-text">${carFind.description.slice(0, 20)}...</p>
                            <p class="card-price">${carFind.price}</p>
                            <p class="card-text">${carFind.category}</p>
                            <p class="card-text"> Stock: ${carFind.stock}</p>
        </div>
<div class="input-group">
          <button class="btn btn-outline-secondary" type="button" onclick="sum()">+</button>
          <input type="text" id="numberInput" class="form-control" value="1" aria-label="Recipient's username with two button addons">
          <button class="btn btn-outline-secondary" type="button" onclick="rest()">-</button>
        </div>
        <div style="display: flex; justify-content: center; align-items: center;">
        ${localStorage.getItem("email") ?
    `<button class="btn btn-outline-secondary" type="button" onclick="addItem()">Comprar</button>` :
    `<a href="login.html">Inicia sesión para comprar</a>`
  }
          </div>`


main.innerHTML = etiquetas;
const input = document.getElementById("numberInput");

function sum() {
  let currentValue = parseInt(input.value);
  if (currentValue < carFind.stock) {
    input.value = currentValue + 1;
  }
}

function rest() {
  let currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
  }
}

function addItem() {
  function add() {
    Toastify({
      text: `Agregaste ${input.value} producto/s al carrito de compras`,
      style: { background: "#06f" },
    }).showToast();

    let cart = JSON.parse(localStorage.getItem("cart"));

    const idProduct = Number(window.location.search.split("=")[1]);
    const product = autos.find(autos => autos.id === idProduct);
    const existeIdEnCart = cart.some(autos => autos.product.id === idProduct)

    if (existeIdEnCart) {
      cart = cart.map(autos => {
        if (autos.product.id === idProduct) {
          return {
            ...autos, quantity: autos.quantity + Number(input.value)
          }
        } else {
          return autos
        }
      })
    } else {
      cart.push({ product: product, quantity: Number(input.value) })
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
    localStorage.setItem("quantity", quantity);
    const quantityTag = document.querySelector("#quantity")
    quantityTag.innerText = quantity
    input.value = 1
  }

  Swal.fire({
    text: "Estás segura/o de que estás segura/o de que querés agregar el producto al carrito?",
    confirmButtonText: "Sí",
    cancelButtonText: "No",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonColor: "#4189f5",
    cancelButtonColor: "#DB5079",
  }).then(result => {
    if (result.isConfirmed) {
      add()
    }
  })
  
}

