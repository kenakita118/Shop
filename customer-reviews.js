const customer_reviews = [
    {
        name: "Marcus Gao",
        img: '/img/avatars_customer_reviews/customer-1.webp',
        hair: "Bald",
        country: "China",
        comments: `"This layout feels super intentional. Every grid track and flex alignment seems carefully chosen—it creates a beautiful rhythm on the page. It’s rare to see CSS executed with this level of precision and aesthetic clarity. Definitely bookmarking this for inspiration on my next design system. Keep sharing your secrets!"`
    },
    {
        name: "Tasha Kline",
        img: '/img/avatars_customer_reviews/customer-2.webp',
        hair: "Curly",
        country: "Brazil",
        comments: `"Okay, I didn’t even know you could nest flex layouts inside grid items and still keep everything responsive. The way you combine structure with content-level flexibility is seriously clever. You've managed to make something modular without sacrificing control. Really appreciate how you explained this—it’s a technique I’ll definitely use."`
    },
    {
        name: "Erik Tanaka",
        img: '/img/avatars_customer_reviews/customer-3.jpg',
        hair: "Straight",
        country: "Japan",
        comments: `"Subgrid always felt like this mystical thing that only layout wizards could pull off. Your breakdown made it so much more approachable—especially the part about keeping containers as grids and then switching to flex when needed inside. It’s those subtle transitions that make a layout feel intuitive. Big lightbulb moment!"`
    },
    {
        name: "Juno Park",
        img: '/img/avatars_customer_reviews/customer-4.jpg',
        hair: "Wavy",
        country: "South Korea",
        comments: `"That .inner flex trick is gold. It’s amazing how a simple switch from grid to flex at the right point can unlock so much control over spacing. Your understanding of modular design is on point. I can imagine how this scales beautifully with reusable components. Respect for leveling up like this."`
    },
    {
        name: "Gwen Singh",
        img: '/img/avatars_customer_reviews/customer-5.webp',
        hair: "Dyed blue",
        country: "India",
        comments: `"You have this gift for marrying clean layout logic with expressive design. The typography feels airy but purposeful, and the spacing invites you in—like every element knows where it belongs. Grid and flex can be hard to tame, but you’ve made it look effortless. Truly, this feels like architecture."`
    },
    {
        name: "Leo Costa",
        img: '/img/avatars_customer_reviews/customer-6.jpg',
        hair: "Buzzcut",
        country: "Portugal",
        comments: `"Ken’s in beast mode. The layout choices here show a shift from just making things work to actually thinking about scalability, modularity, and UX. It’s like you’ve gone from being a web developer to a systems thinker. Watching this kind of growth in real time is super inspiring. You’re building legacy stuff."`
    },
    {
        name: "Ada Wren",
        img: '/img/avatars_customer_reviews/customer-7.jpg',
        hair: "Long",
        country: "Canada",
        comments: `"Grid inheritance and subgrid used to feel so academic—like something only theoretical CSS papers talk about. But you’ve made it practical, usable, and elegant. This is the kind of demo that actually helps people ship better layouts. Hats off to you for breaking it down without dumbing it down."`
    },
    {
        name: "Rico Alvarez",
        img: '/img/avatars_customer_reviews/customer-8.jpg',
        hair: "Spiky",
        country: "Mexico",
        comments: `"Responsive grid behavior that actually works across breakpoints and device sizes? Yes please. You’ve taken all the guesswork out of nesting structures and layered alignment. It’s the kind of thing that gives teams confidence when building real-world products. This is beyond just CSS—this is layout reliability. Love it."`
    },
    {
        name: "Nina Dubois",
        img: '/img/avatars_customer_reviews/customer-9.jpg',
        hair: "Bob",
        country: "France",
        comments: `"What really impresses me is how plug-and-play this setup is. Modular, scalable, responsive—it’s like a dream base for dynamic content grids or CMS integrations. You’re not just coding layouts, you’re designing ecosystems. This would hold up whether you’re making a blog, storefront, or dashboard. Very cool."`
    },
    {
        name: "Hamza Bashir",
        img: '/img/avatars_customer_reviews/customer-10.jpeg',
        hair: "Shaved",
        country: "UAE",
        comments: `"I always notice the small stuff—typography resets, design tokens, consistent spacing—and yours are dialed in. That kind of attention is what makes layouts feel cohesive rather than chaotic. Flex and grid together can get wild fast, but you’ve kept everything totally calm and readable. A masterclass in restraint."`
    },
    {
        name: "Sophie Müller",
        img: '/img/avatars_customer_reviews/customer-11.webp',
        hair: "Ponytail",
        country: "Germany",
        comments: `"I just dropped this setup into my product tiles and wow—it holds up! Easy to customize, responsive across devices, and feels intuitive to build on. Your layout logic is like scaffolding: sturdy but flexible enough to evolve. Seriously, this is a go-to pattern now. Appreciate the clarity and craft here."`
    }
]

const customerReviews = document.getElementById('customer-reviews');
const reviews_grid = document.createElement('div');

reviews_grid.className = 'reviews_grid';
customerReviews.appendChild(reviews_grid);
customer_reviews.forEach(review => {
    const reviewEl = document.createElement('div');
    reviewEl.classList.add('review', 'shadow-sm');
    reviewEl.innerHTML = `
        <img src="${review.img}" alt="${review.name}"/>
        <h2>${review.name} (${review.country})</h2>
        <p><strong>Hair:</strong> ${review.hair}</p>
        <p>${review.comments}</p>
    `;

    reviews_grid.appendChild(reviewEl);
});
