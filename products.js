const products = [
    {
        name: "Strawberry Coffee",
        slug: "strawberry-coffee",
        desc: "Made with strawberries",
        price: "$8.99",
        image: "/img/products/strawberry.jpeg"
    },
    {
        name: "Mocha",
        slug: "mocha",
        desc: "Made with chocolate?",
        price: "$5.99",
        image: "/img/products/mocha.jpg"
    },
    {
        name: "Vanilla Latte",
        slug: "vanilla-latte",
        desc: "Sweet and smooth, with a touch of vanilla love.",
        price: "$6.49",
        image: "/img/products/vanilla_latte.jpg"
    },
    {
        name: "Hazelnut Brew",
        slug: "hazelnut-brew",
        desc: "Nutty, warm, and just right for sweater weather.",
        price: "$6.99",
        image: "/img/products/hazelnut_brew.jpeg"
    },
    {
        name: "Caramel Macchiato",
        slug: "caramel-macchiato",
        desc: "Layered sweetness with bold espresso beneath.",
        price: "$7.25",
        image: "/img/products/caramel_macchiato.webp"
    },
    {
        name: "Pumpkin Spice",
        slug: "pumpkin-spice",
        desc: "Autumn vibes in every aromatic sip.",
        price: "$7.49",
        image: "/img/products/pumpkin_spice.webp"
    },
    {
        name: "Cold Brew",
        slug: "cold-brew",
        desc: "Bold, chilled, and brewed to wake your inner strategist.",
        price: "$5.75",
        image: "/img/products/cold_brew.jpg"
    },
    {
        name: "Matcha Espresso Fusion",
        slug: "matcha-espresso-fusion",
        desc: "Green meets bean in this daring combo.",
        price: "$6.99",
        image: "/img/products/matcha.webp"
    }
]

const products_section = document.getElementById('products_section');
const products_grid = document.createElement('div');
products_grid.className = 'products_grid px-1 px-md-5';
products_section.appendChild(products_grid);

products.forEach(({ name, slug, desc, price, image }) => {
    const item = document.createElement('div');
    item.className = 'products_grid__item mt-5';
    item.id = slug;
    item.innerHTML = `
    <div class="item__content py-2 shadow-sm">
        <img src="${image}" alt="${name}"/>
        <h2 class="item__title">${name}</h2>
        <p class="item__desc">${desc}</p>
        <p class="item__price">${price}</p>
        <div class="item__buttons">
            <button class="item__Btn addBtn" id="addBtn-${slug}" data-id="${slug}"> + </button>
            <p id="item__countDisplay-${slug}"> 0 </p>
            <button class="item__Btn removeBtn" id="removeBtn-${slug}" data-id="${slug}"> - </button>
        </div>
    </div>
    `;
    /*
    <div class="item__content py-2 shadow-sm">
        <img src="${image}" alt="${name}"/>
        <h2 class="item__title">${name}</h2>
        <p class="item__desc">${desc}</p>
        <p class="item__price">${price}</p>
        <button class="item__addBtn">Add to cart</button>
    </div>
    */
    products_grid.appendChild(item);
});

// End of Products Page
const cartCounts = {};

products.forEach(product => {
  cartCounts[product.slug] = 0; // initialize each count
});

document.querySelectorAll('.addBtn').forEach(button => {
  button.addEventListener('click', () => {
    const slug = button.dataset.id;
    cartCounts[slug]++;
    document.getElementById(`item__countDisplay-${slug}`).innerText = cartCounts[slug];
    console.log(`${slug} added. Count: ${cartCounts[slug]}`);
  });
});

document.querySelectorAll('.removeBtn').forEach(button => {
  button.addEventListener('click', () => {
    const slug = button.dataset.id;
    cartCounts[slug]--;
    document.getElementById(`item__countDisplay-${slug}`).innerText = cartCounts[slug];
    console.log(`${slug} removed. Count: ${cartCounts[slug]}`);
  });
});