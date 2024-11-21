const cartSection = document.querySelector("#cards")

function getCart(cards) {
  const list = cards.map(card => `<div class="card border shadow-none">
      <div class="card-body">
       <div class="d-flex align-items-start border-bottom pb-3">
        <div class="me-4">
         <img src="${card.product.url}" alt="${card.product.model}"
          class="avatar-lg rounded"
         />
        </div>
        <div class="flex-grow-1 overflow-hidden">
         <h5 class="text-truncate font-size-18">${card.product.model}</h5>
         <div class="row">
          <div class="col-md-4">
           <div class="mt-3">
            <p class="text-muted mb-2">Precio</p>
            <h5 class="mb-0 mt-2">$${card.product.price}</h5>
           </div>
          </div>
          <div class="col-md-5">
           <div class="mt-3">
            <p class="text-muted mb-2">Cantidad</p>
            <h5 class="mb-0 mt-2">${card.quantity}</h5>
           </div>
          </div>
          <div class="col-md-3">
           <div class="mt-3">
            <p class="text-muted mb-2">Total</p>
            <h5>$${Number(card.product.price.replace('$', '')) * Number(card.quantity)}</h5>
           </div>
          </div>
           <div class="col-md-3">
           <div class="mt-3">
            <p class="text-muted mb-2" onclick="removeItem(${card.product.id})">Eliminar</p>
         </div>
        </div>
       </div>
      </div>
     </div>
        `)

  cartSection.innerHTML = list.join("")
}

getCart(JSON.parse(localStorage.getItem("cart")))


function total(cards) {
  let cartTotal = document.querySelector("#cart-total")

  let total = cards.length > 0 ? cards.reduce((acumulado, actual) => acumulado + Number(actual.product.price.replace('$', '')) * actual.quantity, 0)
    : 0


  cartTotal.innerText = "$" + total
}

total(JSON.parse(localStorage.getItem("cart")))


function clearCards() {
  let quantity = 0;
  let quantityTag = document.querySelector("#quantity");
  localStorage.setItem("cart", JSON.stringify([]));
  localStorage.setItem("quantity", JSON.stringify(quantity));
  quantityTag.innerText = quantity;
  getCart([]);
  total(0);
  document.querySelector("#btn-clear-cart").style.display = "none";
}

function removeItem(id) {
  const cards = JSON.parse(localStorage.getItem("cart"))

  const newCards = cards.filter(card => card.product.id != id)

  localStorage.setItem("cart", JSON.stringify(newCards))

  getCart(newCards)
  total(newCards)

  let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
  localStorage.setItem("quantity", quantity)
  const quantityTag = document.querySelector("#quantity")
  quantityTag.innerText = quantity
}

function checkout() {

  const user = localStorage.getItem("email");
  const cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart || cart.length === 0) {
    Swal.fire({
      text: "Tu carrito está vacío. Agrega productos antes de proceder al checkout.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#E94560",
    });
    return;
  }

  const recurso = {
    user,
    items: cart,
  };


  fetch("https://673cf93f4db5a341d8339525.mockapi.io/cart", {
    method: "POST",
    body: JSON.stringify(recurso),
  })
    .then((response) => response.json())
    .then((data) => {
      Swal.fire({
        text: `Gracias ${data.user}. Hemos registrado tu orden número ${data.id}`,
        confirmButtonText: "Sí",
        confirmButtonColor: "#06f",
      });

      clearCards();

    })
    .catch(() => {
      Swal.fire({
        text: "Ups, hubo un problema, intenta más tarde.",
        confirmButtonText: "Sí",
        confirmButtonColor: "#06f",
      });
    });
}
