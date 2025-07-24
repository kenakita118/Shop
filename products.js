const products = [
    {
        name: "Strawberry Coffee",
        desc: "Made with strawberries",
        price: "$8.99",
        image: "/img/products/strawberry.jpeg"
    },
    {
        name: "Mocha",
        desc: "Made with chocolate?",
        price: "$5.99",
        image: "/img/products/mocha.jpg"
    },
    {
        name: "Vanilla Latte",
        desc: "Sweet and smooth, with a touch of vanilla love.",
        price: "$6.49",
        image: "/img/products/vanilla_latte.jpg"
    },
    {
        name: "Hazelnut Brew",
        desc: "Nutty, warm, and just right for sweater weather.",
        price: "$6.99",
        image: "/img/products/hazelnut_brew.jpeg"
    },
    {
        name: "Caramel Macchiato",
        desc: "Layered sweetness with bold espresso beneath.",
        price: "$7.25",
        image: "/img/products/caramel_macchiato.webp"
    },
    {
        name: "Pumpkin Spice",
        desc: "Autumn vibes in every aromatic sip.",
        price: "$7.49",
        image: "/img/products/pumpkin_spice.webp"
    },
    {
        name: "Cold Brew",
        desc: "Bold, chilled, and brewed to wake your inner strategist.",
        price: "$5.75",
        image: "/img/products/cold_brew.jpg"
    },
    {
        name: "Matcha Espresso Fusion",
        desc: "Green meets bean in this daring combo.",
        price: "$6.99",
        image: "/img/products/matcha.webp"
    }
]

const products_section = document.getElementById('products_section');
const products_grid = document.createElement('div');
products_grid.className = 'products_grid';
products_section.appendChild(products_grid);

products.forEach(({ name, desc, price, image }) => {
  const item = document.createElement('div');
  item.className = 'products_grid__item';
  item.innerHTML = `
    <div class="item__content">
      <img src="${image}" alt="${name}"/>
      <h2 class="item__title">${name}</h2>
      <p class="item__desc">${desc}</p>
      <p class="item__price">${price}</p>
      <button class="item__addBtn">Add to cart</button>
    </div>
  `;
  products_grid.appendChild(item);
});