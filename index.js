const h1 = document.querySelector("h1");
h1.innerText = "Productos";

const autos = [
  {
    id: 1,
    model: "X",
    price: "1241$",
    description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg",
    category: "Moderno"
  }, {
    id: 2,
    model: "XT",
    price: "1840$",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
    category: "Vintage"
  }, {
    id: 3,
    model: "Reatta",
    price: "917$",
    description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg",
    category: "Moderno"
  }, {
    id: 4,
    model: "Expedition",
    price: "1767$",
    description: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg",
    category: "Moderno"
  }, {
    id: 5,
    model: "Dakota",
    price: "254$",
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg",
    category: "Vintage"
  }, {
    id: 6,
    model: "MP4-12C",
    price: "1376$",
    description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg",
    category: "Moderno"
  }, {
    id: 7,
    model: "Diablo",
    price: "1765$",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg",
    category: "Vintage"
  }, {
    id: 8,
    model: "Probe",
    price: "1931$",
    description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg",
    category: "Vintage"
  }, {
    id: 9,
    model: "Probeto",
    price: "1025$",
    description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    url: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg",
    category: "Moderno"
  },]

function cards(autos) {
  const section = document.querySelector("section");

  const mainContent = autos.map((auto) => `<div class="card"> 
                        <div class="img-container"><img src="${auto.url}" alt="Nike Air Zoom Pegasus 39 Shield" class="imagen-ajustada"></div>
                        <div class="card-body">
                            <h5 class="card-title">Car ${auto.model}</h5>
                            <p class="card-text">${auto.description.substring(0, 20)}...</p>
                            <p class="card-price">${auto.price}</p>
                            <p class="card-text">${auto.category}</p>
                            <button type="button" class="btn btn-outline-dark custom-btn-white"><a class="button-link" href="producto.html?prod=${auto.id}">See more</a></button>
                            <p class="card-text"><small class="text-body-secondary">Last updated 32 mins ago</small></p>
                        </div>
                    </div>`);

  section.innerHTML = mainContent.join("");
}

function filterList(category) {
  if (category === "todos") {
    cards(autos);
  } else if (category === "Moderno") {
    const moderno = autos.filter((auto) => auto.category === "Moderno");
    cards(moderno);
  } else if (category === "Vintage") {
    const vintage = autos.filter(auto => auto.category === "Vintage");
    cards(vintage);
  }
}
cards(autos);


let busqInput = document.querySelector(".busq")
let busqBtn = document.querySelector(".busqButton")
let resetBtn = document.querySelector(".Reset")

const filterFunction = () => {
  const section = document.querySelector("section");
  const filtered = autos.filter((auto) => busqInput.value.toLowerCase() === auto.model.toLowerCase());

  if (filtered.length > 0) {
    const filterData = filtered.map((auto) => `<div class="card"> 
                        <div class="img-container"><img src="${auto.url}" alt="Nike Air Zoom Pegasus 39 Shield" class="imagen-ajustada"></div>
                        <div class="card-body">
                            <h5 class="card-title">Car ${auto.model}</h5>
                            <p class="card-text">${auto.description.substring(0, 20)}...</p>
                            <p class="card-price">${auto.price}</p>
                            <p class="card-text">${auto.category}</p>
                            <button type="button" class="btn btn-outline-dark custom-btn-white"><a class="button-link" href="producto.html?prod=${auto.id}">See more</a></button>
                            <p class="card-text"><small class="text-body-secondary">Last updated 32 mins ago</small></p>
                        </div>
                    </div>`);
    section.innerHTML = filterData.join("");
  }
};

const resetInput = () => {
  busqInput.value = "";
  const mainContent = autos.map((auto) => `<div class="card"> 
                        <div class="img-container"><img src="${auto.url}" alt="Nike Air Zoom Pegasus 39 Shield" class="imagen-ajustada"></div>
                        <div class="card-body">
                            <h5 class="card-title">Car ${auto.model}</h5>
                            <p class="card-text">${auto.description.substring(0, 20)}...</p>
                            <p class="card-price">${auto.price}</p>
                            <p class="card-text">${auto.category}</p>
                            <button type="button" class="btn btn-outline-dark custom-btn-white"><a class="button-link" href="producto.html?prod=${auto.id}">See more</a></button>
                            <p class="card-text"><small class="text-body-secondary">Last updated 32 mins ago</small></p>
                        </div>
                    </div>`);
  const section = document.querySelector("section");
  section.innerHTML = mainContent.join("");
}


busqBtn.addEventListener("click", filterFunction);
resetBtn.addEventListener("click", resetInput);
