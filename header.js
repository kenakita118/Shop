const header = document.createElement('header');
header.innerHTML = `
    <nav class="shadow-sm mb-5">
        <a class="header__logo" href="index.html">
            <h1>John's Coffee</h1>
        </a>

        <ul class="header__links">
            <li><a href="/pages/index.html">Home</a></li>
            <li><a href="/pages/products.html">Products</a></li>
            <li><a href="/pages/about.html">About</a></li>
            <li><a href="/pages/news.html">News</a></li>
        </ul>
    </nav>
`;

document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav ul li a");

    console.log(navLinks);
    console.log(`Hi ${currentPath}`);
    navLinks.forEach(link => {
    // Compare href with current path
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("active"); // Assuming your CSS uses .active to highlight
    }
    });
    });

document.body.append(header);

