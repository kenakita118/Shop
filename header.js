const header = document.createElement('header');
header.innerHTML = `
    <nav class="shadow-sm mb-5 px-1 px-md-2 px-lg-5">
        <div class="header__logo_and_button">
            <a class="header__logo_container" href="index.html">
                <img class="header__logo" src="/img/logo/logo_JohnsCoffee.png" alt="John's Coffee">
            </a>

            <div class="nav-toggle">
                <i id="navToggleBtn"class="menu-icon fa-solid fa-bars"></i>
            </div>
        </div>

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

    navLinks.forEach(link => {
    // Compare href with current path
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("active"); // Assuming your CSS uses .active to highlight
    }
    });
    });

document.body.append(header);

// Responsive Navbar Toggle Button

const navToggleBtn = document.getElementById('navToggleBtn')

navToggleBtn.onclick = function () {
    document.querySelector('.header__links').classList.toggle('show');
}

